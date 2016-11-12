import React, { Component } from 'react'
import { Link } from 'react-router'

import './index.css'

export default class NavLink extends Component {
  render(){
    return <Link
      to={this.props.url}
      activeClassName="active">
        {this.props.linkName}
      </Link>
  }
}
