import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";

import {follow, requestUsers, setCurrentPage, toggleIsFollowingProgress, unfollow} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    const {requestUsers, currentPage, pageSize} = this.props
    requestUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    const {setCurrentPage, requestUsers, pageSize} = this.props
    setCurrentPage(pageNumber)
    requestUsers(pageNumber, pageSize)
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader/> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {
    toggleIsFollowingProgress, setCurrentPage, requestUsers,
    follow, unfollow
  })
)(UsersContainer)
