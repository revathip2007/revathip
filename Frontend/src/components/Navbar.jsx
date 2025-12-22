import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='Navbar'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to className="Link" to ="/useEffect">useEffect</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar