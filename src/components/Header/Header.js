import React from "react"
import {NavLink} from "react-router-dom";

import s from "./Header.module.css"

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://www.google.ru/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        alt="img"
      />
      <div className={s.loginBlock}>
        {props.isAuth
          ? <div>{props.login} - <button onClick={props.logout}>Logout</button></div>
          : <NavLink to='/login'>Login</NavLink>
        }
      </div>
    </header>
  )
}

export default Header
