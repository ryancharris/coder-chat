import express from 'express'
import expressWs from 'express-ws'
import bodyParser from 'body-parser'
import cors from 'cors'
import MessagesManager from './messages'
import { Message } from '../types/message'

/*************** Configure server ***************/

const PORT = 5000
const { app } = expressWs(express())
app.set('port', PORT)
app.use(bodyParser.json())
app.use(cors())

/******************** Routes ********************/

app.get('/test', (req, res) => {
  res.json({
    data: { success: true }
  })
})

app.post('/message', (req, res) => {
  try {
    // Make sure they sent the right arguments
    if (!req.body.from) {
      throw new Error('Messages require a "from" argument')
    }
    if (!req.body.body) {
      throw new Error('Messages require a "body" argument')
    }
    if (req.body.body.length > 1000) {
      throw new Error('Message body cannot be more than 1000 characters')
    }

    // Add the post and send it back to them
    const message = MessagesManager.addMessage(req.body)
    res.json({
      data: { message }
    })
  } catch (err) {
    res.json({ error: err.message })
  }
})

app.ws('/messages', ws => {
  // First send all messages
  MessagesManager.getMessages().forEach(msg => {
    ws.send(JSON.stringify({ type: 'message', data: msg }))
  })

  // Then send any subsequent messages
  const msgListener = (msg: Message) => {
    ws.send(JSON.stringify({ type: 'message', data: msg }))
  }
  MessagesManager.addListener('message', msgListener)

  // Keep the socket alive by sending 'ping' messages every 10s
  const pingInterval = setInterval(() => {
    ws.send(JSON.stringify({ type: 'ping' }))
  }, 10000)

  // Stop the listener on close
  ws.addEventListener('close', () => {
    MessagesManager.removeListener('message', msgListener)
    clearInterval(pingInterval)
  })
})

/**************** Start server ****************/

app.listen(PORT, () => {
  console.log(`Server has started on http://localhost:${PORT}`)
})
