import React, { useState } from 'react';
import './BasicInfo.css';

function BasicInfo({formData}) {
  // Step 1: Set up state
  const [eventData, setEventData] = useState({
    title: formData.title, // Initialize with the title from formData
    organizer: formData.organizer, // Initialize with the organizer from formData
    eventType: 'Concert or Performance',
    eventCategory: 'Music',
    eventGenre: 'Dj/Dance',
    tags: [],
  });

     // CSS class to apply for input fields that are filled
     const filledInputClass = (value) => (value ? 'filled-input' : '');

  // Step 2: Capture user input and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddTag = () => {
    const newTag = eventData.tag.trim();
    if (newTag) {
      setEventData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, newTag],
        tag: '', // Clear the tag input
      }));
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setEventData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((tag) => tag !== tagToRemove),
    }));
  };



  // Step 3: Create an object to store all the data
  const handleSubmit = () => {
    console.log('Event Data:', eventData); // Replace with your logic to send the data
  };

  // Step 4: Dynamically set dropdown options
  const eventTypeOptions = ['Concert or Performance', 'Live Event', 'Concert Event'];
  const eventCategoryOptions = ['Music', 'Sports', 'Food', 'Conference'];
  const eventGenreOptions = ['Dj/Dance', 'Rock', 'Pop', 'Hip Hop'];

  return (
    <div className="basic">
      <h2>Basic Info</h2>
      <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={eventData.title}
        onChange={handleInputChange}
        className={filledInputClass(eventData.title)}
        readOnly // Make the input field read-only
      />
      <input
        type="text"
        name="organizer"
        placeholder="Organizer"
        value={eventData.organizer}
        onChange={handleInputChange}
        className={filledInputClass(eventData.title)}
        readOnly // Make the input field read-only
      />
      
      {/* Dynamically set dropdown options */}
      <div className="cat_container">
        <select
          name="eventType"
          value={eventData.eventType}
          onChange={handleInputChange}
        >
          {eventTypeOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          name="eventCategory"
          value={eventData.eventCategory}
          onChange={handleInputChange}
        >
          {eventCategoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          name="eventGenre"
          value={eventData.eventGenre}
          onChange={handleInputChange}
        >
          {eventGenreOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Rest of your JSX */}
      
      <div className="discovery">
        <input
          type="text"
          name="tag"
          className="tag_discovery"
          placeholder="Press Enter to add a tag. Add search keywords to your event"
          value={eventData.tag || ''}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTag}>Add</button>
      </div>

      <div className="tag_container">
        {eventData.tags.map((tag) => (
          <p key={tag}>
            {tag} <span className="x" onClick={() => handleRemoveTag(tag)}>X</span>
          </p>
        ))}
      </div>

      {/* Submit button */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BasicInfo;
