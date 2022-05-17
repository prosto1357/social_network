import React from "react";

import * as axios from "axios";

import Users from "./Users";

/*class UsersAPIComponent extends React.Component {
  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users',
      {
        params: {
          page: this.props.currentPage,
          count: this.props.pageSize
        }
      })
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
      .catch(e => {
        console.log(e.message)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)

    axios.get('https://social-network.samuraijs.com/api/1.0/users',
      {
        params: {
          page: pageNumber,
          count: this.props.pageSize
        }
      })
      .then(res => {
        this.props.setUsers(res.data.items)
        this.props.setTotalUsersCount(res.data.totalCount)
      })
      .catch(e => {
        console.log(e.message)
      })
  }

  render() {
    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
    console.log(pagesCount)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    console.log(pages)
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
      />
    )
  }
}*/

//export default UsersAPIComponent