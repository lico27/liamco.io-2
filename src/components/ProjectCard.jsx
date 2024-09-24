import React from 'react'
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card 
    bg='dark' 
    border='dark' 
    text='light' 
    style={{ width: '18rem' }}
    >
      <Card.Img variant="top" src="src/assets/img/linda1.png" />
      <Card.Body className='cert-body'>
        <Card.Title className='mt-1 cert-sub'>
          <span className='cert-url'>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
            </a>
          </span>
        </Card.Title>
        <Card.Subtitle className='m-0 project-desc'>
        {props.description}
        </Card.Subtitle>
        <Card.Text className='cert-status mt-2'>
            {props.status}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard