import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = (props) => {
  let dialogsElements = props.state.DialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ))

  let messageElements = props.state.MessagesData.map((el) => (
    <MessageItem message={el.message} />
  ))

  return (
    <div className={classes.dialogs}>
      <div className={classes.usersDialog}>{dialogsElements}</div>
      <div className={classes.chats}>{messageElements}</div>
    </div>
  )
}

export default Dialogs
