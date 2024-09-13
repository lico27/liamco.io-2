import Card from 'react-bootstrap/Card';

function CertCard(props) {
  return (
    <Card 
    bg='dark' 
    border='light' 
    text='light' 
    style={{ width: '14rem' }}
    >
      <Card.Body>
        <Card.Subtitle className='m-1'>
            {props.icon}
        </Card.Subtitle>
        <Card.Text>
          {props.name}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CertCard;