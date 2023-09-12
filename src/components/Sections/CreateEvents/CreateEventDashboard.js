import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import "./CreateEventDashboard.css";
import BasicInfo from './BasicInfo'; // Import your category components
import Details from './Details';
import Ticket from './Ticket';
import Publish from './Publish';
import Dashboard from './Dashboard';

function CreateEventDashboard() {
    // Correct the usage of useLocation
    const location = useLocation();
    const { formData } = location.state || {};

  const [selectedCategory, setSelectedCategory] = useState('basic'); // Initial category is 'basic'

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  // Define content for different categories
  const categoryComponents = {
    basic: <BasicInfo formData={formData} />, // Step 3: Pass formData as props
    detail: <Details formData={formData} />,
    ticket: <Ticket formData={formData} />,
    publish: <Publish formData={formData} />,
    dashboard: <Dashboard formData={formData} />,
  };

  console.log(formData)
  return (
    <div className="create-event-dashboard">
      <div className="sidebar">
      <h2 className='event-title'>{formData && formData.title}</h2> 
      <hr />
        <div className="sidebar-item" onClick={() => handleCategoryClick('basic')}>
          Basic Info
        </div>
        <div className="sidebar-item" onClick={() => handleCategoryClick('detail')}>
          Details
        </div>
        <div className="sidebar-item" onClick={() => handleCategoryClick('ticket')}>
          Ticket
        </div>
        <div className="sidebar-item" onClick={() => handleCategoryClick('publish')}>
          Publish
        </div>
        <div className="sidebar-item" onClick={() => handleCategoryClick('dashboard')}>
          Dashboard
        </div>
        <div className="sidebar-item" onClick={() => handleCategoryClick('dashboard')}>
          Order Options
        </div>
        <div className="sidebar-item" onClick={() => handleCategoryClick('dashboard')}>
          Marketing
        </div>
        <div className="sidebar-item" onClick={() => handleCategoryClick('dashboard')}>
          Settings
        </div>
      </div>
      <div className="main-content">
        {categoryComponents[selectedCategory]}
      </div>
    </div>
  );
}

export default CreateEventDashboard;
