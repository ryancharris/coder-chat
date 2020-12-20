import React from 'react'
import { createUseStyles } from 'react-jss'

type GuestMessageProps = {
  body: string
  from: string
  time: number
}

export default function GuestMessage(props: GuestMessageProps) {
  const styles = useStyles()
  const { body, from, time } = props

  return (
    <div className={styles.chatMessage}>
      <div className={styles.messageWrapper}>
        <p className={styles.messageBody}>{body}</p>
        <div className={styles.messageSender}>
          <span>{from}</span>
          <span className={styles.messageTimestamp}>
            {new Date(time).toLocaleTimeString()}
          </span>
        </div>
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  chatMessage: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0 0 44px 0',
  },
  messageWrapper: {
    alignItems: 'flex-end',
    display: 'flex',
    flexDirection: 'column',
  },
  messageBody: {
    background: '#4C5270',
    borderRadius: '4px',
    color: 'white',
    fontSize: '1.2rem',
    marginBottom: '8px',
    padding: '8px 12px',
  },
  messageTimestamp: {
    color: '#4C5270',
    display: 'inline-block',
    fontSize: '0.75rem',
    margin: '0 0 0 8px',
  },
  messageSender: {
    fontSize: '0.9rem',
    textAlign: 'right',
  },
})
