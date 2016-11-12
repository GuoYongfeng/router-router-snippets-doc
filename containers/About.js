import React, { Component } from 'react'

export default class About extends Component {

  render(){

    const { message, more } = this.props.params

    return <h1> About Us, { message }, { more } </h1>
  }
}
