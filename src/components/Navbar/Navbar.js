import React from 'react'
import { NavLink } from 'react-router-dom'

import './navbar.css'
import '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav>
      <div>
        <img className='logo' src='../assets/logo.png' alt="logo" />
        <ul className='navbar-links'>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
        </ul>
      </div>

    </nav >
  )
}

export default Navbar