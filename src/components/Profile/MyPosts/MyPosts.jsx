import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <Post message="Hi, how are u?" likesCounter="30" />
      <Post message="I'm fine" likesCounter="25" />
    </div>
  )
}
export default MyPosts
