import React from 'react'
import Card from 'react-bootstrap/Card';

const About = () => {
  return (
<>
    <div className='w-100 flex text-center pt-5'>
      <h1 className='mb-4 text-capitalize text-general'>Hi, I'm Liam</h1>
      <div className='about-container mx-auto col-10 col-md-6 col-lg-4'>
      <Card 
      bg='dark' 
      border='light'
      text='light' 
      className='border-0'
    >      
      <Card.Body>
        <Card.Title className='mt-1 w-100'>
        <img src="src/assets/img/pfp1.png" id="pfp" className='mb-4 '/>
        </Card.Title>
        <Card.Text>
        <p className='text-general'>
                    Welcome to my portfolio! I'm an aspiring Data Scientist from the UK. 
                    I'm a graduate of edX's Front-End Web Development bootcamp, which taught me fundamental skills including HTML, CSS, JavaScript and React.
                    And I just completed a 12-week front-end internship at <a href="https://socialwebstrategy.com/" target="_blank">Social Web Strategy</a>. <br />
                    Feel free to take a look at my recent projects below, and don't hesitate to get in touch! 
                  </p>
        </Card.Text>
      </Card.Body>
    </Card>
        
              
      </div>
      </div>
</>
  )
}

export default About