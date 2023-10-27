import React, { useState } from 'react';
// import QRCode from 'qrcode.react';
import { v4 as uuidv4 } from 'uuid'; // Import the uuid library
import './Ticket.css';

const Ticket = ({ formData, updateFormData, onShowEventCreator }) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeTab, setActiveTab] = useState('Standard');

  const [ticketTypes, setTicketTypes] = useState([
    {
      id: 1,
      name: 'Standard',
      selected: false,
      numberOfTickets: 0,
      price: 0,
      ticketName: 'Standard Ticket',
      availabilityDate: '',
      salesStart: '',
      salesEnd: '',
    },
    {
      id: 2,
      name: 'VIP',
      selected: false,
      numberOfTickets: 0,
      price: 0,
      ticketName: 'VIP Ticket',
      availabilityDate: '',
      salesStart: '',
      salesEnd: '',
    },
    {
      id: 3,
      name: 'Other',
      selected: false,
      numberOfTickets: 0,
      price: 0,
      ticketName: 'Other Ticket',
      availabilityDate: '',
      salesStart: '',
      salesEnd: '',
    },
  ]);

  const sectionCount = 3; // Total number of sections


  // Function to generate a QR code string
  const generateQRCode = (ticketType) => {
    const { eventId } = formData;
    const qrCodes = [];

    // Generate a unique ID for each ticket
    for (let i = 0; i < ticketType.numberOfTickets; i++) {
      const ticketId = uuidv4();
      const qrCodeString = `${eventId}-${ticketId}-${ticketType.id}-${ticketType.name}`;
      qrCodes.push(qrCodeString);
    }

    return qrCodes;
  };

  // Function to handle checkbox changes
  const handleCheckboxChange = (id) => {
    setSelectedCategory(id);
    setActiveTab(ticketTypes.find((type) => type.id === id).name);
    setTicketTypes((prevTicketTypes) =>
      prevTicketTypes.map((ticketType) =>
        ticketType.id === id ? { ...ticketType, selected: true } : { ...ticketType, selected: false }
      )
    );
  };

  // Function to handle input changes for the number of tickets
  const handleTicketTypeChange = (e, id) => {
    const { value } = e.target;
    setTicketTypes((prevTicketTypes) =>
      prevTicketTypes.map((ticketType) =>
        ticketType.id === id ? { ...ticketType, numberOfTickets: Number(value) } : ticketType
      )
    );
  };

  // Function to handle input changes for the price of tickets
  const handlePriceChange = (e, id) => {
    const { value } = e.target;
    setTicketTypes((prevTicketTypes) =>
      prevTicketTypes.map((ticketType) =>
        ticketType.id === id ? { ...ticketType, price: Number(value) } : ticketType
      )
    );
  };

  // Function to handle changes in ticket category information
  const handleTicketInfoChange = (e, category, field) => {
    const { value } = e.target;
    setTicketTypes((prevTicketTypes) =>
      prevTicketTypes.map((ticketType) =>
        ticketType.name === category ? { ...ticketType, [field]: value } : ticketType
      )
    );
  };

  // Function to switch active tab
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const category = ticketTypes.find((type) => type.name === tab);
    if (category) {
      handleCheckboxChange(category.id, tab);
    }
  };

  // Function to handle moving to the next section
  const handleNext = () => {
    if (currentSection < sectionCount) {
      setCurrentSection(currentSection + 1);
    }
  };

  // Function to handle moving to the previous section
  const handlePrev = () => {
    if (currentSection > 1) {
      setCurrentSection(currentSection - 1);
    }
  };



  // Function to handle form submission
  const handleSubmit = () => {
    const updatedTicketTypes = ticketTypes.map((ticketType) => {
      if (ticketType.numberOfTickets > 0) {
        const qrCodes = generateQRCode(ticketType);
        return { ...ticketType, qrCodes };
      }
      return ticketType;
    });

    // Update form data with the QR code strings
    const updatedFormData = {
      ...formData,
      ticket: {
        ticketTypes: updatedTicketTypes,
      },
    };

    updateFormData(updatedFormData);
    
     // Call the onShowEventCreator prop to switch to the Event Creator Workspace
     onShowEventCreator('eventWorkspace');
  };

  return (
    <div className="ticket-container">
      <div className="section-navigation">
        {Array.from({ length: sectionCount }, (_, index) => (
          <div key={index} className={`section-dot ${currentSection === index + 1 ? 'active' : ''}`}>
            {index + 1}
          </div>
        ))}
      </div>

      <div className="section">
        {currentSection === 1 && (
          <div>
            <h2>Section 1: Ticket Types</h2>
            <p>Select the types of tickets and specify the number of tickets for each category:</p>
            <div className="ticket-types-container">
              {ticketTypes.map((ticketType) => (
                <div key={ticketType.id} className="ticket-type">
                  <label>
                    <input
                      type="checkbox"
                      checked={ticketType.selected}
                      onChange={() => handleCheckboxChange(ticketType.id)}
                    />
                    {ticketType.name}
                  </label>
                  {ticketType.selected && (
                    <input
                      type="number"
                      value={ticketType.numberOfTickets}
                      onChange={(e) => handleTicketTypeChange(e, ticketType.id)}
                      placeholder={`Number of ${ticketType.name} Tickets`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {currentSection === 2 && (
          <div>
            <h2>Section 2: Set Prices</h2>
            <p>Set the price for the selected ticket categories:</p>
            <form>
              <div className="ticket-types-container">
                {ticketTypes
                  .filter((ticketType) => ticketType.selected)
                  .map((ticketType) => (
                    <div key={ticketType.id} className="ticket-type">
                      <label>
                        {ticketType.name} Price:
                        <input
                          type="number"
                          value={ticketType.price}
                          onChange={(e) => handlePriceChange(e, ticketType.id)}
                          placeholder={`Price for ${ticketType.name} Tickets`}
                        />
                      </label>
                    </div>
                  ))}
              </div>
            </form>
          </div>
        )}

        {currentSection === 3 && (
          <div>
            <h2>Section 3</h2>
            <p>This is section 3 content.</p>
          </div>
        )}
      </div>

      {selectedCategory && (
        <div className="sidebarRight">
          <div className="sidebar-header">
            <h3>Edit Ticket</h3>
            <h4>Learn More</h4>
          </div>
          <div className="tab-content">
            <div className="tab-control">
              {ticketTypes.map((ticketType) => (
                <button
                  key={ticketType.id}
                  className={ticketType.name === activeTab ? 'active' : ''}
                  onClick={() => handleTabClick(ticketType.name)}
                >
                  {ticketType.name}
                </button>
              ))}
            </div>
            {selectedCategory && (
              <div>
                <h4>{ticketTypes.find((type) => type.id === selectedCategory).name} Information</h4>
                <div>
                  <label>Ticket Name:</label>
                  <input
                    type="text"
                    value={ticketTypes.find((type) => type.id === selectedCategory).ticketName}
                    onChange={(e) => handleTicketInfoChange(e, activeTab, 'ticketName')}
                    placeholder={`${activeTab} Ticket`}
                  />
                </div>
                <div>
                  <label>Number of Tickets:</label>
                  <input
                    type="number"
                    value={ticketTypes.find((type) => type.id === selectedCategory).numberOfTickets}
                    onChange={(e) => handleTicketTypeChange(e, selectedCategory)}
                  />
                </div>
                <div>
                  <label>Price per Ticket:</label>
                  <input
                    type="number"
                    value={ticketTypes.find((type) => type.id === selectedCategory).price}
                    onChange={(e) => handlePriceChange(e, selectedCategory)}
                  />
                </div>
                <div>
                  <label>Availability Date:</label>
                  <input
                    type="date"
                    value={ticketTypes.find((type) => type.id === selectedCategory).availabilityDate}
                    onChange={(e) => handleTicketInfoChange(e, activeTab, 'availabilityDate')}
                  />
                </div>
                <div className="sales_start">
                  <div>
                    <label>Start Date:</label>
                    <input
                      type="date"
                      value={ticketTypes.find((type) => type.id === selectedCategory).salesStart}
                      onChange={(e) => handleTicketInfoChange(e, activeTab, 'salesStart')}
                    />
                  </div>
                  <div>
                    <label>Start Time</label>
                    <input
                      type="time"
                      value={ticketTypes.find((type) => type.id === selectedCategory).salesStart}
                      onChange={(e) => handleTicketInfoChange(e, activeTab, 'salesStart')}
                    />
                  </div>
                </div>

                <div className="sales_end">
                  <div>
                    <label>End Date</label>
                    <input
                      type="date"
                      value={ticketTypes.find((type) => type.id === selectedCategory).salesEnd}
                      onChange={(e) => handleTicketInfoChange(e, activeTab, 'salesEnd')}
                    />
                  </div>
                  <div>
                    <label>End Time</label>
                    <input
                      type="time"
                      value={ticketTypes.find((type) => type.id === selectedCategory).salesEnd}
                      onChange={(e) => handleTicketInfoChange(e, activeTab, 'salesEnd')}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="controls-button">
            <button>Cancel</button>
            <button onClick={handleSubmit}>Save</button>
          </div>
        </div>
      )}
      <div className="section-buttons">
        {currentSection > 1 && <button onClick={handlePrev}>Previous</button>}
        {currentSection < sectionCount && <button onClick={handleNext}>Next</button>}
        {currentSection === sectionCount && <button onClick={handleSubmit}>Submit</button>}
      </div>
    </div>
  );
};

export default Ticket;
