import * as axios from "axios";

const baseURL = 'https://social-network.samuraijs.com/api/1.0'

const instance = axios.create({
  baseURL,
  withCredentials: true,
  headers: {"API-KEY": "_a6383b54-620e-4693-95e4-b7f170e9ced7"}
})

export const usersAPI = {
  getUsers(page = 1, count = 10) {
    const url = 'users'

    return instance.get(url, {
      params: {page, count}
    })
      .then(res => res.data)
  },
  follow(userId) {
    const url = 'follow/'

    return instance.post(url + userId)
      .then(res => res.data)
  },
  unfollow(userId) {
    const url = 'follow/'

    return instance.delete(url + userId)
      .then(res => res.data)
  },
  getProfile(userId) {//duplicate
    return profileAPI.getProfile(userId)
  }
}

export const profileAPI = {
  getProfile(userId) {
    const url = 'profile/'

    return instance.get(url + userId)
      .then(res => res.data)
  },
  getStatus(userId) {
    const url = 'profile/status/'

    return instance.get(url + userId)
      .then(res => res.data)
  },
  updateStatus(status) {
    const url = 'profile/status'

    return instance.put(url, {status})
      .then(res => res.data)
  },
  savePhoto(photoFile) {
    const url = 'profile/photo'

    const formData = new FormData()
    formData.append("image", photoFile)

    return instance.put(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => res.data)
  },
  saveProfile(profile) {
    const url = 'profile'

    return instance.put(url, profile)
      .then(res => res.data)
  }
}

export const authAPI = {
  me() {
    const url = 'auth/me'

    return instance.get(url)
      .then(res => res.data)
  },
  login(email, password, rememberMe = false, captcha = null) {
    const url = 'auth/login'

    return instance.post(url, {email, password, rememberMe, captcha})
      .then(res => res.data)
  },
  logout() {
    const url = 'auth/login'

    return instance.delete(url)
      .then(res => res.data)
  },
}

export const securityAPI = {
  getCaptchaUrl() {
    const url = 'security/get-captcha-url'

    return instance.get(url)
      .then(res => res.data)
  }
}