import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { toast } from 'react-toastify'

import api from '../../lib/api'
import { Message, MessageArgs } from '../../../types/message'

import { NotificationPermisionStatus } from '../App'

type ChatInputProps = {
  username: string | null
  notificationPermission: NotificationPermisionStatus
}

function createNotification(type: string, message: string): void {
  switch (type) {
    case 'success':
      NotificationManager.success(message, null, 2000)
      break
    case 'error':
      NotificationManager.error(message, null, 2000)
      break
    default:
      break
  }
}

function ChatInput(props: ChatInputProps) {
  const { notificationPermission, username } = props
  const styles = useStyles()
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    setMessage('')

    api
      .postMessage({
        from: username,
        body: message,
      } as MessageArgs)
      .then(res => {
        if (notificationPermission !== 'granted') {
          // TODO: Add success messaging
          console.log('Message sent')
          toast.success('Message sent 🚀')
        } else {
          new Notification('Message sent 🚀')
        }
      })
      .catch(err => {
        if (notificationPermission !== 'granted') {
          // TODO: Add failure messaging
          console.log('Message failed')
          toast.error('Message failed 😢')
        } else {
          new Notification('Message failed 😢')
        }
      })
  }

  return (
    <div className={styles.chatInput}>
      <textarea
        value={message}
        className={styles.chatInputText}
        placeholder="Enter a message"
        onChange={e => setMessage(e.currentTarget.value)}
      ></textarea>
      <button className={styles.chatInputButton} onClick={sendMessage}>
        Send
      </button>
    </div>
  )
}

export default ChatInput

const useStyles = createUseStyles({
  chatInput: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    padding: '24px 18px',
  },
  chatInputText: {
    border: '1px solid black',
    borderRadius: '4px',
    fontSize: '1.25rem',
    height: '100%',
    margin: '0 6px 0 0',
    resize: 'none',
    width: '100%',
  },
  chatInputButton: {
    backgroundColor: '#F652A0',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0 0 0 6px',
    padding: '8px 4px',
    width: '144px',
  },
})
