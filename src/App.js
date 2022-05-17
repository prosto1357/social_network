import React, {lazy} from 'react'
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";

import Navbar from "./components/Navbar/Navbar"
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import Preloader from "./components/common/Preloader/Preloader";
import {initializeApp} from "./redux/app-reducer";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";

import "./App.css"

const DialogsContainer = lazy(() => import("./components/Dialogs/DialogsContainer"))
const ProfileContainer = lazy(() => import("./components/Profile/ProfileContainer"))

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    console.log(promiseRejectionEvent)
  }

  componentDidMount() {
    this.props.initializeApp()
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Switch>
            <Route
              exact
              path='/'
              render={() => <Redirect to="/profile"/>}
            />
            <Route
              path='/dialogs'
              render={withSuspense(DialogsContainer)}
            />
            <Route
              path='/profile/:userId?'
              render={withSuspense(ProfileContainer)}
            />
            <Route
              path='/users'
              render={() => <UsersContainer/>}
            />
            <Route
              path='/login'
              render={() => <Login/>}
            />
            <Route
              path='*'
              render={() => <div>404</div>}
            />
          </Switch>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App)

const MainApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    </HashRouter>
  )
}

export default MainApp