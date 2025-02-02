import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div>
          <p>Ops...! Page not found!</p>
          <p>Plese go back to <Link to="/">Home Page</Link></p>  
    </div>
  )
}

export default NotFoundPage