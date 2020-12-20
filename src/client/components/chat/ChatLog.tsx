import React, { useEffect, useRef, useState } from 'react'
import { createUseStyles } from 'react-jss'

import api from '../../lib/api'

function ChatLog() {
  const styles = useStyles()
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
        {messagesRef.current.map((msg, idx) => {
          return <p key={`${msg.from}-${idx}`}>{msg.body}</p>
        })}
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
    padding: '12px',
  },
})
