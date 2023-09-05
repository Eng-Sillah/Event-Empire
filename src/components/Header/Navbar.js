
import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

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
          <li><Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link></li>
          <li><Link to="events" smooth={true} duration={500} onClick={toggleMenu}>Discover</Link></li>
          <li><Link to="skills" smooth={true} duration={500} onClick={toggleMenu}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500} onClick={toggleMenu}>Create Event</Link></li>
          <li><Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</Link></li>
          <li><a href="https://github.com/your-username" onClick={toggleMenu}>Login</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
