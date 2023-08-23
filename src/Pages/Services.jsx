import React, { useState } from 'react';
import Data from '../Data.json'
const Services = () => {
 
  const [activeTab, setActiveTab] = useState('Informationtechnology');

  const filteredData = Data.filter(item => item.service_type === activeTab);

  return (
    <div className="container "> 
    <h1>Services</h1>

    <ul className="nav nav-tabs" id="myTabs">
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 'Informationtechnology' ? 'active' : ''}`}
          style={{ backgroundColor: activeTab === 'Informationtechnology' ? '#ffc451' : '' }} 
          onClick={() => setActiveTab('Informationtechnology')}
        >
          Information Technology
        </a>
      </li>
      <li className="nav-item">
        <a
          className={`nav-link ${activeTab === 'civil' ? 'active' : ''}`}
          style={{ backgroundColor: activeTab === 'civil' ? '#ffc451' : '' }} 
          onClick={() => setActiveTab('civil')}
        >
           CIVIL TECHANOLOGY
        </a>
      </li>
    </ul>

    <div className="tab-content">
      <div
        className={`tab-pane fade ${activeTab === 'Informationtechnology' ? 'show active' : ''}`}
        id="it-tab"
      >
        <ul>
          {filteredData.map(service => (
            <li key={service.id}>{service.service_name}</li>
          ))}
        </ul>
      </div>
      <div className={`tab-pane fade ${activeTab === 'civil' ? 'show active' : ''}`} id="civil-tab">
        <ul>
          {filteredData.map(service => (
            <li key={service.id}>{service.service_name}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
  );
};

export default Services;
