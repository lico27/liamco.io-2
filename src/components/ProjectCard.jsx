import React from 'react'
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card 
    bg='dark' 
    border='light' 
    text='light' 
    style={{ width: '14rem' }}
    >
      <Card.Body className='cert-body'>
        <Card.Subtitle className='mt-2 cert-sub'>
          <p className='cert-url'>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
            </a>
          </p>
        </Card.Subtitle>
        <Card.Text>
          <p>
            Text
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard