import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import project1 from '../images/project1.jpg'; // Adjust the path as necessary
import project2 from '../images/project2.jpg'; // Adjust the path as necessary
import project3 from '../images/project3.jpg'; // Adjust the path as necessary
import project4 from '../images/project4.jpg'; // Adjust the path as necessary
import '../styles/ProjectsGallery.css'; // Ensure you import your CSS

const ProjectsGallery = () => {
  const projects = [
    { id: 1, title: "Living Room", image: project1 },
    { id: 2, title: "Kitchen", image: project2 },
    { id: 3, title: "Office Space", image: project3 },
    { id: 4, title: "Bedroom", image: project4 },
  ];

  return (
    <div className="projects-gallery-container">
      <h2>Projects Gallery</h2>
      <Row>
        {projects.map(project => (
          <Col md={4} key={project.id}>
            <Card className="mb-4">
              <Card.Img className="project-image" variant="top" src={project.image} alt={project.title} />
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Button variant="primary">View Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProjectsGallery;
