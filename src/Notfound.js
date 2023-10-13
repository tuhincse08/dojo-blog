import React from 'react'
import { Link } from 'react-router-dom'

function Notfound() {
  return (
    <div>
        <h1>404 Error</h1> 
        <h4>Page Notfound</h4> 
        <Link to="/">Back to Home Page</Link></div>
  )
}

export default Notfound