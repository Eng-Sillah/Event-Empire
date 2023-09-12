// Layout.js
import React from 'react';
import Home from './Home/Home';
import Events from './Events/Events';
import MoreEvents from './Events/MoreEvents';
import EventTypes from './Events/EventTypes';
import Contact from './Contact';

const Layout = (props) => {
  return (
    <div>
     <Home />
     <Events eventData={props.eventData}/>
     <EventTypes />
     <MoreEvents />
     <Contact />
    </div>
  );
};

export default Layout;
