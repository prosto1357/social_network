import React from "react";
import {reduxForm} from "redux-form";

import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";

import s from './ProfileInfo.module.css'
import s2 from '../../common/FormsControls/FormsControls.module.css'

const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <button>save</button>
      {props.error && <div className={s2.formSummaryError}>
        {props.error}
      </div>}
      <div>
        <b>Full name:</b> {createField("Full name", "fullName", [], Input)}
      </div>
      <div>
        <b>Full name:</b> {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
      </div>
      <div>
        <b>Skills:</b> {createField("Skills", "lookingForAJobDescription", [], Textarea)}
      </div>
      <div>
        <b>About me:</b> {createField("About me", "aboutMe", [], Textarea)}
      </div>
      <div><b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
        return (
          <div className={s.contact} key={key}>
            <b>{key}: {createField(key, "contacts." + key, [], Input)}</b>
          </div>
        )
      })}</div>
    </form>
  )
}

export default reduxForm({form: 'editProfile'})(ProfileDataForm)