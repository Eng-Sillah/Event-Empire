import React from "react";
import './EventTypes.css';
import advertismentImage from '../../../img/Advertisment.jpg';
import conquestImage from '../../../img/the conquest.jpg';
import Upcomming1Image from '../../../img/jumbotronBackground.jpg';
import ankaraPool1Image from '../../../img/Ankara Pool.jpg';
import shukublyImage from '../../../img/Shukubly.jpg';
import gbamImage from '../../../img/Gbam festiva.jpg';
import ftMusicfestivalImage from '../../../img/freetown music festival.jpg';
import sportImage from '../../../img/Sport.jpg';


function EventTypes() {

    return (
        <div className="organize">
            <h1>What we organize</h1>
            <hr />
            <div className="event">
                <img src={conquestImage} alt="ConquestImage" />
                <div className="content">
                    <h2>Musical Event</h2>
                    <p>Event-Empire specializes in music event management, offering a tailored platform for music enthusiasts and event organizers. Whether you're planning a concert, music festival, or a live performance, Event-Empire provides a seamless experience for creating and hosting musical events. From booking artists and coordinating logistics to selling tickets and engaging with fans, Event-Empire is your trusted partner in orchestrating unforgettable music experiences. Join Event-Empire to elevate your music events to the next level and make harmonious memories that resonate with your audience.</p>
                    <div className="view">
                        <button className="btnView">View Events</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="event">
                <img src={sportImage} alt="SportImage" />
                <div className="content">
                    <h2>Sport Event</h2>
                    <p>Event-Empire is your premier destination for sports event management, catering to the needs of both sports enthusiasts and event organizers. Whether you're planning a marathon, a basketball tournament, or a local sports league, Event-Empire offers a comprehensive platform to streamline the process of creating and hosting sporting events. From athlete registration and facility booking to live score updates and fan engagement, Event-Empire empowers you to deliver thrilling sports experiences. Join Event-Empire and score big with your sports events, where every game becomes a winning moment for participants and spectators alike.</p>
                    <div className="view">
                        <button className="btnView">View Events</button>
                    </div>
                </div>
            </div>
            <hr />
            <div className="event">
                <img src={advertismentImage} alt="AdvertismentImage" />
                <div className="content">
                    <h2>Advertisment Event</h2>
                    <p>Event-Empire is your dedicated partner for hosting advertisement events that captivate and engage your target audience. Whether you're organizing a product launch, a marketing campaign, or a promotional event, Event-Empire provides a tailored platform to ensure the success of your advertisement event. From designing compelling ad campaigns and tracking analytics to coordinating event logistics and securing partnerships, Event-Empire offers a one-stop solution for creating and managing impactful advertising experiences. Join Event-Empire and amplify your brand's message, where every event becomes an opportunity to connect, inspire, and drive meaningful engagement with your audience. Let Event-Empire help you make a lasting impression in the world of advertising events.</p>
                    <div className="view">
                        <button className="btnView">View Events</button>
                    </div>
                </div>
            </div>
            <hr></hr>

            <section className="upcommingEvent">
            <h1>Our Up comming events this year 2022</h1>
            <div className="events">
                <div className="jumbotron">
                    <img src={Upcomming1Image } alt="" />
                </div>
                <div className="event-list">
                    <div className="list">
                        <img src={shukublyImage}  alt="" />
                    </div>
                    <div className="list">
                        <img src={gbamImage} alt="" />
                    </div>
                    <div className="list">
                        <img src={ankaraPool1Image} alt="Ankara" />
                    </div>
                    <div className="list">
                        <img src={ftMusicfestivalImage}  alt="FreetownMusicfestivalimage" />
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default EventTypes;