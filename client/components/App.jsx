import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Form from './Form'
import Gallery from './Gallery'


const App = () => (
  <Router>
    <div>
      <Route path='/' component={Home} />
      <Route path='/form' component={Form} />
      <Route path='/gallery' component={Gallery} />
    </div>
  </Router>
)

export default App

//import Members from './Members'       <Route path='/members' component={Members} />
