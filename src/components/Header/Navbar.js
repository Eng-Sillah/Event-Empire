import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Link as ScrollLinks } from 'react-scroll';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <ul className="nav-list">
          <li><Link to="./layout" onClick={toggleMenu}>Home</Link></li>
          <li><ScrollLinks to="events" smooth={true} duration={500} onClick={toggleMenu}>Discover</ScrollLinks></li>
          <li><ScrollLinks to="about" smooth={true} duration={500} onClick={toggleMenu}>About</ScrollLinks></li>
          {/* Use the "to" attribute with the route path */}
          <li><Link to="./create-event" onClick={toggleMenu}>Create Event</Link></li>
          <li><ScrollLinks to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</ScrollLinks></li>
          <li><a href="https://github.com/your-username" onClick={toggleMenu}>Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
