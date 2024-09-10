import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaReact, FaBootstrap } from "react-icons/fa";

const currentDate = new Date();
const year = currentDate.getFullYear();

const Footer = () => {
  return (
    <div className='footer w-100 mt-4 text-center'>
        <p className='m-1'>Made by Liam Cottrell © {year}</p>
        <p>
          <FaReact className='fs-3 m-1'/>
          <FaBootstrap  className='fs-3 m-1'/>
          
        </p>

    </div>
  )
}

export default Footer