import React from 'react';
import '../styles/Services.css'; // Import the CSS file

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <ul className="services-list">
        <li className="services-item">Residential Interior Design</li>
        <li className="services-item">Commercial Interior Design</li>
        <li className="services-item">Space Planning</li>
        <li className="services-item">Furniture Selection</li>
        <li className="services-item">Color Consultation</li>
      </ul>
    </div>
  );
};

export default Services;
