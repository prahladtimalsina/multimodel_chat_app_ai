import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='homepage'>
      <Link to="/chat">Go to Chat</Link>
    </div>
  )
}

export default Dashboard