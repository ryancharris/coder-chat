import React, { useEffect, useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { toast } from 'react-toastify'

import api from '../../lib/api'
import GuestMessage from './GuestMessage'
import UserMessage from './UserMessage'

import { Message } from '../../../types/message'
import { NotificationPermisionStatus } from '../App'

type ChatLogProps = {
  username: string | null
  notificationPermission: NotificationPermisionStatus
}

function ChatLog(props: ChatLogProps) {
  const { username, notificationPermission } = props
  const styles = useStyles()
  const anchorRef = useRef(null)
  const messagesRef = useRef([])
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const socket = api.openMessageSocket()

    function handleSocketError(event) {
      // TODO: Handle socket error
      console.log('error', event)
    }

    function handleSocketMessage(event) {
      const json = JSON.parse(event.data)

      if (json.type === 'message') {
        // Persist the list of messages in state and a ref so
        // we don't lose the accumultated messages on re-render.
        messagesRef.current = [...messagesRef.current, json.data]
        setMessages([...messagesRef.current, json])

        // Scroll to bottom of chat log
        anchorRef.current.scrollIntoView({ behavior: 'smooth' })

        // Send notification we've received a message not from user
        if (json.data.from !== username) {
          if (notificationPermission !== 'granted') {
            toast(`${json.data.from}: ${json.data.body}`)
          } else {
            new Notification(json.data.from, { body: json.data.body })
          }
        }
      }
    }

    socket.addEventListener('error', handleSocketError)
    socket.addEventListener('message', handleSocketMessage)

    return () => {
      socket.removeEventListener('error', handleSocketError)
      socket.removeEventListener('message', handleSocketMessage)
      socket.close()
    }
  }, [])

  return (
    <div className={styles.chatLog}>
      <div className={styles.logWrapper}>
        {messagesRef.current.map((msg: Message, idx: number) => {
          return msg.from === username ? (
            <GuestMessage
              key={`${idx}-${msg.from}`}
              body={msg.body}
              from={msg.from}
              time={msg.time}
            />
          ) : (
            <UserMessage
              key={`${idx}-${msg.from}`}
              body={msg.body}
              from={msg.from}
              time={msg.time}
            />
          )
        })}
        <div ref={anchorRef} className={styles.anchor}></div>
      </div>
    </div>
  )
}

export default ChatLog

const useStyles = createUseStyles({
  chatLog: {
    backgroundColor: '#4C5270',
    height: '100%',
    padding: '18px',
  },
  logWrapper: {
    backgroundColor: 'white',
    borderRadius: '4px',
    height: '100%',
    overflowY: 'scroll',
    padding: '12px',
  },
  anchor: {
    height: 0,
  },
})
