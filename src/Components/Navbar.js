import React from 'react';
import logo from "../assets/images/logoallwhite.png"
import "./Navbar.css"

function Navbar() {
    return (
        <header>
            <div className='navbar--container center--items'>
                <img id='logo' src={logo} alt='Json Developer' />
                <ul>
                    <li>HOME</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>WORK</li>
                </ul>
            </div>
        </header>
    )
}

export default Navbar