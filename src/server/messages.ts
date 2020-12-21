import { EventEmitter } from 'events'
import { Message, MessageArgs } from '../types/message'

class Messages extends EventEmitter {
  protected messages: Message[] = []

  addMessage(messageArgs: MessageArgs): Message {
    const newMessage = {
      ...messageArgs,
      time: Date.now(),
    }
    this.messages.push(newMessage)
    this.emit('message', newMessage)
    return newMessage
  }

  getMessages(): Message[] {
    return [...this.messages]
  }
}

export default new Messages()
