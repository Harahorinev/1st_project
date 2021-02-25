import React from 'react'
import {
  sendMessageCreator,
  updateNewMessageBodyCreator,
} from '../../redux/messagePageReducer'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import MessageItem from './MessageItem/MessageItem'

const Dialogs = (props) => {
  let state = props.store.getState().messagePage

  let dialogsElements = state.DialogsData.map((d) => (
    <DialogItem name={d.name} id={d.id} ava={d.ava} />
  ))

  let messageElements = state.MessagesData.map((el) => (
    <MessageItem message={el.message} className={classes.dialog} />
  ))

  let newMessageBody = state.newMessageBody

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())
  }

  let onNewMessageChange = (ev) => {
    let body = ev.target.value
    props.store.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={classes.dialogs}>
      <div className={classes.usersDialog}>{dialogsElements}</div>
      <div className={classes.chats}>
        <div>{messageElements}</div>
        <div>
          <div>
            <textarea
              value={newMessageBody}
              onChange={onNewMessageChange}
              placeholder="Enter your message"
            ></textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>Send</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dialogs
