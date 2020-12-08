import React from 'react'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let posts = props.PostsData.map((p) => (
    <Post message={p.message} likesCounter={p.likesCount} />
  ))

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>{posts}</div>
    </div>
  )
}
export default MyPosts
