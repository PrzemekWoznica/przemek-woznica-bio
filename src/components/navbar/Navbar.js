import React from 'react'
import './Navbar.css'

function Navbar(){
    return(
        <div className='navbar-container'>
            <a className='logo' href="#personal-data">PW-Bio</a>
            <a className='nav-button' href="#skills">Skills</a>
            <a className='nav-button' href="#apps">Apps</a>
        </div>
    );
}

export default Navbar;