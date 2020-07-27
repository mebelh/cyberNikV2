import React from 'react'
import UsersSearch from './UsersSearch/UsersSearch'
import UsersList from './UsersList/UsersList'
export default function Users() {
  return (
    <React.Fragment>
      <UsersSearch />
      <UsersList />
    </React.Fragment>
  )
}
