import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Navbar history={this.props.history} />
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
