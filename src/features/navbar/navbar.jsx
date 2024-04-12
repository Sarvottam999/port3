import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav class="navbar">
    <a href="about" class="nav-link">about</a>
    <a href="blog" class="nav-link">blogs</a>
    <a href="contact" class="nav-link">contact</a>
</nav>
  )
}

export default Navbar