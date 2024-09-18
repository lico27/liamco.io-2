import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../assets/css/App.css'
import NavOne from '../components/NavOne'
import AppBody from './AppBody'
import Footer from '../components/Footer'

const App = () => {
  return (
    <>
      <Router>
        <NavOne />
        <AppBody />
        <Footer />
      </Router>
    </>
  )
}

export default App
