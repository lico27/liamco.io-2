import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaReact, FaBootstrap, FaCss3Alt, FaNodeJs } from "react-icons/fa";

const currentDate = new Date();
const year = currentDate.getFullYear();

const Footer = () => {
  return (
    <div className='footer w-100 mt-4 text-center'>
        <p className='mb-1'>Made by Liam Cottrell © {year}</p>
        <p className='mb-1'>
          <FaReact className='fs-3 mx-1'/>
          <FaBootstrap  className='fs-3 mx-1'/>
          <FaCss3Alt className='fs-3 mx-1'/>
          <FaNodeJs className='fs-3 mx-1'/>
        </p>
        <p>
          Theme: <a href="https://bootswatch.com/" target="_blank">Bootswatch</a>
          </p>
    </div>
  )
}

export default Footer