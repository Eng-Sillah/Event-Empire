import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EventBasicInfo.css';

function EventBasicInfo() {
  // Step 1: Create state to hold form data
  const [formData, setFormData] = useState({
    title: '',
    organizer: '',
    eventType: 'Live Event', // Default value
    eventCategory: 'Live Event', // Default value
    tags: [],
    venueLocation: '',
    startDate: '',
    startTime: '',
    endDate: '',
    endTime: '',
    displayStartTime: false,
    displayEndTime: false,
    timeZone: 'GMT+0100 Sierra Leone Time', // Default value
  });

  // Step 2: Access the history object
  const navigate = useNavigate();

  // Step 3: Function to handle form data changes
  const handleFormDataChange = (e) => {
    const { name, value, type, checked } = e.target;
    // Handle checkbox inputs
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Step 7: Handle "Save & Continue" button click
  const handleSaveAndContinue = () => {
    // Step 8: Pass form data as state to the next route
    navigate('/create-event/create-event-dashboard', { state: { formData } });
    
    // console.log(formData)
  };

  return (
    <div className="basic_main_container">
      <h2>Basic Info</h2>
      <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
      <textarea name="title" placeholder="Event Title* &#10;Be clear and descriptive" onChange={handleFormDataChange}></textarea>
      <textarea name="organizer" placeholder="Organizer* &#10;Tell attendees who is organizing this event" onChange={handleFormDataChange}></textarea> 
      <p>This profile describes a unique organizer and shows all of the on one page. View Organizer Info</p>
      <div className="cat_container">
        <select name="eventType" onChange={handleFormDataChange}>
          <option value="Live Event">Types</option>
          <option value="Concert Event">Concert Event</option>
        </select>
        <select name="eventCategory" onChange={handleFormDataChange}>
          <option value="Live Event">Category</option>
          <option value="Concert Event">Concert Event</option>
        </select>
      </div>
      <div className="tags-area">
      <h2>Tags</h2>
      <p className="tag_p">Improve discoverability of your event by adding tags relevant to the subject matter</p>
      <div className="tag_contron">
      <input className="tag_discovery" placeholder="Press Enter to add a tag. Add Search keyword to your event" />
      <button>Add</button>
      </div>
      </div>
      <h2 className="event_basic_location">Location</h2>
      <p className="location_p">Help people in the area discover your event and let attendees know where to show up.</p>
      <div className="locations">
        <div className="location venue">Venue</div>
        <div className="location">Online Event</div>
        <div className="location">To be announced</div>
      </div>
      <h4 className="venue_location">Venue location</h4>
      <input type="text" placeholder="Search for a venue or address" className="venue_search" />
      <h2 className="dateAndTime">Date and Time</h2>
      <p>Tell event-goers when your event starts and ends so they can make plans to attend.</p>
      <div className="locations">
        <div className="location venue">Single Event</div>
        <div className="location">Recurring Event</div>
      </div>
      <p>Single event happened once and can last multiple days.</p>
      <div className="time_container">
        <input 
          type="text" 
          placeholder="Event Starts&#10; Date"
          onFocus={(e) => (e.target.type = 'date')}
          name="startDate"
          onChange={handleFormDataChange}
        />
        <input 
          type="text" 
          placeholder="Start Time&#10; Date"
          onFocus={(e) => (e.target.type = 'date')}
          name="startTime"
          onChange={handleFormDataChange}
        />
        <input 
          type="text" 
          placeholder="Event Ends&#10; Date"
          onFocus={(e) => (e.target.type = 'date')}
          name="endDate"
          onChange={handleFormDataChange}
        />
        <input 
          type="text" 
          placeholder="End Time&#10; Date"
          onFocus={(e) => (e.target.type = 'date')}
          name="endTime"
          onChange={handleFormDataChange}
        />
      </div>
      <div className="display">
        <input type="checkbox" id="start" name="displayStartTime" onChange={handleFormDataChange} />
        <label htmlFor="start"> Display start time The start time of your event will be displayed to attendees.</label>
      </div>
      <div className="display">
        <input type="checkbox" id="end" name="displayEndTime" onChange={handleFormDataChange} />
        <label htmlFor="end">Display end time The start time of your event will be displayed to attendees.</label>
      </div>
      <div className="timeAndLanguage">
        <select name="timeZone" onChange={handleFormDataChange}>
          <option value="GMT+0100 Sierra Leone Time">
            Time Zone
            (GMT+0100) Sierra Leone Time
          </option>
          <option value="GMT+0100 Nigeria Time">(GMT+0100) Nigeria Time</option>
        </select> 
        <select name="timeZone" onChange={handleFormDataChange}>
          <option value="GMT+0100 Sierra Leone Time">
            Time Zone (GMT+0100) Sierra Leone Time
          </option>
          <option value="GMT+0100 Nigeria Time">(GMT+0100) Nigeria Time</option>
        </select>
      </div>

      <div className="actionbtn">
        <button className="discard">Discard</button>
        <button className="save_continue" onClick={handleSaveAndContinue}>
          Save & Continue
        </button>
      </div>
    </div>
  );
}

export default EventBasicInfo;
