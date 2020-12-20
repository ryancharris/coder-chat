import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { toast } from 'react-toastify'

import { NotificationPermisionStatus } from '../App'

type JoinFormProps = {
  setUsername: Function
  notificationPermission: NotificationPermisionStatus
}

function usernameIsValid(str: string): boolean {
  if (str === null || str.length < 3 || str.length > 20) {
    return false
  }

  return true
}

function JoinForm(props: JoinFormProps): JSX.Element {
  const { notificationPermission, setUsername } = props
  const styles = useStyles()
  const [name, setName] = useState<string>('')
  const validUserName = usernameIsValid(name)

  return (
    <div className={styles.joinForm}>
      <h1 className={styles.joinFormHeader}>Welcome to Coder Chat</h1>
      <form className={styles.joinFormForm}>
        <input
          autoFocus
          className={styles.joinFormInput}
          required
          placeholder="Enter your name"
          type="text"
          onChange={e => setName(e.currentTarget.value)}
        />
        <button
          className={styles.joinFormButton}
          type="submit"
          onClick={e => {
            e.preventDefault()

            if (validUserName) {
              setUsername(name)

              if (notificationPermission !== 'granted') {
                toast.success(`Logged in as ${name}`, {
                  autoClose: 3000,
                })
              } else {
                new Notification(`Logged in as ${name}`)
              }
            } else {
              if (notificationPermission !== 'granted') {
                toast.error(
                  'Usernames must be between 3 and 20 alphanumeric characters'
                )
              } else {
                new Notification(
                  'Usernames must be between 3 and 20 alphanumeric characters'
                )
              }
            }
          }}
        >
          Join
        </button>
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
    flexDirection: 'column',
  },
  joinFormInput: {
    border: '1px solid black',
    borderRadius: '4px',
    fontSize: '1.5rem',
    marginBottom: '8px',
    padding: '4px 8px',
  },
  joinFormButton: {
    backgroundColor: '#F652A0',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    padding: '8px 4px',
  },
})
