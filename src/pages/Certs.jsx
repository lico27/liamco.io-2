import React from 'react'
import CertCard from '../components/CertCard'
import { certs } from '../assets/js/certs'
import bootcampImg from '../assets/img/bootcamp.png'

const Certs = () => {
  return (
    <>
        <div className='w-100 flex text-center py-5'>
            <h1 className='mb-1 text-capitalize'>Certifications</h1> 
            <a href='https://skillsbootcamp.credential.getsmarter.com/a68acf69-9671-43c1-a686-663569d7a475#gs.gf2vfa' target='_blank'><img src={bootcampImg} className='mt-2' /></a>
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