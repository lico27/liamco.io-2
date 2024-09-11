import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CertCard() {
  return (
    <Card 
    bg='dark' 
    border='light' 
    text='light' 
    style={{ width: '14rem' }}
    >
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>Icon</Card.Text>
        <Button variant="dark btn-sm" class='btn btn-sm'>Certificate</Button>
      </Card.Body>
    </Card>
  );
}

export default CertCard;