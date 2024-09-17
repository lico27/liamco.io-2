import React from 'react'
import CertCard from '../components/CertCard'
import { completeCerts, inProgressCerts } from '../assets/certs'

const Certs = () => {
  return (
    <>
        <div className='w-100 flex text-center py-5'>
            <h1 className='m-0 text-capitalize'>Certifications</h1> 
        </div>
        <div className='cert-container text-center'>
          {completeCerts.map((cert, index) => {
            return <CertCard 
            key={index} 
            icon={cert.icon} 
            title={cert.title}
            url={cert.url}/>
          })}
        </div>

    </>
  )
}

export default Certs