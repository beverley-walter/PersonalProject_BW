import React from 'react'
import {Link} from 'react-router-dom'

class GButton extends React.Component {
   constructor (props) {
      super (props)
      this.state = {
         clicked: false,
         clickMsg: 'No thanks! I wanna see the gallery',
         unClick: 'Yay! Lets go',
         clickRoute: '/gallery',
         unclickRoute: '/'
      }
   }

   handleClick (e) {
      this.setState ( {clicked: !this.state.clicked} )
   }

   render (){
      return (
         <button onClick={ (e) => this.handleClick (e) }>
            <Link to={this.state.clicked ? this.state.clickRoute : this.state.unclickRoute}>
            {(this.state.clicked )? this.state.unClick : this.state.clickMsg}
            </Link>
         </button>
      )
   }

}

export default GButton
