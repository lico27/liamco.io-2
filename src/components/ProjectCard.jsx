import React from 'react';
import Card from 'react-bootstrap/Card';

function ProjectCard(props) {
  return (
    <Card 
      bg='dark' 
      border='light'
      text='light' 
      style={{ width: '22rem' }}
    >
      <div style={{ position: 'relative' }}>
        <Card.Img variant="top" src={props.img} className='card-img-top'/>
        <span style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          color: 'white',
          background: 'rgba(0, 0, 0, 0.5)',
          padding: '5px 10px',
          borderRadius: '5px',
        }}>
          {props.type}
        </span>
      </div>
      
      <Card.Body className='card-body'>
        <Card.Title className='mt-1 w-100'>
          <span className='card-url project-url'>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              {props.title}  <br/>
            </a>           
          </span>
          <hr />
          <span className="project-sub">{props.subtitle}</span>
        </Card.Title>
        <Card.Subtitle className='m-0 project-desc'>
          {props.description}
        </Card.Subtitle>
        <Card.Text className='card-status mt-2'>
          {props.status}<br/><br/>
          <span className="icon-container">
            {props.icons && props.icons.map((IconComponent, index) => (
              <span key={index} className="fs-3 mx-1">
                <IconComponent />
                <span className='url-sm'>
                <a href={props.credit} target="_blank" rel="noopener noreferrer">Image credit</a>
                </span>
              </span>         
            ))}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
