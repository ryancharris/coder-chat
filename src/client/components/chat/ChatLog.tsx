import React, { useEffect, useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'

import api from '../../lib/api'
import GuestMessage from './GuestMessage'
import UserMessage from './UserMessage'

import { Message } from '../../../types/message'

type ChatLogProps = {
  username: string | null
}

function ChatLog(props: ChatLogProps) {
  const { username } = props
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
        messagesRef.current = [...messagesRef.current, json.data]
        setMessages([...messagesRef.current, json])
        anchorRef.current.scrollIntoView({ behavior: 'smooth' })
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
            <UserMessage
              key={`${idx}-${msg.from}`}
              body={msg.body}
              from={msg.from}
              time={msg.time}
            />
          ) : (
            <GuestMessage
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
