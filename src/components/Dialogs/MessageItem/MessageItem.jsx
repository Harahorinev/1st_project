import React from 'react'
import classes from './../Dialogs.module.css'

const MessageItem = (props) => {
  let newMessageElement = React.createRef()
  let addMessage = () => {
    let messageText = newMessageElement.current.value
    alert(messageText)
  }
  return (
    <div>
      <div className={classes.dialog}>{props.message}</div>
      <div>
        <textarea ref={newMessageElement}></textarea>
      </div>
      <div>
        <button onClick={addMessage}>Add</button>
      </div>
    </div>
  )
}

export default MessageItem
