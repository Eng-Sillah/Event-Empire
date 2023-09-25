require('dotenv').config();
const eventbriteClientId = process.env.EVENTBRITE_CLIENT_ID;
const eventbriteClientSecret = process.env.EVENTBRITE_CLIENT_SECRET;


const express = require('express');
const axios = require('axios');
const session = require('express-session');

const app = express();

// Middleware to set up sessions
app.use(
  session({
    secret: eventbriteClientSecret,
    resave: true,
    saveUninitialized: true,
  })
);

// Authorization endpoint
app.get('/auth/eventbrite', (req, res) => {
  const authUrl = `https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=${eventbriteClientId}&redirect_uri=http://localhost:3000/callback`;
  res.redirect(authUrl);
});

// Callback endpoint
app.get('/callback', async (req, res) => {
  const { code } = req.query;

  try {
    const response = await axios.post(
      'https://www.eventbrite.com/oauth/token',
      null,
      {
        params: {
          code,
          client_id: eventbriteClientId,
          client_secret: eventbriteClientSecret,
          grant_type: 'authorization_code',
          redirect_uri: 'http://localhost:3000/callback',
        },
      }
    );

    // Store the access token securely (e.g., in the session)
    req.session.eventbriteAccessToken = response.data.access_token;
    res.send('Authenticated successfully! You can now access Eventbrite data.');
  } catch (error) {
    console.error(error);
    res.status(500).send('Authentication failed.');
  }
});

// Example protected route to fetch Eventbrite data
app.get('/eventbrite/data', async (req, res) => {
  const accessToken = req.session.eventbriteAccessToken;

  if (!accessToken) {
    return res.status(401).send('Unauthorized');
  }

  try {
    const eventbriteResponse = await axios.get(
      'https://www.eventbriteapi.com/v3/users/me/',
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    // Handle Eventbrite data here
    res.json(eventbriteResponse.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to fetch Eventbrite data.');
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
