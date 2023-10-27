import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BuyTicketForm.css';

function BuyTicketForm({ hideBuyTicketForm }) {
  const location = useLocation();
  const navigate = useNavigate();
  const eventDetails = location.state ? location.state.eventDetails : null;

  if (!eventDetails) {
    return (
      <div className="buy-ticket-form">
        <p>No ticket information available.</p>
      </div>
    );
  }

  const handleBuyTicket = (selectedTicketType) => {
    // Generate a QR code (replace this with your actual QR code generation logic)
    const qrCode = generateQRCode();

    // Redirect to PaymentForm and pass formData
    navigate('/payment-form', {
      state: {
        formData: {
          selectedTicketType,
          qrCode,
        },
      },
    });
  };

  const generateQRCode = () => {
    // Replace this with your QR code generation logic
    return 'sample-qrcode-value';
  };

  return (
    <div className="buyTicketContainer">
      <div className="main">
        <div className="modal-content" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
          <div className="modal-header">
            {eventDetails && (
              <h5 className="modal-title">{eventDetails.eventTitle} - Buy Tickets</h5>
            )}
            <button type="button" className="btn-close" onClick={hideBuyTicketForm}></button>
          </div>
          <div className="modal-body event-details-container">
            {eventDetails && (
              <><div className="event-banner">
                              <p>Event Banner:</p>
                              <img src={eventDetails.eventBanner} alt='' />
                          </div><div className="event-info">
                                  <h4><b>Event Description:</b></h4>
                                  <p className='eventDescription'>{eventDetails.eventDescription}</p>
                                  <p><b>Event Location:</b>  {eventDetails.eventVenue}</p>
                                  <p><b>Event Type:</b> {eventDetails.eventType}</p>

                                  <p><b>Event Region:</b> {eventDetails.eventRegion}</p>
                                  {/* <p>Event Dates:</p> */}
                                  <p><b>Date:</b> {eventDetails.eventDate.start}</p>
                                  {/* <p>End Date: {eventDetails.eventDate.end}</p> */}
                                  {/* <p>Event Time:</p> */}
                                  <p><b>Time:</b> {eventDetails.eventTime.start}</p>
                                  {/* <p>End Time: {eventDetails.eventTime.end}</p> */}
                                  <h1>Buy Ticket:</h1>
                                  {eventDetails.ticket && (
                                      <ul>
                                          {eventDetails.ticket.ticketTypes.map((ticketType) => (
                                              <li key={ticketType.id} className='ticketTypes'>
                                                <div className='ticket'>
                                                <p>Ticket Type:<b>  {ticketType.name}</b></p>
                                                  <p>Price: Le  <b>{ticketType.price}</b></p>
                                                  <p>Number of Tickets Available: <b>{ticketType.numberOfTickets}</b></p>
                                                </div>
                                                <button
                                                    className="btn btn-primary"
                                                    style={{ backgroundColor: '#007bff', color: '#fff', marginTop: '10px' }}
                                                    onClick={() => handleBuyTicket(ticketType)} // Pass the selected ticket type
                                                >
                                                    Buy Ticket
                                                </button>
                                              </li>
                                          ))}
                                      </ul>
                                  )}
                              </div></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuyTicketForm;
