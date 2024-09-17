import Card from 'react-bootstrap/Card';

function CertCard(props) {
  return (
    <Card 
    bg='dark' 
    border='light' 
    text='light' 
    style={{ width: '14rem' }}
    >
      <Card.Body style={{ paddingBottom: '1.25rem' }}>
        <Card.Subtitle className='m-1'>
          <p className='m-0 cert-url'>
            <a href={props.url} target="_blank" rel="noopener noreferrer">
            {props.title}
            </a>
          </p>
        </Card.Subtitle>
        <Card.Text>
          <p className='mt-2 mb-0'>
            {props.icon && <props.icon style={{fontSize: '1.75rem'}}/>}</p>
          
        </Card.Text>
       
      </Card.Body>
    </Card>
  );
}

export default CertCard;