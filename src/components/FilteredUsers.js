
import React from 'react'
import './FilteredUsers.css'

export default function FilteredUsers({ user }) {
// Filtering  user array based on Condtion 
 const FilteredList= user.filter((el) => { return el.name.startsWith('A') })
 
 // console.log(user);
  return (
    <div className='FilteredList'>

      <h2>Filtered List</h2>
      <div>
        <ul>
          {
            FilteredList.map((el) => {

              return <li >
                ID: {el.id}, Name: {el.name}, Email: {el.email}
              </li>
            })
          }

        </ul>
      </div>
    </div>
  )
}
