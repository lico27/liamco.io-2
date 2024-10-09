import React from 'react'
import { 
  FaGithub, 
  FaEnvelope, 
  FaLinkedin 
} from 'react-icons/fa';
import { FaThreads } from 'react-icons/fa6';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className='w-100 flex text-center py-5'>
        <h1 className='mb-4 text-capitalize text-general'>Contact</h1>
        <p className='mb-2 text-general'>You can reach me here:</p>
        <p>
          <a href='https://github.com/lico27' target='_blank'><FaGithub className='contact-icons m-3'/></a>
          <a href='mailto:liam@liamco.io' target='_blank'><FaEnvelope className='contact-icons m-3'/></a>
          <a href='https://www.linkedin.com/in/liam-cottrell-a1837272/' target='_blank'><FaLinkedin className='contact-icons m-3'/></a>
          <a href='https://www.threads.net/@__lico27' target='_blank'><FaThreads className='contact-icons m-3'/></a>
        </p>
        <ContactForm />
    </div>
  )
}

export default Contact