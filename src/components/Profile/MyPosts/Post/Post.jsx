import React from 'react'
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://i.pinimg.com/236x/7c/ab/18/7cab184c5e791921ed607e23458492b6.jpg" />
      {props.message}
      <div>
        <span>like {props.likesCounter}</span>
      </div>
    </div>
  )
}
export default Post
