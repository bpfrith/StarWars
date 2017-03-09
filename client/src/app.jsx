import React from 'react'
import {render} from 'react-dom'
import Main from './components/Main.jsx'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'
import Home from './components/Home.jsx'
import People from './components/People.jsx'

window.onload = () => {
  render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home} />
        <Route path='home' component={Home} />
        <Route path="people" component={People} />
      </Route>
    </Router>,
    document.getElementById('app')
  )
}