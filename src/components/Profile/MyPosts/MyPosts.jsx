import React from 'react'
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profilePageReducer'
import classes from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {
  let posts = props.PostsData.map((p) => (
    <Post message={p.message} likesCounter={p.likesCount} />
  ))

  let newPostElement = React.createRef()

  let addPost = () => {
    props.dispatch(addPostActionCreator())
  }

  let onPostChange = () => {
    let text = newPostElement.current.value
    //props.dispatch({ type: 'UPDATE-NEW-POST-TEXT', newText: text })
    let action = updateNewPostTextActionCreator(text)
    props.dispatch(action)
  }

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostTextUI}
        ></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={classes.posts}>{posts}</div>
    </div>
  )
}
export default MyPosts
