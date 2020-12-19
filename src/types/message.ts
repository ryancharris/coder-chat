// The main message data type
export interface Message {
  from: string;
  body: string;
  time: number;
}

// When sending messages to the server, we don't specify time, since the
// server will set the time the message was posted.
export type MessageArgs = Omit<Message, 'time'>;
