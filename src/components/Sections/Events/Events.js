import React, { useState } from 'react';
import './Events.css';
import { useNavigate } from 'react-router-dom'; // Import Link and useNavigate

function Events(props) {
  // const [modal, setModal] = useState(false);
  // const [tempdata, setTempdata] = useState([]);

  const [event, setEvent]=useState()
  const navigate = useNavigate(); // Initialize the navigate function

  const getData = (event) => {
    navigate('/buy-ticket-form', { state: { eventDetails: event } });
  };
  

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
                  <button className='btn btn-primary' onClick={() => getData(event)}>
                  View Event
                </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <button>See More</button>

      <div className='personalize'>
        <h3>Let's make it personal</h3>
        <p>Select your interests to get event suggestions based on what you love</p>
        <div className='suggestion-list'>
          {/* Your suggestion buttons */}
        </div>
        <h6 className='see-more'>See More</h6>
      </div>
      <hr />
    </div>
  );
}

export default Events;
