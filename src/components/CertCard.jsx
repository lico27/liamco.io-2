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
          <p className='cert-url'>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
            </a>
          </p>
        </Card.Subtitle>
        <Card.Text>
          <p>
            {props.icon && <props.icon style={{fontSize: '1.75rem'}}/>}
          </p>
          <p className='cert-status'>
            {props.status}
          </p>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CertCard;