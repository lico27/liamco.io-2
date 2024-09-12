import Card from 'react-bootstrap/Card';
import { SiCodecademy } from "react-icons/si";

function CertCard() {
  return (
    <Card 
    bg='dark' 
    border='light' 
    text='light' 
    style={{ width: '14rem' }}
    >
      <Card.Body>
        <Card.Subtitle className='m-1'>
            <SiCodecademy size={26}/>
        </Card.Subtitle>
        <Card.Text>Learn SQL</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CertCard;