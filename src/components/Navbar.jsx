import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

// Navbar component shown on every page
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        🛡️ HSD System
      </div>
      <div className="navbar-links">
        {/* NavLink automatically adds 'active' class when route matches */}
        <NavLink
          to="/"
          end
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          About
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar