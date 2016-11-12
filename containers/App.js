import React, { Component } from 'react'
import { Link } from 'react-router'

import NavLink from './NavLink'

export default class App extends Component {
  render(){
    return (
      <div>
        <h1> hello react router~~! </h1>
        <ul>
          <li>
            <NavLink url="/" linkName="首页" />
          </li>
          <li>
            <NavLink url="/contact" linkName="联系我们" />
          </li>
          <li>
            <NavLink url="/about" linkName="关于我们" />
          </li>
        </ul>
        { this.props.children }
      </div>
    )
  }
}
