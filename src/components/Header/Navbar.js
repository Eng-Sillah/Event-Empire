import React from "react";
import './Navbar.css';
import logoImg from '../../img/logo.jpg'



function Navbar() {

    return (
        <div className="Navbar-container">
            <div className="logo">
                <img src={logoImg} alt="Logo"/>
                <input type="search" placeholder="Search Event"/>
            </div>
            <ul className="Navbar-links">
                <li>Home</li>
                <li>Discover</li>
                <li>About</li>
                <li>Create Event</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default Navbar;