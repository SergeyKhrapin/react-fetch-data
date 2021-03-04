import React from 'react'
import User from './User'

function UserList({ userList }) {
    console.log(userList);
    return (
        <div className="user-list">
            { userList.map(user => <User user={user} key={user.email} />) }
        </div>
    )
}

export default UserList
