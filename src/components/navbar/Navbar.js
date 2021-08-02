import React from 'react'
import './Navbar.css'

function Navbar(){
    return(
        <div className='navbar-container'>
            <a className='logo' href="#personal-data">PW-Bio</a>
            <a className='nav-button' href="#gallery">Gallery</a>
            <a className='nav-button' href="#skills">Skills</a>
        </div>
    );
}

export default Navbar;