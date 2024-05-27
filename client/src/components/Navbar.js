import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center bg-gray-600 p-4">
      <Link to="/" className="text-white text-2xl">BlackCoffer Assigment
      </Link>
      <div className="flex gap-4">
        <Link to="/" className="text-white text-lg">Home</Link>
        <Link to="/dashboard"  className="text-white text-lg">Dashboard</Link>
      </div>
    </nav>
 
    </>
  )
}

export default Navbar
