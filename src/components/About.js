import React from 'react';
import '../styles/About.css';
// import aboutImage from '../assets/about-image.jpg'; // Path to your background image
import slide3 from '../images/slide3.jpg'; // Adjust the path if necessary

const About = () => {
  return (
    <div className="about-container">
      <img className="d-block w-100" src={slide3} alt="Second slide" />
      <div className="about-content">
        <h2 className="about-title">About Us</h2>
        <p className="about-description">
          We are a premium interior design company dedicated to creating stunning spaces that reflect your personality and style.
        </p>
        <p className="about-description">
          Our team of experienced designers collaborates closely with clients, transforming visions into reality with meticulous attention to detail.
        </p>
        <p className="about-mission">
          Our mission is to elevate your living experience by providing personalized design solutions tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default About;
