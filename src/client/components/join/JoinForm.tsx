import React from 'react'
import { createUseStyles } from 'react-jss'

function JoinForm() {
  const styles = useStyles()
  return (
    <div className={styles.joinForm}>
      <h1 className={styles.joinFormHeader}>Welcome to Coder Chat</h1>
      <form className={styles.joinFormForm}>
        <input
          className={styles.joinFormInput}
          required
          placeholder="Enter your name"
          type="text"
          minlength="3"
          maxlength="20"
        />
        <button className={styles.joinFormButton} type="submit">Join</button>
      </form>
    </div>
  )
}

export default JoinForm

const useStyles = createUseStyles({
  joinForm: {
    backgroundColor: 'white',
    border: '1px solid black',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    margin: '12px',
    minWidth: '320px',
    padding: '48px',
    textAlign: 'center',
  },
  joinFormHeader: {
    margin: '0 0 24px 0',
  },
  joinFormForm: {
    display: 'flex',
    flexDirection: 'column'
  },
  joinFormInput: {
    border: '1px solid black',
    borderRadius: '4px',
    fontSize: '1.5rem',
    marginBottom: '8px',
    padding: '4px 8px'
  },
  joinFormButton: {
    backgroundColor: '#F652A0',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.2rem',
    padding: '8px 4px'
  }
})
