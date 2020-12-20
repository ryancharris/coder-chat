import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

import api from '../../lib/api'
import { Message, MessageArgs } from '../../../types/message'

type ChatInputProps = {
  username: string | null
}

function ChatInput(props: ChatInputProps) {
  const { username } = props
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
        // TODO: Add success messaging
        // console.log('message sent')
        // console.log(res)
      })
      .catch(err => {
        // TODO: Add failure messaging
        // console.log('message failed to send')
        // console.log(err)
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
