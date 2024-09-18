import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GreetingTemp from '../components/GreetingTemp'
import About from './About'
import Certs from '../pages/Certs'
import Projects from './Projects'
import Blog from './Blog'
import Contact from './Contact'

const AppBody = () => {
  return (
    <div className='app-body mb-5'>
        <Router>
          <Routes>
            <Route path='/' element={<GreetingTemp />} />
            {/* <Route path='/about' element={<About />} /> */}
            <Route path='/certs' element={<Certs />} />            
            <Route path='/projects' element={<Projects />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
    </div>
  )
}

export default AppBody