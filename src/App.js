import React, { Component } from 'react'
import Routes from './components/common/Routes'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Navbar />
        <Routes />
        <Footer />
      </div>
    )
  }
}

export default App
