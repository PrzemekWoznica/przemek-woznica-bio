import React from 'react'
import './Navbar.css'

function Navbar(){
    return(
        <div className='navbar-container'>
            <a className='logo' href="#personal-data">
                <ul className='navbar-list'>
                    <li className='item1'>P</li>
                    <li className='item2'>W</li>
                    <li className='item3'>-</li>
                    <li className='item4'>B</li>
                    <li className='item5'>I</li>
                    <li className='item6'>0</li>
                </ul>
            </a>
            <a className='nav-button' href="#skills">
                <ul className='navbar-list'>
                    <li className='item1'>S</li>
                    <li className='item2'>K</li>
                    <li className='item3'>I</li>
                    <li className='item4'>L</li>
                    <li className='item5'>L</li>
                    <li className='item6'>S</li>
                </ul>
            </a>
            <a className='nav-button' href="#apps">
                <ul className='navbar-list'>
                    <li className='item1'>A</li>
                    <li className='item2'>p</li>
                    <li className='item3'>p</li>
                    <li className='item4'>s</li>
                </ul>
            </a>
            <a className='nav-button' href="#photos">
                <ul className='navbar-list'>
                    <li className='item1'>P</li>
                    <li className='item2'>H</li>
                    <li className='item3'>O</li>
                    <li className='item4'>T</li>
                    <li className='item4'>O</li>
                    <li className='item4'>S</li>
                </ul>
            </a>
        </div>
    );
}

export default Navbar;