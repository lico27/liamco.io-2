import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card 
      bg='dark' 
      border='dark'
      text='light' 
      style={{ width: '22rem' }}
    >
      <Card.Img variant="top" src={props.img} className='card-img-top'/>
      <Card.Body className='cert-body'>
        <Card.Title className='mt-1 cert-sub'>
          <span className='cert-url project-url'>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              {props.title}  ||  {props.type}
            </a>           
          </span>
          <br/><br/>
          <span>{props.subtitle}</span>
        </Card.Title>
        <Card.Subtitle className='m-0 project-desc'>
          {props.description}
        </Card.Subtitle>
        <Card.Text className='cert-status mt-2'>
          {props.status}<br/>
          <span className="icon-container">
            {props.icons && props.icons.map((IconComponent, index) => (
              <span key={index} className="fs-3 mx-1">
                <IconComponent />
              </span>
            ))}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
