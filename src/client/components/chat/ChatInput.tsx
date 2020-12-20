import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'

function ChatInput() {
  const styles = useStyles()
  return (
    <div className={styles.chatInput}>
      {/* <input type="text" className={styles.chatInputInput} /> */}
      <textarea className={styles.chatInputText}></textarea>
      <div className={styles.chatInputButtonWrapper}>
        <button className={styles.chatInputButton}>Send</button>
      </div>
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
    padding: '36px 12px',
  },
  chatInputText: {
    border: '1px solid black',
    borderRadius: '4px',
    fontSize: '1.5rem',
    height: '100%',
    margin: '0 6px 0 12px',
    resize: 'none',
    width: '100%',
  },
  chatInputButtonWrapper: {
    height: '100%',
    padding: '18px 0',
  },
  chatInputButton: {
    backgroundColor: '#F652A0',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    height: '100%',
    margin: '0 12px 0 6px',
    width: '144px',
  },
})
