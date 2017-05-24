import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Form from './Form'
import Members from './Members'

const App = () => (
  <Router>
    <div>
      <Route exact={true} path='/' component={Home} />
      <Route path='/form' component={Form} />


      <Route path='/members' component={Members} />


    </div>
  </Router>
)

export default App
