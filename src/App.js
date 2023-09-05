import React from 'react';
import Navbar from './components/Header/Navbar';
import Home from './components/Sections/Home/Home';
import Events from './components/Sections/Events/Events';
import MoreEvents from './components/Sections/Events/MoreEvents';
import EventTypes from './components/Sections/Events/EventTypes';
import Contact from './components/Sections/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <div className="App">
       <Router>
      <Navbar />

      {/* Home Section */}
      <section id="home">
        <div className="content">
          <Home />
        </div>
      </section>

      {/* Events Section */}
      <section id="event">
        <div className="content">
        <Events />
        </div>
      </section>


      {/* MoreEvents Section */}
      <section id="more-events">
        <div className="content">
        <MoreEvents />
        </div>
      </section>

      {/* EventTypes Section */}

      <section id="eventTypes">
        <div className="content">
          <EventTypes />
        </div>
      </section>

      {/* Contact Section */}

      <section id="contact">
        <div className="content">
          <Contact />
        </div>
      </section>

      {/* Contact Section */}
      <section id="footer">
        <div className="content">
        <Footer />
        </div>
      </section>
      </Router>
    </div>
  );
}


export default App;


