import {stopSubmit} from "redux-form";

import {authAPI, securityAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'auth/GET_CAPTCHA_URL_SUCCESS'

const initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  captchaUrl: null

}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export const setAuthUserData = (userId, email, login, isAuth) =>
  ({type: SET_USER_DATA, payload: {userId, email, login, isAuth}})
export const getCaptchaUrlSuccess = (captchaUrl) =>
  ({type: GET_CAPTCHA_URL_SUCCESS, payload: {captchaUrl}})

export const getAuthUserData = () => {
  return async dispatch => {
    const data = await authAPI.me()

    if (data.resultCode === 0) {
      const {id, email, login} = data.data
      dispatch(setAuthUserData(id, email, login, true))
    }
  }
}

export const login = (email, password, rememberMe, captcha) => {
  return async dispatch => {
    const data = await authAPI.login(email, password, rememberMe, captcha)

    if (data.resultCode === 0) {
      dispatch(getAuthUserData())
    } else {
      if (data.resultCode === 10) {
        dispatch(getCaptchaUrl())
      }

      const message = data.messages.length > 0 ? data.messages[0] : "Some error"
      dispatch(stopSubmit("login", {_error: message}))
    }
  }
}

export const logout = () => {
  return async dispatch => {
    const data = await authAPI.logout()

    if (data.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false))
    }
  }
}

export const getCaptchaUrl = () => {
  return async dispatch => {
    const data = await securityAPI.getCaptchaUrl()
    const captchaUrl = data.url

    dispatch(getCaptchaUrlSuccess(captchaUrl))
  }
}

export default authReducer