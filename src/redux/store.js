import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: "Welcome", likesCount: 5},
        {id: 2, message: "Hello", likesCount: 10},
        {id: 3, message: "Good day", likesCount: 20},
      ],
      newPostText: "blabla"
    },
    dialogsPage: {
      messages: [
        {id: 1, message: "Hey"},
        {id: 2, message: "Yo"},
        {id: 3, message: "Ou"},
      ],
      dialogs: [
        {id: 1, name: "Ivan"},
        {id: 2, name: "Petr"},
        {id: 3, name: "Dima"},
      ],
      newMessageBody: ""
    }
  },
  sidebar: {},
  _callSubscriber() {
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReducer(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}

export default store
