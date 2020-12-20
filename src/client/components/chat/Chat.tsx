import React from 'react'

type ChatProps = {
  username: string | null
}

function Chat(props: ChatProps) {
  const { username } = props
  return <p>Hello, {username}</p>
}

export default Chat
