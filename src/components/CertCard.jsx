import React from 'react'
import Card from 'react-bootstrap/Card';

function CertCard(props) {
  return (
    <Card 
    bg='dark' 
    border='light' 
    text='light' 
    style={{ width: '14rem' }}
    >
      <Card.Body className='cert-body'>
        <Card.Subtitle className='mt-2 cert-sub'>
          <span className='cert-url'>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
            </a>
          </span>
        </Card.Subtitle>
        <Card.Text>
          <span>
            {props.icon && <props.icon style={{fontSize: '1.75rem'}}/>}
          </span>
          <span className='cert-status'>
            {props.status}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CertCard;