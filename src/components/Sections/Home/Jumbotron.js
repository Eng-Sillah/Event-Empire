import React from "react";
import './Jumbotron.css';

function Jumbotron() {

    return (
    <div className="jumbotron-section">
        <div className="jumbotron-content">
            <h1>Welcome to <br /> <span>Event-Empire</span></h1>
            <p>The Event-Empire is a self-service ticketing platform for event creators, and we charge you nothing to create an account for your event. We offer event planners tools to manage admissions, email marketing, social media advertisement, data collection & other specialized product all without leaving the website for a successful & profitable event.</p>
            <button>Explore</button>
        </div>
        <div className="overlay"></div>
    </div>
    );
}

export default Jumbotron;