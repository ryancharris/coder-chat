import React from 'react'
import { createUseStyles } from 'react-jss'

function ChatLog() {
  const styles = useStyles()
  return (
    <div className={styles.chatLog}>
      <div className={styles.logWrapper}>ChatLog</div>
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
