import React from 'react';

const TicketSidebar = ({ selectedCategories, ticketTypes, handlePriceChange }) => {
  return (
    <div className="ticket-sidebar">
      {selectedCategories.map((categoryId) => {
        const ticketType = ticketTypes.find((type) => type.id === categoryId);
        return (
          <div key={categoryId} className="ticket-category">
            <h3>{ticketType.name} Category</h3>
            <label>
              {ticketType.name} Price:
              <input
                type="number"
                value={ticketType.price}
                onChange={(e) => handlePriceChange(e, categoryId)}
                placeholder={`Price for ${ticketType.name} Tickets`}
              />
            </label>
          </div>
        );
      })}
    </div>
  );
};

export default TicketSidebar;
