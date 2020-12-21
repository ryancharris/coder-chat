import React from 'react'
import { createUseStyles } from 'react-jss'

import ChatLog from './ChatLog'
import ChatInput from './ChatInput'

import { NotificationPermisionStatus } from '../../components/App'

type ChatProps = {
  username: string | null
  notificationPermission: NotificationPermisionStatus
}

export default function Chat(
  props: ChatProps
): React.FunctionComponentElement<HTMLDivElement> {
  const { notificationPermission, username } = props
  const styles = useStyles()

  return (
    <div className={styles.chat}>
      <div className={styles.chatLogWrapper}>
        <ChatLog
          username={username}
          notificationPermission={notificationPermission}
        />
      </div>
      <div className={styles.chatInputWrapper}>
        <ChatInput
          username={username}
          notificationPermission={notificationPermission}
        />
      </div>
    </div>
  )
}

const useStyles = createUseStyles({
  chat: {
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
  },
  chatLogWrapper: {
    backgroundColor: 'yellow',
    height: '88vh',
  },
  chatInputWrapper: {
    backgroundColor: '#BCECE0',
    height: '12vh',
  },
})
