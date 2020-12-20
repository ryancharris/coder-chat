import React from 'react'
import { createUseStyles } from 'react-jss'

type ChatMessageProps = {
  body: string
  from: string
  time: number
}

function ChatMessage(props: ChatMessageProps) {
  const styles = useStyles()
  const { body, from, time } = props

  return (
    <div className={styles.chatMessage}>
      <div className={styles.messageWrapper}>
        <span className={styles.messageBody}>{body}</span>
        <span className={styles.messageTimestamp}>
          {new Date(time).toLocaleTimeString()}
        </span>
      </div>
      <p>{from}</p>
    </div>
  )
}

export default ChatMessage

const useStyles = createUseStyles({
  chatMessage: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 36px 0',
  },
  messageWrapper: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: '8px',
  },
  messageBody: {
    background: '#4C5270',
    borderRadius: '4px',
    color: 'white',
    padding: '8px 12px',
  },
  messageTimestamp: {
    color: '#4C5270',
    fontSize: '0.75rem',
  },
})
