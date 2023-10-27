import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import './EventCreatorWorkspace.css';

const EventCreatorWorkspace = ({ formData }) => {
  return (
    <div>
      <h2>Event Creator Workspace</h2>
      <Tabs>
        <TabList>
          <Tab>Events</Tab>
          <Tab>Collections</Tab>
        </TabList>

        <TabPanel>
          <h3>Events Tab</h3>
          <div className="events-header">
            <input type="text" placeholder="Search Event" />
            <button>Show Events</button>
            <button>Calendar</button>
            <button>Draft</button>
          </div>
          <table className="events-table">
            <thead>
              <tr>
                <th>Event</th>
                <th></th>
                <th></th>
                <th>Sold</th>
                <th>Gross</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{formData.eventDate.start}</td>
                <td>
                  <img
                    src={formData.eventBanner}
                    alt=""
                    width="50"
                    height="50"
                  />
                </td>
                <td>                  <div>
                  <span>{formData.title}</span> <br />
                <span>{formData.eventVenue}</span><br />
                <span>{formData.eventDate.start}</span>
                  </div></td>
                <td>0/0</td>
                <td>Le0.00</td>
                <td>Draft</td>
                <td>
                  <button>Edit</button>
                </td>
              </tr>

              {/* Add more rows with event data as needed */}
            </tbody>
          </table>
        </TabPanel>

        <TabPanel>
          <h3>Collections Tab</h3>
          {/* Content for the Collections tab */}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default EventCreatorWorkspace;
