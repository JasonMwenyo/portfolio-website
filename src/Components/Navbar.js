import React from 'react';
import logo from "../assets/images/logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <div className='navbar--container'>
            <img id='logo' src={logo} />
        </div>
    )
}

export default Navbar