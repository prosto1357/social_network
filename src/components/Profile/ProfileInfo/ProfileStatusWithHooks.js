import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect(() => {
    setStatus(props.status)
  }, [props.status])

  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.target.value)
  }

  return (
    <div>
      {!editMode &&
      <div>
        <span onDoubleClick={activateEditMode}>{props.status || "---"}</span>
      </div>
      }
      {editMode &&
      <div>
        <input
          value={status}
          onBlur={deactivateEditMode}
          onChange={onStatusChange}
          autoFocus
        />
      </div>
      }
    </div>
  )
}

export default ProfileStatusWithHooks