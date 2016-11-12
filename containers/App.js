import React, { Component } from 'react'
import { Link, IndexLink, browserHistory } from 'react-router'

import NavLink from './NavLink'

class App extends Component {
  handleSubmit( e ){
    e.preventDefault()

    const userName = e.target.elements[0].value
    const repo = e.target.elements[1].value

    const path = `/about/${userName}/${repo}`

    // browserHistory.push( path )
    console.log( this.context )
    console.log( this.props )

    this.context.router.push( path )

  }

  goBackWithMe(){
    this.context.router.goBack()
  }

  render(){
    return (
      <div>
        <h1> hello react router~~! </h1>
        <ul>
          <li>
            {/* <NavLink url="/" linkName="首页" /> */}
            <IndexLink to="/" activeStyle={{ fontSize: "40px"}}> 首页 </IndexLink>
          </li>
          <li>
            <NavLink url="/contact" linkName="联系我们" />
          </li>
          <li>
            <NavLink url="/about" linkName="关于我们" />
          </li>
          <li>
            <form action="" onSubmit={this.handleSubmit.bind(this)}>
              <input type="text" placeholder="user name"/>
              <input type="text" placeholder="repo"/>
              <button type="submit"> go with me </button>
              <button onClick={ this.goBackWithMe.bind(this) }> go back </button>
            </form>
          </li>
        </ul>
        { this.props.children }
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}

export default App
