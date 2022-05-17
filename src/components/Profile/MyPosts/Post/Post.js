import React from "react"

import s from "./Post.module.css"

const Post = (props) => {

  return (
    <div className={s.item}>
      <img
        src="https://png.pngtree.com/element_our/20190522/ourlarge/pngtree-avatar-silhouette-picture-image_1067774.jpg"
        alt="ava"
      />
      {props.message} likes {props.likesCount}
    </div>
  )
}

export default Post
