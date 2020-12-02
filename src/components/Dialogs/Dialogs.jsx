import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id

  return (
    <div className={classes.dialog + ' ' + classes.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

const MessageItem = (props) => {
  return <div className={classes.dialog}>{props.message}</div>
}

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.usersDialog}>
        <DialogItem name="1" id="1" />
        <DialogItem name="2" id="2" />
        <DialogItem name="3" id="3" />
        <DialogItem name="4" id="4" />
        <DialogItem name="5" id="5" />
      </div>
      <div className={classes.chats}>
        <MessageItem message="1" />
        <MessageItem message="2" />
        <MessageItem message="3" />
        <MessageItem message="4" />
        <MessageItem message="5" />
      </div>
    </div>
  )
}

export default Dialogs
