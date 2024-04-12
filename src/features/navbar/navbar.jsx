import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav class="navbar">
    <Link to="/port3/about" class="nav-link">about</Link>
    <Link to="/port3/blog" class="nav-link">blogs</Link>
    <Link to="/port3/contact" class="nav-link">contact</Link>
</nav>
  )
}

export default Navbar