import React from 'react';
import logo from "../assets/images/logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <div className='navbar--container'>
            <img id='logo' src={logo} alt='Json Developer' />
            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>WORK</li>
            </ul>
        </div>
    )
}

export default Navbar