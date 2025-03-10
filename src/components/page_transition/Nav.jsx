import React from 'react'
import { Link } from "react-router-dom";
function Nav() {
    return (
        <nav>
            <ul className='nav'>
                <li className='nav-item'><Link to="/" className="nav-link">Home</Link></li>
                <li className='nav-item'><Link to="/about" className="nav-link">About</Link></li>
            </ul>
        </nav>
    )
}

export default Nav