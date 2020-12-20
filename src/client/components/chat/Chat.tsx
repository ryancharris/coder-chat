import React from 'react'
import { createUseStyles } from 'react-jss'

import ChatLog from './ChatLog'
import ChatInput from './ChatInput'

type ChatProps = {
  username: string | null
}

function Chat(props: ChatProps) {
  const { username } = props
  const styles = useStyles()

  return (
    <div className={styles.chat}>
      <div className={styles.chatLogWrapper}>
        <ChatLog />
      </div>
      <div className={styles.chatInputWrapper}>
        <ChatInput username={username} />
      </div>
    </div>
  )
}

export default Chat

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
