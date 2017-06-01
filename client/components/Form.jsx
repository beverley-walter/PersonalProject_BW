import React from 'react'
import { Link } from 'react-router-dom'

import Home from './Home'

const Form = props => {
    return (
     <form className = 'membersForm'>
        <div className="row">
           <div className="six columns">
              <label for="nameInput">Name</label>
              <input className="u-full-width" type="text" placeholder="Mia Nameo" id="nameInput" />
           </div>

           <div className="six columns">
              <label for="exampleEmailInput">Email</label>
              <input className="u-full-width" type="email" placeholder="test@mailbox.com" id="exampleEmailInput" />
           </div>
        </div>
        <div className="row">
           <div className="four columns">
              <label for="phoneInput">Phone</label>
              <input className="u-full-width" type="tel" placeholder="012 345 6789" id="phoneInput" />
           </div>

           <div className="eight columns">
              <label for="addressInput">Address</label>
              <input className="u-full-width" type="text" placeholder="1 Home Place, Welivehere, Wellington" id="addressInput" />
           </div>
        </div>
        <div className="row">
           <div className="twelve columns">
              <input className="button" type="submit" value="Submit" />
              <button className="button" type="submit" value="Submit" >
                 <Link to='/members'> Save details</Link>
              </button>

           </div>
        </div>
     </form>
 )
}

export default Form

//Once complete from to redirect to membership table.
