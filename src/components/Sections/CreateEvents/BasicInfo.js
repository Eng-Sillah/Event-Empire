import React, { useState } from 'react';
import './BasicInfo.css';

function BasicInfo(props) {
  const eventType = [
    'Type',
    'Appearance or Singing',
    'Attraction',
    'Camp, Trip, or Retreat',
    'Class, Workshop, or Training',
    'Concert or Performance',
    'Conference',
    'Convention',
    'Dinner or Gala',
    'Festival or Fair',
    'Game or Competition',
    'Meeting or Networking Event',
    'Other',
    'Party or Social Gathering',
    'Race or Endurance Event',
    'Seminar or Talk',
    'Tour',
    'Tournament',
  ];

  const eventCategories = [
    'Category',
    'Auto, Book & Air',
    'Business & Professional',
    'Charity & Causes',
    'Community & Culture',
    'Family & Education',
    'Fashion & Beauty',
    'Film, Media & Entertainment',
    'Food & Drink',
    'Government & Politics',
    'Health & Wellness',
    'Hobbies & Special Interest',
    'Home & Lifestyle',
    'Music',
    'Other',
    'Performing & Visual Arts',
    'Religious & Spirituality',
  ];

  // Step 1: Set up state
  const [eventBasicInfoData, setEventBasicInfoData] = useState({
    eventTitle: props.formData.eventTitle || '', // Initialize with the title from formData
    eventOrganiser: props.formData.eventOrganiser || '', // Initialize with the organizer from formData
    eventType: 'Concert or Performance',
    eventCategory: 'Music',
    eventGenre: 'Dj/Dance',
    tag: '', // Track the tag input
    tags: props.formData.tags || [],
  });

  // CSS class to apply for input fields that are filled
  const filledInputClass = (value) => (value ? 'filled-input' : '');

  // Step 2: Capture user input and update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEventBasicInfoData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddTag = () => {
    const newTag = eventBasicInfoData.tag.trim();
    if (newTag) {
      setEventBasicInfoData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, newTag],
        tag: '', // Clear the tag input
      }));
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setEventBasicInfoData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((tag) => tag !== tagToRemove),
    }));
  };





  // Step 3: Create an object to store all the data
  const handleSubmit = () => {
    props.updateFormData(eventBasicInfoData);
    // Log the current data
    // console.log(eventBasicInfoData);
  };

  const eventGenreOptions = ['Dj/Dance', 'Rock', 'Pop', 'Hip Hop'];

  return (
    <div className="basic">
      <h2>Basic Info</h2>
      <p>Name your event and tell event-goers why they should come. Add details that highlight what makes it unique.</p>
      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={eventBasicInfoData.eventTitle}
        onChange={handleInputChange}
        className={filledInputClass(eventBasicInfoData.eventTitle)}
      />
      <input
        type="text"
        name="organizer"
        placeholder="Organizer"
        value={eventBasicInfoData.eventOrganiser}
        onChange={handleInputChange}
        className={filledInputClass(eventBasicInfoData.eventOrganiser)}
      />

      {/* Dynamically set dropdown options */}
      <div className="cat_container">
        <select
          name="eventType"
          value={eventBasicInfoData.eventType}
          onChange={handleInputChange}
        >
          {eventType.map((type, index) => (
            <option value={type} key={index}>
              {type}
            </option>
          ))}
        </select>
        <select
          name="eventCategory"
          value={eventBasicInfoData.eventCategory}
          onChange={handleInputChange}
        >
          {eventCategories.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <select
          name="eventGenre"
          value={eventBasicInfoData.eventGenre}
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
          value={eventBasicInfoData.tag}
          onChange={handleInputChange}
        />
        <button className="add_tag" onClick={handleAddTag}>
          Add
        </button>
      </div>

      <div className="tag_container">
        {eventBasicInfoData.tags.map((tag) => (
          <p key={tag}>
            {tag} <span className="x" onClick={() => handleRemoveTag(tag)}>X</span>
          </p>
        ))}
      </div>

      {/* Submit button */}
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default BasicInfo;
