import React from 'react'
import { Link } from 'react-router-dom'

import Home from './Home'

const Members = props => {
    return (
      <div className= 'membershipSignup'>
         <table class="u-full-width">
            <thead>
               <tr>
               <th>Name</th>
               <th>Email</th>
               <th>Phone</th>
               <th>Address</th>
               </tr>
            </thead>
            <tbody>
               <tr>
               <td>{props.name}</td>
               <td>{props.email}</td>
               <td>{props.phone}</td>
               <td>{props.address}</td>
               </tr>
            </tbody>
         </table>
      </div>
 )
}

export default Members
