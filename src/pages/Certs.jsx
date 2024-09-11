import React from 'react'
import CertCard from '../components/CertCard'

const Certs = () => {
  return (
    <>
        <div className='w-100 flex text-center py-5'>
            <h1 className='m-0 text-capitalize'>Certifications</h1> 
        </div>
        <div className='cert-container text-center'>
            <CertCard />
        </div>

    </>
  )
}

export default Certs