import {stopSubmit} from "redux-form";

import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'ADD-ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS'

const initialState = {
  posts: [
    {id: 1, message: "Welcome", likesCount: 5},
    {id: 2, message: "Hello", likesCount: 10},
    {id: 3, message: "Good day", likesCount: 20},
  ],
  newPostText: "blabla",
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      }

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ""
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    }
    case SAVE_PHOTO_SUCCESS: {
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    }
    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const deletePost = (postId) => ({type: DELETE_POST, postId})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId) => {
  return async dispatch => {
    const data = await usersAPI.getProfile(userId)
    dispatch(setUserProfile(data))
  }
}

export const getStatus = (userId) => {
  return async dispatch => {
    try {
      const data = await profileAPI.getStatus(userId)
      dispatch(setStatus(data))
    } catch (e) {
      console.log(e)
    }
  }
}

export const updateStatus = (status) => {
  return async dispatch => {
    try {
      const data = await profileAPI.updateStatus(status)

      if (data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    } catch (e) {
      console.log(e.response.statusText)
    }

  }
}

export const savePhoto = (file) => {
  return async dispatch => {
    const data = await profileAPI.savePhoto(file)

    if (data.resultCode === 0) {
      dispatch(savePhotoSuccess(data.data.photos))
    }
  }
}

export const saveProfile = (profile) => {
  return async (dispatch, getState) => {
    const userId = getState().auth.userId
    const data = await profileAPI.saveProfile(profile)

    if (data.resultCode === 0) {
      dispatch(getUserProfile(userId))
    } else {
      dispatch(stopSubmit("editProfile", {_error: data.messages[0]}))
      return Promise.reject(data.messages[0])
    }
  }
}

export default profileReducer