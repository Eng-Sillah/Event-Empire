import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header/Navbar';
import Layout from './components/Sections/Layout';
// import Footer from './components/Footer';
import EventBasicInfo from './components/Sections/CreateEvents/EventBasicInfo';
import CreateEventDashboard from './components/Sections/CreateEvents/CreateEventDashboard';
import conquestImage from './img/the conquest.jpg';
import kmeEmpireImage from './img/KME Empire.jpg';
import AnkaraPool from './img/Ankara Pool.jpg';
import ecoFeast2021Image from './img/Eco feast 2021.jpg';
import freetownMusicFestivalImage from './img/freetown music festival.jpg';
import shukublyImage from './img/Shukubly.jpg';


import './App.css';

function App() {

  const eventsData = [
    {
      eventId: 1,
      eventBanner: conquestImage,
      eventTitle: "Ecofest Festival Event",
      evetnOrganiser: "Event Organiser",
      eventDate: {
        start: "Thu, Dec 15, 8:00 PM + 3 more event",
        end: "End Date"
      },
      eventTime: {
        start: "9:00pm",
        end: "6:00am"
      },
      eventVenue: "National Stadium, Freetown",
      eventRegion: "Western Area",
      eventPrice: "Le 20",
      ticketType: [
        {
          type: "Free",
          price: "Le 0",
        },
        {
          type: "Paid",
          price: "Le 20",
        },
        {
          type: "Donation",
          price: "Le 200",
        }
      ],
      tags:['Tag1', 'Tag2'],
      eventType: "Live Event",
      keyWords: ['Live Band', 'Musical'],
      eventDescription: "Bankist App created during Jonas Schmedtmann's course This is the simple banking app, which was created within the scope of Jonas Schmedtmann's JS course. The project was implemented during the arrays section and arrays' methods, especially **callback** funtctions within them. HTML and CSS code **isn't mine** - it was already provided by Jonas. JS boilerplate (grabbing all elements in DOM and creating object with users) also was provided initially.Since line 65 of _script.js_ file the code is mostly mine, but checked with videos. Nevertheless, I don't code along with Jonas - since he explains the logic in current task, I pause the video and code by myself.",
      active: true,
    },
    {
      eventId: 2,
      eventBanner: freetownMusicFestivalImage ,
      eventTitle: "Freetown Music Festival",
      evetnOrganiser: "Event Organiser",
      eventDate: {
        start: "Thu, Dec 15, 8:00 PM + 3 more event",
        end: "End Date"
      },
      eventTime: {
        start: "9:00pm",
        end: "6:00am"
      },
      eventVenue: "National Stadium, Freetown",
      eventRegion: "Western Area",
      eventPrice: "Le 100",
      ticketType: [
        {
          type: "Free",
          price: "Le 0",
        },
        {
          type: "Paid",
          price: "Le 20",
        },
        {
          type: "Donation",
          price: "Le 200",
        }
      ],
      tags:['Tag1', 'Tag2'],
      eventType: "Live Event",
      keyWords: ['Live Band', 'Musical'],
      eventDescription: "Discription about the event",
      active: true,
    },
    {
      eventId: 3,
      eventBanner: shukublyImage,
      eventTitle: "Shukubly Festival",
      evetnOrganiser: "Event Organiser",
      eventDate: {
        start: "Thu, Dec 15, 8:00 PM + 3 more event",
        end: "End Date"
      },
      eventTime: {
        start: "9:00pm",
        end: "6:00am"
      },
      eventVenue: "National Stadium, Freetown",
      eventRegion: "Western Area",
      eventPrice: "Le 30",
      ticketType: [
        {
          type: "Free",
          price: "Le 0",
        },
        {
          type: "Paid",
          price: "Le 20",
        },
        {
          type: "Donation",
          price: "Le 200",
        }
      ],
      tags:['Tag1', 'Tag2'],
      eventType: "Live Event",
      keyWords: ['Live Band', 'Musical'],
      eventDescription: "Discription about the event",
      active: true,
    },
    {
      eventId: 4,
      eventBanner: AnkaraPool,
      eventTitle: "Ankara Pool Party",
      evetnOrganiser: "Event Organiser",
      eventDate: {
        start: "Thu, Dec 15, 8:00 PM + 3 more event",
        end: "End Date"
      },
      eventTime: {
        start: "9:00pm",
        end: "6:00am"
      },
      eventVenue: "National Stadium, Freetown",
      eventRegion: "Western Area",
      eventPrice: "Le 80",
      ticketType: [
        {
          type: "Free",
          price: "Le 0",
        },
        {
          type: "Paid",
          price: "Le 20",
        },
        {
          type: "Donation",
          price: "Le 200",
        }
      ],
      tags:['Tag1', 'Tag2'],
      eventType: "Live Event",
      keyWords: ['Live Band', 'Musical'],
      eventDescription: "Discription about the event",
      active: true,
    },
    {
      eventId: 5,
      eventBanner: ecoFeast2021Image,
      eventTitle: "EcoFeast Sierra Leone 2021",
      evetnOrganiser: "Event Organiser",
      eventDate: {
        start: "Thu, Dec 15, 8:00 PM + 3 more event",
        end: "End Date"
      },
      eventTime: {
        start: "9:00pm",
        end: "6:00am"
      },
      eventVenue: "National Stadium, Freetown",
      eventRegion: "Western Area",
      eventPrice: "Le 120",
      ticketType: [
        {
          type: "Free",
          price: "Le 0",
        },
        {
          type: "Paid",
          price: "Le 20",
        },
        {
          type: "Donation",
          price: "Le 200",
        }
      ],
      tags:['Tag1', 'Tag2'],
      eventType: "Live Event",
      keyWords: ['Live Band', 'Musical'],
      eventDescription: "Discription about the event",
      active: true,
    },
    {
      eventId: 6,
      eventBanner: kmeEmpireImage,
      eventTitle: "KME Empier Festival",
      evetnOrganiser: "Event Organiser",
      eventDate: {
        start: "Thu, Dec 15, 8:00 PM + 3 more event",
        end: "End Date"
      },
      eventTime: {
        start: "9:00pm",
        end: "6:00am"
      },
      eventVenue: "National Stadium, Freetown",
      eventRegion: "Western Area",
      eventPrice: "Le 20",
      ticketType: [
        {
          type: "Free",
          price: "Le 0",
        },
        {
          type: "Paid",
          price: "Le 20",
        },
        {
          type: "Donation",
          price: "Le 200",
        }
      ],
      tags:['Tag1', 'Tag2'],
      eventType: "Live Event",
      keyWords: ['Live Band', 'Musical'],
      eventDescription: "Discription about the event",
      active: true,
    },
  ]
  return (
    <Router>
      <div className="App">
        <Navbar />

        {/* Home Section */}
        <Routes>
          <Route path="/" element={<section id="home"><div className="content"><Layout eventData={eventsData} /></div></section>} />
          <Route path="/create-event" element={<EventBasicInfo />} />
          <Route path="/create-event/create-event-dashboard" element={<CreateEventDashboard />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
