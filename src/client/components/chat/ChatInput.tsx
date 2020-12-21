import React from 'react'
import { createUseStyles } from 'react-jss'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'

import api from '../../lib/api'
import { MessageArgs } from '../../../types/message'

import { NotificationPermisionStatus } from '../App'

type ChatInputProps = {
  username: string | null
  notificationPermission: NotificationPermisionStatus
}

export default function ChatInput(
  props: ChatInputProps
): React.FunctionComponentElement<HTMLDivElement> {
  const { notificationPermission, username } = props
  const styles = useStyles()
  const { register, handleSubmit, watch, errors, setValue } = useForm()

  const message: string = watch('message', '')

  const onSubmit = (): void => {
    setValue('message', '')

    api
      .postMessage({
        from: username,
        body: message,
      } as MessageArgs)
      .then(res => {
        if (notificationPermission !== 'granted') {
          toast.success('Message sent 🚀')
        } else {
          new Notification('Message sent 🚀')
        }
      })
      .catch(err => {
        if (notificationPermission !== 'granted') {
          toast.error('Message failed 😢')
        } else {
          new Notification('Message failed 😢')
        }
      })
  }

  return (
    <div className={styles.chatInput}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.chatInputForm}>
        <div className={styles.inputWrapper}>
          <input
            autoFocus
            name="message"
            ref={register({
              minLength: 1,
              maxLength: 200,
              required: true,
            })}
            className={styles.chatInputText}
            placeholder="Enter a message"
            type="text"
          />
          {!errors.message && (
            <p className={styles.charCounter}>{message.length}/200</p>
          )}
          {errors.message && errors.message.type === 'maxLength' && (
            <span className={styles.chatInputValidationError}>
              Messages are limited to 200 characters
            </span>
          )}
        </div>
        <button className={styles.chatInputButton} type="submit">
          Send
        </button>
      </form>
    </div>
  )
}

const useStyles = createUseStyles({
  chatInput: {
    height: '100%',
    width: '100%',
    padding: '24px 18px',
  },
  chatInputForm: {
    display: 'flex',
    flexDirection: 'row',
  },
  inputWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1px',
    width: '100%',
  },
  chatInputText: {
    border: '1px solid black',
    borderRadius: '4px',
    fontSize: '1.25rem',
    height: '100%',
    margin: '0 6px 0 0',
    padding: '4px 8px',
  },
  chatInputButton: {
    backgroundColor: '#F652A0',
    border: 'none',
    borderRadius: '4px',
    color: 'white',
    cursor: 'pointer',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    margin: '0 0 0 6px',
    padding: '8px 4px',
    width: '144px',
  },
  chatInputValidationError: {
    color: 'red',
    fontSize: '0.75rem',
    margin: '8px 0 0 0',
    textAlign: 'left',
  },
  charCounter: {
    fontSize: '0.75rem',
    marginTop: '8px',
  },
})
