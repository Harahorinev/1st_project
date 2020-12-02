import React from 'react'
import classes from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.usersDialog}>
        <div className={classes.dialog + ' ' + classes.active}>1</div>
        <div className={classes.dialog}>2</div>
        <div className={classes.dialog}>3</div>
        <div className={classes.dialog}>4</div>
        <div className={classes.dialog}>5</div>
      </div>
      <div className={classes.chats}>
        <div className={classes.message}>1</div>
        <div className={classes.message}>2</div>
        <div className={classes.message}>3</div>
        <div className={classes.message}>4</div>
        <div className={classes.message}>5</div>
      </div>
    </div>
  )
}

export default Dialogs
