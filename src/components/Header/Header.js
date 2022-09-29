import React from 'react'
import logo from './logo.png'
import './header.css'
import Nav from './Nav/Nav'


function Header(props) {
  return (
    <header className='masthead'>
      <a href="/">
        <div className="logo-div">
         <img src={logo} alt="logo" />
        </div>
      </a>
      <h1>{props.company}</h1> 
      <Nav />
    </header>
  )
}

export default Header