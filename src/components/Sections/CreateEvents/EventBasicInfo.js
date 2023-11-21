import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./EventBasicInfo.css";
import { onAuthStateChanged } from "firebase/auth";
import { supabase } from "../../../supabase";
import { auth } from "../Home/firebase-config"; // Import the 'auth' object
import { v4 as uuidv4 } from "uuid"; // Import uuid
import { eventSetUp } from "../../../Api/apiCalls";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import { getUser } from "../../../Api/auth";
import { eventType, eventCategories } from "../../../Api/datas";
function EventBasicInfo() {
  //states
  const [isLoading, setIsloading] = useState(false);
  const [formData, setFormData] = useState({
    eventTitle: "",
    eventBanner: "",
    eventOrganiser: "",
    eventDescription: "",
    eventType: "Live Event", // Default value
    eventCategory: "Live Event", // Default value
    tags: [],
    eventVenue: "",
    eventDate: {
      start: "",
      end: "",
    },
    eventTime: {
      start: "",
      end: "",
    },
    eventRegion: "Static Region",
    displayStartTime: false,
    displayEndTime: false,
    timeZone: "GMT+0100 Sierra Leone Time", // Default value
    eventId: "", // Add eventId field
  });

  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState();
  const navigate = useNavigate();

  // Effect to get the user ID when the user is authenticated
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUser(uid);
      }
    });

    getUser().then((user) => {
      console.log(user.data.user.id);
      setUserId(user.data.user.id);
    });
  }, []);

  const handleFormDataChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("eventDate") || name.startsWith("eventTime")) {
      // If the name starts with 'eventDate' or 'eventTime', update the nested properties
      const [obj, propName] = name.split("."); // Split the name into object and property
      setFormData((prevData) => ({
        ...prevData,
        [obj]: {
          ...prevData[obj],
          [propName]: value,
        },
      }));
    } else {
      // Otherwise, update the top-level property directly
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleAddTag = () => {
    const newTag = formData.tag.trim();
    if (newTag) {
      setFormData((prevData) => ({
        ...prevData,
        tags: [...prevData.tags, newTag],
        tag: "", // Clear the tag input
      }));
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  // Add this function to generate a unique event ID
  function generateEventId() {
    return uuidv4();
  }

  // Function to set user and eventId in the formData
  function setUserAndEventId() {
    // Generate a unique eventId
    const eventId = generateEventId();

    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        user: user,
        eventId: eventId,
      }));
    }
  }

  // Call setUserAndEventId when the component loads or when the user information is available
  useEffect(() => {
    if (user) {
      setUserAndEventId();
    }
  }, [user]);

  // Step 7: Handle "Save & Continue" button click
  const handleSaveAndContinue = () => {
    // Generate a unique eventId using uuid
    const eventId = uuidv4();
    // Capture the user's ID token and add it to formData
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        user: user,
        eventId: eventId, // Add the user's ID token
      }));
    }
    console.log(formData.eventDate);

    setIsloading(true);
    eventSetUp(
      formData.eventTitle,
      formData.eventOrganiser,
      formData.tags,
      formData.eventDate.start,
      formData.eventTime.start,
      userId,
      formData.eventVenue,
      formData.eventDescription,
      formData.eventType,
      formData.eventCategory,
      formData.timeZone,
      formData.eventRegion,
      formData.eventTime.end,
      formData.eventDate.end
    ).then((value) => {
      if (value.status === 201) {
        setIsloading(false);
        navigate("/create-event/create-event-dashboard", {
          state: { formData },
        });
      }
      console.log(value.status);
    });
    // supabase.from("Event").insert([
    //   {
    //     event_title:formData.eventTitle,
    //     organizers:formData.eventOrganiser,
    //     tags:formData.tags,
    //     start_date:formData.eventDate.start,
    //     start_time:formData.eventTime.start,
    //     user_id:userId,
    //     venue:formData.eventVenue,
    //     description:formData.eventDescription,
    //     event_type:formData.eventType,
    //     event_category:formData.eventCategory,
    //     time_zone:formData.timeZone,
    //     event_region:formData.eventRegion,
    //     end_time:formData.eventTime.end,
    //     end_date:formData.eventDate.end
    //   }
    // ]).then((data) => {
    //   console.log(data.status)
    // })
    // Step 8: Pass form data as state to the next route
    // navigate('/create-event/create-event-dashboard', { state: { formData } });
  };

  return (
    <div className="basic_main_container">
      <h2>Basic Info</h2>
      <p>
        Name your event and tell event-goers why they should come. Add details
        that highlight what makes it unique.
      </p>
      <textarea
        name="eventTitle"
        placeholder="Event Title* &#10;Be clear and descriptive"
        onChange={handleFormDataChange}
      ></textarea>
      <textarea
        name="eventOrganiser"
        placeholder="Organizer* &#10;Tell attendees who is organizing this event"
        onChange={handleFormDataChange}
      ></textarea>
      <p>
        This profile describes a unique organizer and shows all of the on one
        page. View Organizer Info
      </p>
      <div className="cat_container">
        <select name="eventType" onChange={handleFormDataChange}>
          {eventType.map((type, index) => {
            return (
              <option value={type} key={index}>
                {type}
              </option>
            );
          })}
        </select>
        <select name="eventCategory" onChange={handleFormDataChange}>
          {eventCategories.map((category, index) => {
            return (
              <option value={category} key={index}>
                {category}
              </option>
            );
          })}
        </select>
      </div>
      <div className="tags-area">
        <h2>Tags</h2>
        <p className="tag_p">
          Improve discoverability of your event by adding tags relevant to the
          subject matter
        </p>
        <div className="discovery">
          <input
            type="text"
            name="tag"
            className="tag_discovery"
            placeholder="Press Enter to add a tag. Add search keywords to your event"
            value={formData.tag || ""}
            onChange={handleFormDataChange}
          />
          <button className="add_tag" onClick={handleAddTag}>
            Add
          </button>
        </div>

        <div className="tag_container">
          {formData.tags.map((tag) => (
            <p key={tag}>
              {tag}{" "}
              <span className="x" onClick={() => handleRemoveTag(tag)}>
                X
              </span>
            </p>
          ))}
        </div>
      </div>
      <h2 className="event_basic_location">Location</h2>
      <p className="location_p">
        Help people in the area discover your event and let attendees know where
        to show up.
      </p>
      <div className="locations">
        <div className="location venue">Venue</div>
        <div className="location">Online Event</div>
        <div className="location">To be announced</div>
      </div>
      <h4 className="venue_location">Venue location</h4>
      <input
        type="text"
        placeholder="Tell us where the event is taking place"
        className="venue_search"
        name="eventVenue"
        onChange={handleFormDataChange}
      />
      <h2 className="dateAndTime">Date and Time</h2>
      <p>
        Tell event-goers when your event starts and ends so they can make plans
        to attend.
      </p>
      <div className="locations">
        <div className="location venue">Single Event</div>
        <div className="location">Recurring Event</div>
      </div>
      <p>Single event happened once and can last multiple days.</p>
      <div className="time_container">
        <input
          type="text"
          placeholder="Event Starts&#10; Date"
          onFocus={(e) => (e.target.type = "date")}
          name="eventDate.start"
          onChange={handleFormDataChange}
        />
        <input
          type="text"
          placeholder="Event Start&#10; Time"
          onFocus={(e) => (e.target.type = "time")}
          name="eventTime.start"
          onChange={handleFormDataChange}
        />
        <input
          type="text"
          placeholder="Event Ends&#10; Date"
          onFocus={(e) => (e.target.type = "date")}
          name="eventDate.end"
          onChange={handleFormDataChange}
        />
        <input
          type="text"
          placeholder="Event End Time&#10;"
          onFocus={(e) => (e.target.type = "time")}
          name="eventTime.end"
          onChange={handleFormDataChange}
        />
      </div>
      <div className="display">
        <input
          type="checkbox"
          id="start"
          name="displayStartTime"
          onChange={handleFormDataChange}
        />
        <label htmlFor="start">
          {" "}
          Display start time The start time of your event will be displayed to
          attendees.
        </label>
      </div>
      <div className="display">
        <input
          type="checkbox"
          id="end"
          name="displayEndTime"
          onChange={handleFormDataChange}
        />
        <label htmlFor="end">
          Display end time The start time of your event will be displayed to
          attendees.
        </label>
      </div>
      <div className="timeAndLanguage">
        <select name="timeZone" onChange={handleFormDataChange}>
          <option value="GMT+0100 Sierra Leone Time">
            Time Zone (GMT+0100) Sierra Leone Time
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

        {isLoading == false ? (
          <button className="save_continue" onClick={handleSaveAndContinue}>
            Save & Continue
          </button>
        ) : (
          <Dots />
        )}
      </div>
    </div>
  );
}

export default EventBasicInfo;
