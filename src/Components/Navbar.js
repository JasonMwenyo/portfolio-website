import React from 'react';
import logo from "../assets/images/logo.png"
import "./Navbar.css"

function Navbar() {
    return (
        <div className='navbar--container'>
            <img id='logo' src={logo} />
            <div>
                <ul>
                    <li>Home</li>
                    <li>Abouut</li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar