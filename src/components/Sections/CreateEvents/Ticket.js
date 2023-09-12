import React from 'react';
import "./Ticket.css";

function Ticket() {
  return (
    <div className="ticket_main_container event_creat_hidden">
    <div className="big_main">
    <div className="main">
    <div className="img_div">
        <img src="icons/Ticket.png" alt="" />
    </div>
        <h3>Let's create tickets</h3>
        <p>Create a section if you want to sell multiple ticket types that share the same inventory. i.e. Normal, VIP</p>
        <div className="ticket_section">
        <button className="section">Create a section</button>
        <button className="add_ticket">Add tickets</button>
        </div>
    </div>
</div>
<div className="ticket_popup">
    <div className="ticket-header">
    <h3>Add tickets</h3>
    <p>Learn more</p>
    </div>
    <hr />

    <div className="add_ticket_container">
<div className="ticket_types">
<div className="ticket_type">
    <button className="ticketType btnpaid">Paid</button>
    <button className="ticketType free">Free</button>
    <button className="ticketType donation">Donation</button>
    </div>
<div className="paid">
    
    <textarea name="title" placeholder="Name* &#10;General/Admission "></textarea>
    <textarea name="title" placeholder="Available quantity "></textarea>
    <textarea name="title" placeholder="Price* &#10;0.00 "></textarea>
    <div className="event_date_container">
         <textarea name="title" placeholder="Sales start* &#10;03/05/2023"></textarea>
    <textarea name="title" placeholder="Start time* &#10;12:00 AM "></textarea>
    <textarea name="title" placeholder="Sales end* &#10;04/05/2023"></textarea>
    <textarea name="title" placeholder="End time* &#10;7:00 PM "></textarea>
    </div>
    <p className="gmt">Event end time zone is GMT</p>
    <p className="btnPaidScrol">▼</p>
    <div className="advance_setting">
        <p>Advance settings</p>
        <hr />
        <div className="displaySales">
            <input type="checkbox" />
            <label for="">Show ticket sales end dates and status at checkout</label>
        </div>
        <textarea name="title" placeholder="Description* &#10;Tell attendees more about this ticket." id="popTickDesc"></textarea>
        
        <div className="visibility">
            <label for="Visibility">Visibility</label>
            <select name="" id="">
                <option value="visible" aria-placeholder="Visibility">Visible</option>
                <option value="visible" aria-placeholder="Visibility">Hidden</option>
            </select>
        </div>
        <p id="perOrderTic">Ticket per order</p>
        <div className="ticket_per_order">
            <textarea className="min_max" name="title" placeholder="Minimum* &#10;1"></textarea>
            <textarea className="min_max" name="title" placeholder="Maximum* &#10;10"></textarea>
        </div>
        <textarea name="title" placeholder="Sales channel &#10;Everywhere"></textarea>
        <div className="displaySales eTicket">
            <input type="checkbox" checked />
            <label for="">eTicket</label>
        </div>
    </div>
    
</div>
<div className="free_ticket hiden_popup_page">

    <textarea name="title" placeholder="Name* &#10;General/Admission "></textarea>
    <textarea name="title" placeholder="Available quantity "></textarea>
    <textarea name="title" placeholder="Price* &#10;Free "></textarea>
    <div className="event_date_container">
         <textarea name="title" placeholder="Sales start* &#10;03/05/2023"></textarea>
    <textarea name="title" placeholder="Start time* &#10;12:00 AM "></textarea>
    <textarea name="title" placeholder="Sales end* &#10;04/05/2023"></textarea>
    <textarea name="title" placeholder="End time* &#10;7:00 PM "></textarea>
    </div>
    <p className="gmt">Event end time zone is GMT</p>
    <p className="btnPaidScrol">▼</p>
    <div className="advance_setting">
        <p>Advance settings</p>
        <hr />
        <div className="displaySales">
            <input type="checkbox" />
            <label for="">Show ticket sales end dates and status at checkout</label>
        </div>
        <textarea name="title" placeholder="Description* &#10;Tell attendees more about this ticket." class="popTickDesc"></textarea>
        
        <div className="visibility">
            <label for="Visibility">Visibility</label>
            <select name="" id="">
                <option value="visible" aria-placeholder="Visibility">Visible</option>
                <option value="visible" aria-placeholder="Visibility">Hidden</option>
            </select>
        </div>
        <p class="perOrderTic">Ticket per order</p>
        <div class="ticket_per_order">
            <textarea className="min_max" name="title" placeholder="Minimum* &#10;1"></textarea>
            <textarea className="min_max" name="title" placeholder="Maximum* &#10;10"></textarea>
        </div>
        <textarea name="title" placeholder="Sales channel &#10;Everywhere"></textarea>
        <div className="displaySales eTicket">
            <input type="checkbox" checked />
            <label for="">eTicket</label>
        </div>
    </div>
    
</div>
<div className="donation_ticket hiden_popup_page">
  
    <textarea name="title" placeholder="Name* &#10;Donation "></textarea>
    <textarea name="title" placeholder="Available quantity &#10;Unlimited "></textarea>
    <textarea name="title" placeholder="Price &#10;Attendees can donate what they wish " id="donation_price"></textarea>
    <div className="displaySales">
            <input type="checkbox" checked />
            <label for="">Absorb fees: Ticketing fees are deducted from your donation amount.</label>
        </div>
    <div className="event_date_container">
         <textarea name="title" placeholder="Sales start* &#10;03/05/2023"></textarea>
    <textarea name="title" placeholder="Start time* &#10;12:00 AM "></textarea>
    <textarea name="title" placeholder="Sales end* &#10;04/05/2023"></textarea>
    <textarea name="title" placeholder="End time* &#10;7:00 PM "></textarea>
    </div>
    <p className="gmt">Event end time zone is GMT</p>
    <p className="btnPaidScrol">▼</p>
    <div className="advance_setting">
        <p>Advance settings</p>
        <hr />
        <div className="displaySales" />
            <input type="checkbox" />
            <label for="">Show ticket sales end dates and status at checkout</label>
        </div>
        <textarea name="title" placeholder="Description* &#10;Tell attendees more about this ticket." class="popTickDesc"></textarea>
        
        <div className="visibility">
            <label for="Visibility">Visibility</label>
            <select name="" id="">
                <option value="visible" aria-placeholder="Visibility">Visible</option>
                <option value="visible" aria-placeholder="Visibility">Hidden</option>
            </select>
        </div>
        <p className="perOrderTic">Ticket per order</p>
        <div className="ticket_per_order">
            <textarea className="min_max" name="title" placeholder="Minimum* &#10;1"></textarea>
            <textarea className="min_max" name="title" placeholder="Maximum* &#10;10"></textarea>
        </div>
        <textarea name="title" placeholder="Sales channel &#10;Online only"></textarea>
        <div className="displaySales eTicket">
            <input type="checkbox" checked />
            <label for="">eTicket</label>
        </div>
        <div className="displaySales eTicket">
            <input type="checkbox" />
            <label for="">Will call</label>
        </div>
    </div>
    
</div>
    <div className="save_cancle">
    <button className="btncancle">Cancle</button>
    <button className="save">Save</button>
    </div>
</div>

    </div>
</div>

  );
}

export default Ticket;
