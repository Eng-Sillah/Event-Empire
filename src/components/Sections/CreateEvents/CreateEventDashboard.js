import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; 
import './CreateEventDashboard.css';
import BasicInfo from './BasicInfo'; // Import your category components
import Details from './Details';
import Ticket from './Ticket';
import Publish from './Publish';
import Dashboard from './Dashboard';

function CreateEventDashboard() {
  // Correct the usage of useLocation
  const location = useLocation();
  const { formData } = location.state || {};

  const [selectedCategory, setSelectedCategory] = useState('basic'); // Initialize the selected category

  const [isSidebarVisible, setSidebarVisible] = useState(false); // Manage sidebar visibility

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleCategoryClick = (category) => {
    setSidebarVisible(false); // Close the sidebar when a category is clicked
    setSelectedCategory(category);
  };

  // Define content for different categories
  const categoryComponents = {
    basic: <BasicInfo formData={formData} />,
    detail: <Details formData={formData} />,
    ticket: <Ticket formData={formData} />,
    publish: <Publish formData={formData} />,
    dashboard: <Dashboard formData={formData} />,
  };

  return (
    <div className="create-event-dashboard">
      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
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
        
        {/* Other sidebar items */}
      </div>
      <div className="main-content">
      <button className="sidebar-toggle" onClick={handleToggleSidebar}>
          &gt; {/* Greater than sign for the toggle button */}
        </button>
      {categoryComponents[selectedCategory]}
      </div>
    </div>
  );
}

export default CreateEventDashboard;
