import React from 'react'

class PButton extends React.Component {
   construtor (props) {
      super (props)

      this.state = {
         clicked: false
      }
   }

   handleClick (e) {
      this.setState ( {clicked: !this.state.clicked} )
      console.log(Button clicked: 'clicked')
   }

   render (){
      console.log ('rendered', this.state, this.props)
      return (
         <button onClick={ (e) => this.handleClick (e) }
         {this.state.clicked ? this.props.unClick : this.props.ClickMsg}
         </button>
      )
   }
}

export default PButton
