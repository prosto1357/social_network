import React from "react";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";

import s from '../../components/common/FormsControls/FormsControls.module.css'

const maxLength20 = maxLengthCreator(20)

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder="Login"
          name="email"
          component={Input}
          type="text"
          validate={[required, maxLength20]}
        />
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          component={Input}
          type="text"
          validate={[required, maxLength20]}
        />
      </div>
      <div>
        <Field
          name="rememberMe"
          component="input"
          type="checkbox"
        />
        Remember me
      </div>
      {captchaUrl && <>
        <img src={captchaUrl} alt=""/>
        {createField("Symbols", "captcha", [required], Input, {})}
      </>
      }
      {error && <div className={s.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {
    const {email, password, rememberMe, captcha} = formData
    props.login(email, password, rememberMe, captcha)
  }

  if (props.isAuth) {
    return <Redirect to="profile"/>
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm
        onSubmit={onSubmit}
        captchaUrl={props.captchaUrl}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl
})

export default connect(mapStateToProps, {login})(Login)