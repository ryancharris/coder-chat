import React from 'react'
import { createUseStyles } from 'react-jss'

function ChatInput() {
  const styles = useStyles()
  return (
    <div className={styles.chatInput}>
      <textarea
        className={styles.chatInputText}
        placeholder="Enter a message"
      ></textarea>
      <button className={styles.chatInputButton}>Send</button>
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
