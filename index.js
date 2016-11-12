import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './containers/App'
import Contact from './containers/Contact'
import About from './containers/About'
import Home from './containers/Home'

const router = (
  <Router history={ hashHistory }>
    <Route path="/" components={ App }>
      <IndexRoute component={ Home } />
      <Route path="contact" components={ Contact }/>
      <Route path="about/:message/:more" components={ About }/>
    </Route>
  </Router>
)

// / -> App + Home
// /about/xx/xx
// /about/xx
//  / -> App
// /contact -> App + Contact
// /about -> App + About

render(router, document.getElementById('app'))
