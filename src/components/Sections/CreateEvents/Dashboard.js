// BasicInfo.js
import React from 'react';
import "./Dashboard.css"

function Dashboard() {
  return (
<div className="dashboard_main_container event_creat_hidden">
    <div className="main_dashboard">
        <h1>Dashboard</h1>
        <div className="cards_container">
            <div className="sold_container">
                <div className="ticket_sold ">
                <p className="dash_sold" dash_sold>Ticket Sold</p>
                <h3>0</h3>
                <span>0 paid - 0 free</span>
            </div>
            <div className="ticket_sold ">
                <p className="dash_sold">Page View</p>
                <h3>0</h3>
                <span>0 from tHE wAY oUT</span>
                <p>Open page views report</p>
            </div>
            </div>
            <div className="todo">
                 <div className="ticket_card">
                <h3>Your to-do list</h3>
                <div className="todo_cont">
                    <p>Your event doesn't have any tickets</p>
                    <p className="cretae_ticket">Create ticket</p>
                </div>
            </div>
            </div>
            
           
        </div>

        <div className="share_recomm">
            <h2>Share</h2>
            <h3>Recommended</h3>
        </div>
        <div className="share_recom_container">
            <div className="share">
                <div className="url">
                    <p>Event URL</p>
                    <p><a href="https://www.thewayout.com/e/esto-cres-live-band-show">https://www.thewayout.com/e/esto-cres-live-band-show</a></p>
                </div>
                <p>Share on</p>
                <div className="social_media_icon">
                    <div>
                        <img src="Icons/facebook.png" alt="" />
                    </div>
                    <div>
                        <img src="Icons/twitter.png" alt="" />
                    </div>
                    <div>
                        <img src="Icons/watsapp.png" alt="" />
                    </div>
                    <div>
                        <img src="Icons/instagram.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="recomend">
                <div>
                    <p>Learn how to make the most out of tHE wAY oUT</p>
                    <p className="read">Read our quick start guide</p>
                </div>
                <div>
                    <p>Increase your sales by 63% with a Boost marketing campaign 🕛</p>
                    <p className="read">Lunch a new campaign</p>
                </div>
            </div>
        </div>
        <hr />
        <div className="share_recom_container slae_report">
            <div className="share">
                <div className="url">
                    <h3>Sales by ticket type</h3>
                    <div className="ticket_sales_report">
                        <ul>
                            <li>Ticket type</li>
                            <li>Price</li>
                            <li>Sold</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="recomend">
                <div>
                    <h4>Other Attendees Action</h4>
                    
                </div>
                <div>
                    
                    <p className="read">Attendees summary report</p>
                    <p className="read">Response to customer question</p>
                </div>
            </div>
        </div>
        <div className="share_recom_container sales_report_img_cont">
            <div className="share">
                <p className="sales_report_img">📃</p>
                <p>No ticket for this event yet</p>
            </div>
            <div className="recomend">
               
            </div>
        </div>
        <div className="share_recom_container slae_report recent_order">
            <div className="share">
                <div className="url">
                    <h3>Recent Orders</h3>
                    <div className="ticket_sales_report">
                        <ul>
                            <li>Order #</li>
                            <li>Name</li>
                            <li>Quantity</li>
                            <li>Price</li>
                            <li>Date</li>
                        </ul>
                    </div>
                </div>
                
            </div>
            <div className="recomend">
                
            </div>
        </div>
        <div className="share_recom_container sales_report_img_cont">
            <div className="share">
                <p className="sales_report_img">📃</p>
                <p>No ticket for this event yet</p>
            </div>
            <div className="recomend">
               
            </div>
        </div>
    </div>
    <div></div>
</div>
  );
}

export default Dashboard;
