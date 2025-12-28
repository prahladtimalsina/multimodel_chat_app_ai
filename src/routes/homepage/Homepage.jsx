import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='homepage'>
      
      <Link to="/dashboard">Go to Dashboard</Link>
    </div>
  )
}

export default Homepage