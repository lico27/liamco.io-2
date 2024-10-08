import React from 'react'
import CertCard from '../components/CertCard'
import { certs } from '../assets/js/certs'

const Certs = () => {
  return (
    <>
        <div className='w-100 flex text-center py-5'>
            <h1 className='m-0 text-capitalize'>Certifications</h1> 
        </div>
        <div className='card-container text-center px-1 px-md-3 px-lg-5 px-xl-6'>
          {certs.map((cert, index) => {
            return <CertCard 
            key={index} 
            icon={cert.icon} 
            title={cert.title}
            url={cert.url}
            status={cert.status}
            />
          })}
        </div>

    </>
  )
} 

export default Certs