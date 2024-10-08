import React from 'react'
import { Route, Routes } from 'react-router-dom';
import About from './About'
import Certs from '../pages/Certs'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'

const AppBody = () => {
  return (
    <div className='app-body mb-5'>
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/certs' element={<Certs />} />            
            <Route path='/projects' element={<Projects />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
    </div>
  )
}

export default AppBody