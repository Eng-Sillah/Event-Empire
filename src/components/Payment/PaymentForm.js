import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import "./PaymentForm.css";

function PaymentForm({ hidePaymentForm }) {
  const location = useLocation();
  const formData = location.state ? location.state.formData : null;
  const navigate = useNavigate();
  const [showPaymentInfo, setShowPaymentInfo] = useState(false);
  const [paymentInfo, setPaymentInfo] = useState({
    name: '',
    numberOfTickets: 1,
    paymentType: '',
  });

  // Define forms for each payment type
  const paymentForms = {
    'Credit Card': (
      <div>
        <p>Enter Credit Card Information:</p>
        <input type="text" placeholder="Card Number" />
        <input type="text" placeholder="Expiration Date" />
        <input type="text" placeholder="CVV" />
      </div>
    ),
    PayPal: (
      <div>
        <p>Enter PayPal Information:</p>
        <input type="text" placeholder="PayPal Email" />
      </div>
    ),
    'Bank Transfer': (
      <div>
        <p>Bank Transfer Information:</p>
        <input type="text" placeholder="Bank Account Number" />
        <input type="text" placeholder="Bank Name" />
      </div>
    ),
  };

  if (!formData) {
    return (
      <div className="payment-container">
        <p>Payment information not available.</p>
        <button className="btn btn-primary" onClick={hidePaymentForm}>
          Close
        </button>
      </div>
    );
  }

  const { selectedTicketType } = formData;
  const qrCodes = selectedTicketType.qrCodes;

  const handleProceedToPayment = () => {
    if (qrCodes.length > 0) {
      const lastQRCode = qrCodes.pop();
      setShowPaymentInfo(true);
      console.log(lastQRCode);
    }
  };

  const handleNameChange = (e) => {
    setPaymentInfo({ ...paymentInfo, name: e.target.value });
  };

  const handleNumberOfTicketsChange = (e) => {
    setPaymentInfo({ ...paymentInfo, numberOfTickets: parseInt(e.target.value) });
  };

  const handlePaymentTypeChange = (e) => {
    setPaymentInfo({ ...paymentInfo, paymentType: e.target.value });
  };

  return (
    <div className="payment-container-main">
      <div className="main">
        <div className="payment-content" style={{ backgroundColor: '#fff', borderRadius: '10px' }}>
          <div className="payment-header">
            {selectedTicketType && (
              <h5 className="payment-title">Payment for {selectedTicketType.name} Ticket</h5>
            )}
            <button type="button" className="btn-close" onClick={hidePaymentForm}></button>
          </div>
          <div className="payment-body">
            {selectedTicketType && (
              <div>
                <p>Ticket Type: {selectedTicketType.name}</p>
                <p>Price: Le {selectedTicketType.price}</p>
                <p>QR Code:</p>
                <button
                  className="btn btn-primary"
                  style={{ backgroundColor: '#007bff', color: '#fff', marginTop: '10px' }}
                  onClick={handleProceedToPayment}
                >
                  Proceed to Payment
                </button>
                {showPaymentInfo && (
                  <div className='paymentInfo'>
                    <p>Enter Your Name:</p>
                    <input
                      type="text"
                      value={paymentInfo.name}
                      onChange={handleNameChange}
                      placeholder="Your Name"
                    />
                    <p>Number of Tickets:</p>
                    <input
                      type="number"
                      value={paymentInfo.numberOfTickets}
                      onChange={handleNumberOfTicketsChange}
                    />
                    <p>Select Payment Type:</p>
                    {Object.keys(paymentForms).map((type) => (
                      <label key={type}>
                        <input
                          type="radio"
                          value={type}
                          checked={paymentInfo.paymentType === type}
                          onChange={handlePaymentTypeChange}
                        />
                        {type}
                      </label>
                    ))}
                    {paymentInfo.paymentType && paymentForms[paymentInfo.paymentType]}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentForm;
