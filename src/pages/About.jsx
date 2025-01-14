import React from 'react'
import Card from 'react-bootstrap/Card';
import pfpImage from '../assets/img/pfp1.png';


const About = () => {
  return (
<>
    <div className='w-100 flex text-center pt-5'>
      <h1 className='mb-4 text-capitalize text-general'>Hi, I'm Liam</h1>
      <div className='about-container mx-auto col-8 col-md-6 col-lg-4'>
      <Card 
      bg='dark' 
      border='light'
      text='light' 
      className='border-0 px-3'
    >      
      <Card.Body>
        <Card.Title className='mt-2 w-100'>
        <img src={pfpImage} id="pfp" className='mb-3' />
        </Card.Title>
        <Card.Text>
        <p className='text-general'>
            Welcome to my portfolio! I'm an aspiring Data Scientist from the UK, commencing MSc Data Science in January 2025 at <a href="https://www.uwe.ac.uk/" target="_blank">UWE Bristol</a>.
          </p>
        <p className='text-general'>
            I'm also a graduate of edX's Front-End Web Development bootcamp, which taught me fundamental skills including HTML, CSS, JavaScript and React.
          </p>
          <p className='text-general'>
            I'll be using this portfolio to keep track of my projects and learning.
          </p>
          <p className='text-general'>
            Feel free to take a look at my recent projects, and don't hesitate to get in touch! 
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