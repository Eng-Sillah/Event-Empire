import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; 
import './CreateEventDashboard.css';
import BasicInfo from './BasicInfo';
import Details from './Details';
import Ticket from './Ticket';
import Publish from './Publish';
import Dashboard from './Dashboard';
import EventCreatorWorkspace from './EventCreatorWorkspace';

function CreateEventDashboard(props) {
  const location = useLocation();
  const { formData } = location.state || {};
  
  const [currentFormData, setCurrentFormData] = useState(formData);

  const [selectedCategory, setSelectedCategory] = useState('basic');
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  // const [isEventCreatorVisible, setEventCreatorVisible] = useState(false); // State variable to control the visibility of EventCreatorWorkspace

  const handleToggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const handleCategoryClick = (category) => {
    setSidebarVisible(false);
    setSelectedCategory(category);
  };

  // Define the update function here
  const handleUpdateFormData = (newFormData, switchToCategory = null) => {
    setCurrentFormData((prevData) => ({
      ...prevData,
      ...newFormData,
    }));
  
    if (switchToCategory) {
      handleCategoryClick(switchToCategory);
    }
  };
  
  const handleShowEventCreator = () => {
    // setEventCreatorVisible(true);
    handleCategoryClick('eventWorkspace'); // Switch to the Event Creator Workspace
  };


  
  useEffect(() => {
    // console.log("New Data", currentFormData);
  }, [currentFormData]);

  function handlePublishEvevnt(newEvent) {
    props.updateEvents(newEvent)
  }

  const categoryComponents = {
    basic: <BasicInfo formData={currentFormData} updateFormData={handleUpdateFormData} />,
    detail: <Details formData={currentFormData} updateFormData={handleUpdateFormData} />,
    ticket: <Ticket formData={currentFormData} updateFormData={handleUpdateFormData} onShowEventCreator={handleShowEventCreator} />,
    publish: <Publish formData={currentFormData} updateFormData={handleUpdateFormData} updateEvents={handlePublishEvevnt} />,
    dashboard: <Dashboard formData={currentFormData} />,
    eventWorkspace: <EventCreatorWorkspace formData={currentFormData}/>,
  };
  return (
    <div className="create-event-dashboard">
      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        <h2 className='event-title'>{currentFormData && currentFormData.eventTitle}</h2>
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
        <div className="sidebar-item" onClick={() => handleCategoryClick('eventWorkspace')}>
          Event Workspace
        </div>
      </div>
      <div className="main-content">
        <button className="sidebar-toggle" onClick={handleToggleSidebar}>
          &gt;
        </button>
        {categoryComponents[selectedCategory]}
      </div>
      
    </div>
  );
}

export default CreateEventDashboard;
