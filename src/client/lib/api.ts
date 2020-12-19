type ApiMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

interface MessageArgs {
  from: string
  body: string
}

class API {
  protected url: string

  constructor(url: string) {
    this.url = url
  }

  /*** Public route methods ***/

  /**
   * Sends a test request to the API that just gets back a { success: true } response
   */
  test() {
    return this.request<{ success: Boolean }>('GET', '/test')
  }

  /**
   * Post a new message to the chat, new messages will be sent back via the
   * websocket, even your own messages.
   */
  postMessage(args: MessageArgs) {
    return this.request<{ success: Boolean }>('POST', '/message', args)
  }

  /**
   * Opens a new WebSocket object to the chat server. Refer to
   * https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
   * for how to interact with websockets.
   */
  openMessageSocket() {
    const wsUrl = this.url.replace('https', 'wss').replace('http', 'ws')
    return new WebSocket(`${wsUrl}/messages`)
  }

  // Internal request method
  protected request<R extends object>(
    method: ApiMethod,
    path: string,
    args?: object
  ): Promise<R> {
    let body = null
    let query = ''
    const headers = new Headers()
    headers.append('Accept', 'application/json')

    if (method === 'POST' || method === 'PUT') {
      body = JSON.stringify(args)
      headers.append('Content-Type', 'application/json')
    }

    return fetch(this.url + path + query, {
      method,
      headers,
      body
    })
      .then(async res => {
        if (!res.ok) {
          let errMsg
          try {
            const errBody = await res.json()
            if (!errBody.error) throw new Error()
            errMsg = errBody.error
          } catch (err) {
            throw new Error(`${res.status}: ${res.statusText}`)
          }
          throw new Error(errMsg)
        }
        return res.json()
      })
      .then(res => res.data as R)
      .catch(err => {
        console.error(`API error calling ${method} ${path}`, err)
        throw err
      })
  }
}

export default new API('http://localhost:5000')
