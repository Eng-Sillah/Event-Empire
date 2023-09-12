import React, { useState } from 'react';
import './Events.css'; // Import the CSS file for the Projects section
import freetownFestivalImage from '../../../img/freetown music festival.jpg';
import conquestImage from '../../../img/the conquest.jpg';
import kmeEmpireImage from '../../../img/KME Empire.jpg';
import gbamImage from '../../../img/Gbam festiva.jpg';
import ecoFeast2021Image from '../../../img/Eco feast 2021.jpg';
import shukublyImage from '../../../img/Shukubly.jpg';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
import Modal from './Modal';

function Events(props) {
//   const projectsData = [
//     {
//       id: 'bankist',
//       title: 'Ecofest Festival Event',
//       date: 'Thu, Dec 15, 8:00 PM + 3 more event',
//       venue: 'National Stadium, Freetown',
//       region: 'Western Area',
//       ticketPrice: 'Le 150',
//       subtitle: 'Product showcase website',
//       backgroundImage: conquestImage,
//       tags: 'web development',
//       alt: 'Bankist Image',
//       description: "Bankist App created during Jonas Schmedtmann's course This is the simple banking app, which was created within the scope of Jonas Schmedtmann's JS course. The project was implemented during the arrays section and arrays' methods, especially **callback** funtctions within them. HTML and CSS code **isn't mine** - it was already provided by Jonas. JS boilerplate (grabbing all elements in DOM and creating object with users) also was provided initially.Since line 65 of _script.js_ file the code is mostly mine, but checked with videos. Nevertheless, I don't code along with Jonas - since he explains the logic in current task, I pause the video and code by myself. Sometimes I implement improvements after seeing video with Jonas' code, sometimes I leave my own code.## How to use app Firstly, you need to log in. There's no backend, the logging function is simply made by changing opacity of the _app_ element.There are four users: Account 1 login: js, Account 1 password: 1111  Account 2 login: jd Account 2 passowrd = 2222  Account 3 login = stw Account 3 password = 3333  Account 4 login = ss  Account 4 password = 4444   After succesfull logging in, you're able to make withdrawal, deposits and send money to another **existing** user. If you change the account to another user, the pervious transfer will be displayed.",
//       demoLink: 'https://example.com/bankist-demo',
//       githubLink: 'https://github.com/yourusername/bankist',
//       // Add more project details
//     },
//     {
//       id: 'pig-game',
//       title: 'Freetown Music Festival',
//       date: 'Thu, Dec 15, 8:00 PM + 3 more event',
//       venue: 'National Stadium, Freetown',
//       region: 'Western Area',
//       ticketPrice: 'Le 100',
//       subtitle: 'E-commerce website',
//       backgroundImage: freetownFestivalImage,
//       tags: 'web development | web design',
//       alt: 'Pig Game Image',
//       description: `In this game, User Interface (UI) contains user/player that can do three things, they are as follows:\n
//       - There will be two players in this game. At the start of the game Player 1 will be the CurrentPlayer and Player 2 will be the in-active one.\n
//       - Roll the dice: The current player has to roll the dice and then a random number will be generated. If the current player gets any number other than 1 on the dice then that number will be added to the current score (initially the current score will be 0) and then the new score will be displayed under Current Score section.\n
//         Note: If the current player gets 1 on the dice then the players will be switched i.e. the current player will become in-active and vice-versa.\n
//       - Hold: If the current player clicks on HOLD, then the Current Score will be added to the Total Score. When the active player clicks the Hold button then the total score is evaluated. If the Total Score >= 100 then the current player wins else the players are switched.\n
//       - Reset: All the scores are set to 0 and Player 1 is set as the starting player (current player).`,
//       demoLink: 'https://example.com/pig-game-demo',
//       githubLink: 'https://github.com/yourusername/pig-game',
// // Add more project details

//     },
//     {
//       id: 'guess-number',
//       title: 'KME Empire Event',
//       date: 'Thu, Dec 15, 8:00 PM + 3 more event',
//       venue: 'National Stadium, Freetown',
//       region: 'Western Area',
//       ticketPrice: 'Le 200',
//       subtitle: 'Number guessing game',
//       backgroundImage: kmeEmpireImage,
//       tags: 'web development | web design',
//       alt: 'Guess Image',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//       demoLink: 'https://example.com/pig-game-demo',
//       githubLink: 'https://github.com/yourusername/pig-game',
//       // Add more project details
//     },
//     {
//       id: 'gbam-festival-eve',
//       title: 'Gbam Festival Eve',
//       date: 'Thu, Dec 15, 8:00 PM + 3 more event',
//       venue: 'National Stadium, Freetown',
//       region: 'Western Area',
//       ticketPrice: 'Le 100',
//       subtitle: 'Number guessing game',
//       backgroundImage: gbamImage,
//       tags: 'web development | web design',
//       alt: 'Guess Image',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//       demoLink: 'https://example.com/pig-game-demo',
//       githubLink: 'https://github.com/yourusername/pig-game',
//       // Add more project details
//     },
//     {
//       id: 'guess-number',
//       title: 'EcoFeast Sierra Leone 2021',
//       date: 'Thu, Dec 15, 8:00 PM + 3 more event',
//       venue: 'National Stadium, Freetown',
//       region: 'Western Area',
//       ticketPrice: 'Le 150',
//       subtitle: 'Number guessing game',
//       backgroundImage: ecoFeast2021Image,
//       tags: 'web development | web design',
//       alt: 'Guess Image',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//       demoLink: 'https://example.com/pig-game-demo',
//       githubLink: 'https://github.com/yourusername/pig-game',
//       // Add more project details
//     },
//     {
//       id: 'shukubly-festival',
//       title: 'Shukubly Festival',
//       date: 'Thu, Dec 15, 8:00 PM + 3 more event',
//       venue: 'National Stadium, Freetown',
//       region: 'Western Area',
//       ticketPrice: 'Le 30',
//       subtitle: 'Number guessing game',
//       backgroundImage: shukublyImage,
//       tags: 'web development | web design',
//       alt: 'Guess Image',
//       description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
//       demoLink: 'https://example.com/pig-game-demo',
//       githubLink: 'https://github.com/yourusername/pig-game',
//       // Add more project details
//     },
//     // Add more project objects
//   ];


  const [modal, setModal] = useState(false);
  const [tempdata, setTempdata] = useState([]);


  const getData = (eventBanner, eventTitle, tag, eventDescription) => {
    let tempData = [eventBanner, eventTitle, tag, eventDescription]
    setTempdata(project => [1, ...tempData])

    return setModal(true);
  }

  return (
    <div className="events py-4 py-lg-5 container">
      <h1>Western Area Events</h1>
      <div className='row justify-content-center align-item-center'>

        {props.eventData.map((event, index) => {
          return (
                  <div className='col-11 col-md-6 col-lg-4 mx-0 mb-4 card' key={index}>
                  <div className="card p-0 overflow-hidden h-100 shadow">
                    <div className='img-container'>
                    <img src={event.eventBanner} className="card-img-top" alt={event.alt} />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title">{event.eventTitle}</h5>
                      <p className="card-text-date">{event.eventDate.start}</p>
                      <p className="card-text-venue">{event.eventVenue}</p>
                      <p className="card-text-area">{event.eventRegion}</p>
                      <p className="card-text-price">Price: {event.eventPrice}</p>
                      <div className='button'>
                      <button className='btn btn-primary' onClick={() => getData(event.eventBanner, event.eventTitle, event.eventDescription)}>View Event</button>
                      </div>
                      
                    </div>
                  </div>
                  
                </div>
              
                )
        })}


      </div> 
      

      {
        modal === true ? <Modal eventTitle={tempdata[2]} eventBanner={tempdata[1]} tag={tempdata[2]} eventDescription={tempdata[3]} hide={()=> {setModal(false)}}/> : ''
      }
      <button>See More</button>

      <div className='personalize'>
        <h3>Let't make it personal</h3>
        <p>Select your interests to get event suggestions based on what you love</p>
        <div className='sugestion-list'>
          <button>Commedy</button>
          <button>Food</button>
          <button>Education</button>
          <button>Pop</button>
          <button>design</button>
          <button>R&B</button>
          <button>Hip Hop/Rap</button>
          <button>Film</button>
          <button>Personal Health</button>
          <button>Blues & Jazz</button>
          <button>Travel</button>
          <button>Rock</button>
          <button>Yoga</button>
          <button>Country</button>
          <button>Startups & Small Business</button>
          <button>Classical</button>
          <button>Mental Health</button>
          <button>TV</button>
          <button>Alternative</button>
          <button>Musical</button>
        </div>
        <h6 className='see-more'>See More</h6>
        
      </div>
      <hr />
    </div>

  
  );
}

export default Events;
