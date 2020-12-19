import React from 'react'
import { createUseStyles } from "react-jss";

function JoinForm() {
  const styles = useStyles();
  return (
    <div className={styles.joinForm}>
      <h1>Welcome to Coder Chat</h1>
      <form>
        <input
          required
          placeholder="Enter your name"
          type="text"
          minlength="3"
          maxlength="20"
        />
        <button>Join</button>
      </form>
    </div>
  )
}

export default JoinForm

const useStyles = createUseStyles({
  joinForm: {
    display: 'flex',
    flexDirection: 'column',
  }
})
