import React from 'react'
import logo from './logo192.png'
import './header.css'
import Nav from './Nav/Nav'

function Header() {
  return (
    <header className='masthead'>
      <a href="/">
        <div className="logo-div">
         <img src={logo} alt="logo" />
        </div>
      </a>
      <h1>Company Name</h1> 
      <Nav />
    </header>
  )
}

export default Header