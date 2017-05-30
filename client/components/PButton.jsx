import React from 'react'
import {Link} from 'react-router-dom'

import Home from './Home'

class PButton extends React.Component {
   constructor (props) {
      super (props)
      this.state = {
         clicked: false,
         clickMsg: 'Yes please! I would love to sign up',
         unClick: 'Awesome! Fill out the form below...',
         clickRoute: '/form',
         unclickRoute: '/'
      }
   }

   handleClick (e) {
      this.setState ( {clicked: !this.state.clicked} )
   }

   render (){
      return (
            <button className='button' onClick={ (e) => this.handleClick (e) }>
               <Link to={this.state.clicked ? this.state.unclickRoute : this.state.clickRoute}>
               {(this.state.clicked )? this.state.unClick : this.state.clickMsg}
               </Link>
            </button>
      )
   }

}

export default PButton
