import React from 'react'
import Card from 'react-bootstrap/Card';

function CertCard(props) {
  return (
    <Card 
    bg='dark' 
    border='light' 
    text='light' 
    style={{ width: '14rem', height: '10rem' }}
    >
      <Card.Body className='cert-body'>
        <Card.Title className='mt-1 cert-sub'>
          <span className='cert-url'>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
            </a>
          </span>
        </Card.Title>
        <Card.Subtitle className='m-0'>
        {props.icon && <props.icon style={{fontSize: '1.75rem'}}/>}
        </Card.Subtitle>
        <Card.Text className='cert-status mt-2'>
            {props.status}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CertCard;

