import React, { useEffect, useState } from 'react';
import "./Publish.css";
import { getUser } from '../../../Api/auth';
import { getUserEventsDetailsByName } from '../../../Api/apiCalls';
import Spinner from "react-activity/dist/Dots";
import "react-activity/dist/Spinner.css";
import { supabase } from '../../../supabase';
function Publish({ formData,  updateEvents }) {

  const [userId, setUserId] =useState()
const [eventName, setEventName] = useState("")
const [details,setDetails] = useState([])
  const getEventName=()=>{
    const event = localStorage.getItem("event")
setEventName(event)
  }
  const handlePublishClick = () => {
     supabase.from("Event").update({is_publish:true
    }).eq('id',details.id ).select().then((value)=>{
      if(value.status===200 || value.status===204){
        alert("event published")
      }
      console.log(value.status)
    })
    
  };

  useEffect(()=>{
    getEventName()
getUser().then((value)=>{
  setUserId(value.data.user.id);
})

getUserEventsDetailsByName(eventName).then((value)=>{
  setDetails(value.data[0])
})

console.log(details)
  },[eventName])

  if(details===null){
    return(
      <div>
      <Spinner/>
      </div>
    )
  }
  return (
    <div className="publish_main_container event_creat_hidden">
      <div className="complete_setup">
        {formData.ticketMissing ? (
          <>
            <p>Tickets are missing. Please complete the setup before publishing</p>
            <p className="complete">Complete setup &nbsp;&nbsp;&nbsp; <span>x</span></p>
          </>
        ) : (
            <div className='ready-to-publish'>
                <p>Your event is ready to be published!</p>
                <button onClick={handlePublishClick}>Publish</button>

            </div>
        )}
      </div>
      <h1 id="publish_heading">Publish Your Event</h1>
      <div className="banner_container">
        <div className="ban publish_flyer">
        
          <img src={`  https://tvhytsddrqmcdgktxlla.supabase.co/storage/v1/object/public/eventFlag/${details.images}
          `} alt="" />
        </div>
        <div className="ban publish_title_name">
          <div className="desc">
            <h2>{details.event_title}</h2>
            <p>{details.start_date}</p>
            <p>{details.venue}</p>
            <div className="desc_icon">
              <img src="Icons/Details.png" alt="" />
              <img src="Icons/Ticket.png" alt="" />
            </div>
            <div className="prev">Preview your event</div>
          </div>
        </div>
      </div>
      <div className="tips_container">
        <div className="tips_left">
          <h3>Who can see your event?</h3>
          <div className="public">
          <input type="radio" name="view" />

            <div className="text">
              <h4>Public</h4>
              <p>Share on Event Empier and search engines</p>
            </div>
          </div>
          <div className="private">
            <input type="radio" name="view" />
            <div className="text">
              <h4>Private</h4>
              <p>Only available to a selected audience</p>
            </div>
          </div>
          <h3 className="when">When should we publish your event?</h3>
          <div className="publish-public">
            <input type="radio" name="publish" />
            <div className="text">
              <p>Publish now</p>
            </div>
          </div>
          <div className="publish-private">
            <input type="radio" name="publish" />
            <div className="text">
              <p>Schedule for later</p>
            </div>
          </div>
          <div className="publish_date">
            <textarea
              className="min_max"
              name="title"
              placeholder={`Start date\n${details.start_date}`}
            ></textarea>
            <textarea
              className="min_max"
              name="title"
              placeholder={`Start time\n${details.start_time}`}
            ></textarea>
          </div>
          <p id="time_zone">Time zone is the same as your event's</p>
        </div>
        <div className="tips_right">
          <h3>Tips before you publish</h3>
          <div className="tips">
            <p>Create promo code for your event →</p>
            <p>Customize your order form →</p>
            <p>Add this event to collection →</p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Publish;
