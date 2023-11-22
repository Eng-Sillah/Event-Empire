import React, { useEffect, useState } from "react";
import "./BasicInfo.css";
import {
  eventType,
  eventCategories,
  eventGenreOptions,
} from "../../../Api/datas";
import { getUserEventsDetails } from "../../../Api/apiCalls";
import { getUser } from "../../../Api/auth";
import Spinner from "react-activity/dist/Dots";
import "react-activity/dist/Spinner.css";
function BasicInfo(props) {
  //states
  const [userId, setUserId] = useState();
  const [data, setEvent] = useState();

  // Step 1: Set up state
  const [eventBasicInfoData, setEventBasicInfoData] = useState({
    eventTitle: props.formData.eventTitle || "", // Initialize with the title from formData
    eventOrganiser: props.formData.eventOrganiser || "", // Initialize with the organizer from formData
    eventType: "Concert or Performance",
    eventCategory: "Music",
    eventGenre: "Dj/Dance",
    tag: "", // Track the tag input
    tags: props.formData.tags || [],
  });

  // CSS class to apply for input fields that are filled
  const filledInputClass = (value) => (value ? "filled-input" : "");

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
        tag: "", // Clear the tag input
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

  useEffect(() => {
    getUser().then((value) => {
      setUserId(value.data.user.id);
    });
    //get EVent Details
    getUserEventsDetails(userId).then((value) => {
      setEvent(value.data);
      if (value.data) {
        localStorage.setItem("eventId", value.data[0].id.toString());
      }
    });
  }, [data]);
  return (
    <div className="basic">
      <h2>Basic Info</h2>
      <p>
        Name your event and tell event-goers why they should come. Add details
        that highlight what makes it unique.
      </p>

      {/**event name  */}
      {data ? (
        data.map((value) => {
          localStorage.setItem("event", value.event_title);

          if (
            value.event_title
              .toLowerCase()
              .includes(props.formData.eventTitle.toLowerCase())
          ) {
            return (
              <input
                type="text"
                name="title"
                placeholder="Event Title"
                value={value.event_title}
                onChange={handleInputChange}
                className={filledInputClass(eventBasicInfoData.eventTitle)}
              />
            );
          }
        })
      ) : (
        <Spinner />
      )}

      {/**event creators */}

      {data ? (
        data.map((value) => {
          if (
            value.organizers
              .toLowerCase()
              .includes(props.formData.eventOrganiser.toLowerCase())
          ) {
            return (
              <input
                type="text"
                name="organizer"
                placeholder="Organizer"
                value={value.organizers}
                onChange={handleInputChange}
                className={filledInputClass(eventBasicInfoData.eventOrganiser)}
              />
            );
          }
        })
      ) : (
        <Spinner />
      )}

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
            {tag}{" "}
            <span className="x" onClick={() => handleRemoveTag(tag)}>
              X
            </span>
          </p>
        ))}
      </div>

      {/* Submit button */}
      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default BasicInfo;
