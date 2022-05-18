import React, {useState} from "react"

import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import userPhoto from "../../../assets/images/user.png";

import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false)

  if (!props.profile) {
    return <Preloader/>
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0])
    }
  }

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false)
    })
  }

  return (
    <>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large || userPhoto} alt="" className={s.mainPhoto}/>
        {props.isOwner && <input type="file" onChange={onMainPhotoSelected}/>}
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
        {editMode ? <ProfileDataForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/> :
          <ProfileData
            profile={props.profile} isOwner={props.isOwner}
            setEditMode={setEditMode}
          />
        }
      </div>
    </>
  )
}

const ProfileData = (props) => {
  const {lookingForAJob, lookingForAJobDescription, aboutMe, fullName, contacts, isOwner} = {...props.profile}
  return (
    <div>
      {props.isOwner &&
      <button onClick={() => {
        props.setEditMode(true)
      }}
      >
        edit
      </button>
      }
      <div>Looking for a job {lookingForAJob ? "yes" : "no"}</div>
      {lookingForAJob && <div>Skills {lookingForAJobDescription}</div>}
      <div>About me {aboutMe}</div>
      <div>Full name {fullName}</div>
      <div>Contacts: {Object.keys(contacts).map(key =>
        <Contact key={key} contactTitle={key} contactValue={contacts[key]}/>
      )}
      </div>
    </div>
  )
}

const Contact = ({contactTitle, contactValue}) => {
  return <div className={s.contact}><b>{contactTitle}</b> {contactValue}</div>
}

export default ProfileInfo