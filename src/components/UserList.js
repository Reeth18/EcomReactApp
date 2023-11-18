import React, { useState } from 'react'
import './UserList.css'
import FilteredUsers from './FilteredUsers'

// let nextId = 0;
function UserList() {
    const [user, setUser] = useState([])

    function AddUser() {
        // using random for generating random id
        const random = Math.floor(Math.random() * 100)
        return setUser([...user, {
            id: random,
            name: "ARani",
            email: "rani@gmail.com"
        }])

    }



    return (
        <div className='userList'>
            <h2> Add User </h2>
            <br />
            <ul>
                {/* tracing all the elements of user array */}
                {user.map(usr => (
                    <li key={usr.id}>{usr.id},{usr.name} , {usr.email}</li>
                ))}

            </ul><br />
            {/* calling addUser function */}
            <button onClick={AddUser}> Add User</button>
            {/* sending user state as props */}
            <FilteredUsers user={user} />
        </div>
    )
}

export default UserList