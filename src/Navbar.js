import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
        <h1>The Dojo Blog</h1>
        <div className="links">
            {/* <a href="/">Home</a> */}
            <Link to="/">Home</Link>
            <Link to="/create">New Blog</Link>
            {/* <a href="/create">New Blog</a> */}
        </div>
    </nav>
  )
}
