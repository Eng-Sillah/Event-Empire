import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Link as ScrollLinks } from 'react-scroll';
import { auth } from '../../components/Sections/Home/firebase-config';
import { getUser, signOut } from '../../Api/auth';

function Navbar() {
  const [user, setUser] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    // Add a Firebase authentication state change listener
    getUser().then((value)=>{
      setUser(value.data.user)
      setEmail(value.data.user?.email)
    })
  }, []);

  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCreateEvent = () => {
    if (user) {
      // The user is logged in, so navigate to the "Create Event" page
      navigate('/create-event');
    } else {
      // The user is not logged in, so redirect to the login page
      navigate('/login');
    }
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
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
          <li><ScrollLinks to="events" smooth={true} duration={500} onClick={toggleMenu}>Discover</ScrollLinks></li>
          <li><ScrollLinks to="about" smooth={true} duration={500} onClick={toggleMenu}>About</ScrollLinks></li>
          <li><button onClick={handleCreateEvent}>Create Event</button></li>
          <li><ScrollLinks to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact</ScrollLinks></li>
          <li>
            {user ? (
              <>
                <button onClick={()=>{
                  signOut().then((value)=>{
                      console.log(value)
                      window.location.reload()
                  })
                }} className='logout'>
                  Logout
                </button>
               {user && <div>
                {email}
                </div>}
              </>
            ) : (
              <NavLink to='/login' activeclassname='active'>
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
