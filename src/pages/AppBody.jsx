import React from 'react'
import GreetingTemp from '../components/GreetingTemp'
import Certs from '../pages/Certs'
import About from './About'
import Projects from './Projects'

const AppBody = () => {
  return (
    <div className='app-body mb-5'>
        <GreetingTemp />
        {/* <Certs /> */}
        {/* <About /> */}
        {/* <Projects /> */}
    </div>
  )
}

export default AppBody