import React from 'react'
import {Link} from 'react-router-dom'

import Home from './Home'

class GButton extends React.Component {
   constructor (props) {
      super (props)
   }

   render (){
      return (
         <button className='button'>
            <Link to='/gallery'> No thanks! I wanna see the gallery
            </Link>
         </button>
      )
   }

}

export default GButton


// handleClick (e) {
//    this.setState ( {clicked: !this.state.clicked} )
// }
