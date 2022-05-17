const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY'
const SEND_MESSAGE = 'SEND_MESSAGE'

const initialState = {
  messages: [
    {id: 1, message: "Hey"},
    {id: 2, message: "Yo"},
    {id: 3, message: "Ou"},
  ],
  dialogs: [
    {id: 1, name: "Ivan"},
    {id: 2, name: "Petr"},
    {id: 3, name: "Dima"},
  ]
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      }
    case SEND_MESSAGE:
      const body = {
        id: 5,
        message: action.newMessageBody,
      }

      return {
        ...state,
        messages: [...state.messages, body]
      }
    default:
      return state
  }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export const updateNewMessageBodyCreator = (body) =>
  ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer