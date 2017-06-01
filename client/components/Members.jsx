import React from 'react'
import { Link } from 'react-router-dom'

import data from '../../memberData/data'

const Members = props => {
    return (
      <div className= 'membershipSignup'>
         <table className="u-full-width">
            <thead>
               <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Phone</th>
               <th>Address</th>
               </tr>
               {renderMembers(data)}
            </thead>
         </table>
      </div>
 )
}

function renderMembers (membersArray) {
  return membersArray.members.map((member) => {
     return renderMember(member)
   // return <memberData key={member.id}/>
  })
}

export default Members


function renderMember(member){
   return (
      <tr>
      <td>{member.name}</td>
      <td>{member.email}</td>
      <td>{member.phone}</td>
      <td>{member.address}</td>
      </tr>
   )
}
