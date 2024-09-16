import React from 'react'
import CertCard from '../components/CertCard'
import { certs } from '../assets/certs'

const Certs = () => {
  return (
    <>
        <div className='w-100 flex text-center py-5'>
            <h1 className='m-0 text-capitalize'>Certifications</h1> 
        </div>
        <div className='cert-container text-center'>
          {certs.map((cert, index) => {
            return <CertCard 
            key={index} 
            name={cert.name}
            icon={cert.icon} 
            title={cert.title}/>
          })}






            {/* <CertCard 
            name={certs[0].name}
            icon={certs[0].icon}
            />
            <CertCard 
            name={certs[1].name}
            icon={certs[1].icon}
            />
            <CertCard 
            name={certs[2].name}
            icon={certs[2].icon}
            /> */}
        </div>

    </>
  )
}

export default Certs