import React from 'react'
import "./index.scss"
const UsersTable = ({users}) => {
  return (
      <>
          <table>
              <thead>
                  <tr>
                      <th>ID</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Phone</th>
                      <th>Company Name</th>
                  </tr>
              </thead>
              <tbody>
                  {users.map((user) => {
                      return (
                        <tr>
                              <td>{user.id }</td>
                        <td>{user.username }</td>
                        <td>{user.email}</td>
                        <td>{user.address.city }</td>
                        <td>{user.phone}</td>
                        <td>{user.company.name }</td>
                    </tr>
                      )
                  })}
              </tbody>
          </table>
      </>
  )
}

export default UsersTable