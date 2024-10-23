import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../styles/Home.css';
import slide1 from '../images/slide1.jpg'; // Adjust the path if necessary
import slide2 from '../images/slide2.jpg'; // Adjust the path if necessary

const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={slide1} alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to Our Interior Design Company</h3>
            <p>Transforming spaces with elegance and style.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={slide2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Innovative Designs</h3>
            <p>Crafting bespoke interiors tailored to your needs.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div className="slogan-section">
        <h1>We Design Your Dreams</h1>
        <h3>by- Sahil Yadav </h3>
      </div>
    </div>
  );
};

export default Home;
