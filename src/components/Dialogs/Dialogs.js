import React from "react"

import {Field, reduxForm} from "redux-form";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

import s from "./Dialogs.module.css"

const maxLength10 = maxLengthCreator(10)

const Dialogs = (props) => {
  const state = props.dialogsPage

  const dialogsElements = state.dialogs.map(d =>
    <DialogItem
      key={d.id}
      name={d.name}
      id={d.id}
    />)
  const messagesElements = state.messages.map(m =>
    <Message
      key={m.id}
      message={m.message}
      id={m.id}
    />)

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageBody)
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength10]}
          name="newMessageBody"
          placeholder="Enter your message"
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)

export default Dialogs
