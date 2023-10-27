import React from 'react';
import "./Publish.css";

function Publish({ formData,  updateEvents }) {
  const handlePublishClick = () => {
    // You can update the formData here before publishing
    // For example, you can set the publish date and visibility based on user selections.
    const updatedFormData = { ...formData, published: true };
    updateEvents(updatedFormData, 'publish'); // Trigger the updateFormData function in CreateEventDashboard.js
    
  };

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
          <img src={formData.eventBanner} alt="" />
        </div>
        <div className="ban publish_title_name">
          <div className="desc">
            <h2>{formData.eventTitle}</h2>
            <p>{formData.eventDate.start}</p>
            <p>{formData.eventVenue}</p>
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
              placeholder={`Start date\n${formData.eventDate.start}`}
            ></textarea>
            <textarea
              className="min_max"
              name="title"
              placeholder={`Start time\n${formData.startTime}`}
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
