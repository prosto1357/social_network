import React, {memo} from "react"

import {Field, reduxForm} from "redux-form";

import Post from "./Post/Post";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../../utils/validators/validators";

import s from "./MyPosts.module.css"

const maxLength10 = maxLengthCreator(10)

const MyPosts = memo(props => {
  const postElements = props.posts.map((p, index) =>
    <Post
      key={index}
      message={p.message}
      likesCount={p.likesCount}
    />)

  const onAddPost = (values) => {
    props.addPost(values.newPostText)
  }

  return (
    <div className={s.postsBlock}>
      <h3>MyPosts</h3>
      <AddNewPostForm onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postElements}
      </div>
    </div>
  )
})

let AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div><Field
        name="newPostText"
        component={Textarea}
        validate={[required, maxLength10]}
      /></div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

AddNewPostForm = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm)

export default MyPosts
