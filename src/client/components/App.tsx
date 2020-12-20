import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import api from '../lib/api'

import Chat from './chat/Chat'
import JoinForm from './join/JoinForm'

export const App: React.FC = () => {
  const styles = useStyles()
  const [success, setSuccess] = useState<boolean>(false)
  const [error, setError] = useState<Error | null>(null)
  const [username, setUsername] = useState<string | null>(null)

  // Make a test request immediately on component render to the API, and set
  // component state based on the response
  // useEffect(() => {
  //   api
  //     .test()
  //     .then(() => setSuccess(true))
  //     .catch(err => setError(err))
  // }, [])

  // Set content message based on the current state of the App
  /* let content
   * if (success) {
   *   content = <pre>Got a response from the server!</pre>
   * } else if (error) {
   *   content = <pre className="error">{error.toString()}</pre>
   * } else {
   *   content = <p>Sending test request to API...</p>
   * } */

  return (
    <div className={styles.app}>
      {username && <Chat username={username} />}
      {!username && <JoinForm setUsername={setUsername} />}
    </div>
  )
}

// This JSS function creates a hook that the above component can use, providing
// it with conflict-avoidant class names that provide the styles.
// You can read more about it here: https://cssinjs.org/react-jss
const useStyles = createUseStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
    },
    body: {
      margin: 0,
      backgroundColor: '#BCECE0',
    },
  },
  app: {
    alignItems: 'center',
    display: 'flex',
    height: '100vh',
    flexDirection: 'column',
    justifyContent: 'center',
    fontFamily: 'Helvetica',
  },
  title: {
    marginBottom: 20,
  },
  text: {
    '& code': {
      color: '#8e44ad',
    },
  },
})
