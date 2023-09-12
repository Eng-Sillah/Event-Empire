// BasicInfo.js
import React from 'react';
import "./Details.css"

function Details() {
  return (
    <div className="detail event_creat_hidden">
    <h2>Main Event Image</h2>
    <p>Add photos to show what your event will be about. You can upload up to 10 images</p>
    <div className="detail_image_container">
        <h4>Drag and drop an image or</h4>
        <div className="upload_way ">
            <div className="upload ways">
                <p>Upload Image</p>
            </div>
            <div className="design_way ways">
                <p>Design with canva</p>
            </div>
        </div>
    </div>
    <div className="upload_sizes">
        <ul>
            <li>Remommended image size: 2160 x 1080px</li>
            <li>Maximum file size: 10MB</li>
            <li>Supported image files: JPEG or PNG</li>
        </ul>
    </div>

    <div className="attendees_sta">
        <div className="stat">
            <div className="stat_img"></div>
            <div className="stat_percentage">
                <p>82% of attendees prefer main event images that show an event's vibe and atmosphere.</p>
            </div>
        </div>
        <div className="see_example">
            <button>See examples</button>
            <h4>x</h4>
        </div>
    </div>

    <div className="summary">
        <h2>Summary</h2>
<p>Grab people's attention with a short description about your event. Attendees will see this at the top of your event page. (140 characters max). <span>See example</span></p>
    </div>
    <div className="description">
        <h2>Description</h2>
<p>Add more details to your event like your schedule, sponsors, or featured guests. <span>Learn More</span></p>
<textarea name="t1" id="t1" cols="20" rows="10"></textarea>
        <div className="textAreaOptionControls">
            <button>Add Text</button>
            <button>Add image</button>
            <button>Add Video</button>
        </div>
        
    </div>
    <div className="more_sectons">
        <h2>Add more sections to your event page</h2>
<p>Make your event stand out even more. Adding these sections will help attendees purchase tickets.</p>
<div className="how_it_work">
<div className="work_sect">
    <div>
        agender
    </div>
    <div>
        <span>how it work</span>
        <button>Add</button>
    </div>
</div>
<hr />
<div className="work_sect">
    <div>
        FAQ
    </div>
    <div>
        <span>how it work</span>
        <button>Add</button>
    </div>
</div>
</div>
    </div>
    <div className="space"></div>
</div>
  );
}

export default Details;
