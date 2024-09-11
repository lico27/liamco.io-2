import Card from 'react-bootstrap/Card';
import CardSubtitle from 'react-bootstrap/CardSubtitle'

function CertCard() {
  return (
    <Card 
    bg='dark' 
    border='light' 
    text='light' 
    style={{ width: '14rem' }}
    >
      <Card.Body>
        <Card.Subtitle className='m-1'>Icon</Card.Subtitle>
        <Card.Text>Name of Certification</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CertCard;