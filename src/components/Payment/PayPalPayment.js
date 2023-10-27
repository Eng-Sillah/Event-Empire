// PayPalPayment.js
import React, { useEffect } from 'react';
import config from './paypal-config'; // Import your PayPal API credentials
const paypal = require('paypal-rest-sdk');

function PayPalPayment() {
  useEffect(() => {
    paypal.configure({
      mode: 'sandbox', // Use 'live' for production
      client_id: config.clientId,
      client_secret: config.clientSecret,
    });
  }, []);

  const createPayment = () => {
    // Create a PayPal payment request here
    const payment = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      // Add details about the purchase (e.g., amount, currency, description)
      transactions: [
        {
          amount: {
            total: '10.00', // Total amount
            currency: 'USD', // Currency code
          },
          description: 'Sample purchase',
        },
      ],
      // Redirect URLs after payment approval or cancellation
      redirect_urls: {
        return_url: 'http://your-website.com/success', // Replace with your success URL
        cancel_url: 'http://your-website.com/cancel', // Replace with your cancel URL
      },
    };

    // Create the PayPal payment
    paypal.payment.create(payment, (error, payment) => {
      if (error) {
        throw error;
      } else {
        // Redirect to PayPal for payment
        window.location.href = payment.links[1].href;
      }
    });
  };

  return (
    <div>
      <button onClick={createPayment}>Pay with PayPal</button>
    </div>
  );
}

export default PayPalPayment;
