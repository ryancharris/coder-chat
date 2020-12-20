import React, { useState, useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import api from '../lib/api'

import Chat from './chat/Chat'
import JoinForm from './join/JoinForm'

enum ServerStates {
  AVAILABLE = 'available',
  UNAVAILABLE = 'unavailable',
}

export type NotificationPermisionStatus = 'granted' | 'denied' | 'default'

export const App: React.FC = () => {
  const styles = useStyles()
  const [error, setError] = useState<Error | null>(null)
  const [username, setUsername] = useState<string | null>(null)
  const [serverState, setServerState] = useState<ServerStates | null>(null)
  const [
    notificationPermission,
    setNotificationPermission,
  ] = useState<NotificationPermisionStatus>('default')

  useEffect(() => {
    api
      .test()
      .then(() => setServerState(ServerStates.AVAILABLE))
      .catch(err => {
        setServerState(ServerStates.UNAVAILABLE)
        setError(err)
      })
  }, [])

  useEffect(() => {
    if (!('Notification' in window) || Notification.permission === 'denied') {
      setNotificationPermission('denied')
    }

    if (Notification.permission === 'granted') {
      setNotificationPermission('granted')
    }

    if (Notification.permission === 'default') {
      Notification.requestPermission()
        .then(permission => {
          setNotificationPermission(permission)
        })
        .catch(err => {
          setNotificationPermission('denied')
        })
    }
  })

  return (
    <div className={styles.app}>
      {serverState === ServerStates.UNAVAILABLE && (
        <div className={styles.fail}>
          <h1 className={styles.failHeader}>Server unavailable...</h1>
          {error && <pre>{error.message}</pre>}
        </div>
      )}
      {serverState === ServerStates.AVAILABLE && username && (
        <Chat
          username={username}
          notificationPermission={notificationPermission}
        />
      )}
      {serverState === ServerStates.AVAILABLE && !username && (
        <JoinForm setUsername={setUsername} />
      )}
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
  fail: {
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
  failHeader: {
    margin: '0 0 24px 0',
  },
})
