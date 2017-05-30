import React from 'react'
import PButton from './PButton'
import GButton from './GButton'

const Home = (props) => {
  return(
    <div>
      <h1><b>Hi! Welcome to Gurgl</b></h1>
      <h2>Your new used-clothing library for infants</h2>
      <h3><em>Our site is currently in production.</em></h3>
      <h3><em>So check back soon to find out more about the launch<br/> of this exciting new service.</em></h3>
      <p>
        If you would like to be the first to know about when we are ready to rock and roll, please click below and fill in your details.<br/> We will send you a membership number and login details via email and you will be contacted as soon as we are open for business!
      </p>
      <p>
        You will be able to use your new login information to kit your little-ones out with the cutest pre-loved clothing.
      </p>
      <PButton />&nbsp;&nbsp;&nbsp;
      <GButton />
    </div>
  )
}


// document.addEventListener('runAudio', () => {
//   ReactDOM.render(
//     <Audio />,
//     document.getElementById('Audio')
//   )
// })

export default Home
