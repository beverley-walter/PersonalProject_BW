import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import Home from './Home'
import Form from './Form'
import Members from './Members'
import Gallery from './Gallery'


const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/form' component={Home} />
      <Route path='/form' component={Form} />
      <Route path='/members' component={Members} />
      <Route exact path='/gallery' component={Gallery} />
      <Route path='/gallery/:id' component={Gallery} />
    </div>
  </Router>
)

export default App

//import Members from './Members'       <Route path='/members' component={Members} />
