import React from "react";

import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";

const state = {
  posts: [
    {id: 1, message: "Welcome", likesCount: 5},
    {id: 2, message: "Hello", likesCount: 10},
    {id: 3, message: "Good day", likesCount: 20},
  ]
}

it('length', () => {
  const action = addPostActionCreator("newText")
  const newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(4)
})

it('correct message', () => {
  const action = addPostActionCreator("newText")
  const newState = profileReducer(state, action)

  expect(newState.posts[3].message).toBe("newText")
})

it('deleting', () => {
  const action = deletePost(1)
  const newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(2)
})

it('incorrect id', () => {
  const action = deletePost(1000)
  const newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3)
})