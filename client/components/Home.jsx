import React from 'react'

const Home = props => {
  return(
    <div>
      <h1><b>Hi! Welcome to Gurgl</b></h1>
      <h2>Your new used-clothing library for infants</h2>
      <h3><em>Our site is currently in production.</em></h3>
      <h3><em>So check back soon to find out more about the launch<br/> of this exciting new service.</em></h3>
      <p>
        If you would like to be the first to know about when we are ready to rock and roll, please click below and fill in your details.<br/> We will send you a membership number via email and you will be contacted as soon as we are open for business!
      </p>
      <p>
      <input className="PButton" type="submit" value="Yes, please I'd like to sign up" />
      </p>
    </div>
  )
}

export default Home
