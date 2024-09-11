import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { 
  FaReact, 
  FaBootstrap, 
  FaCss3Alt, 
  FaNodeJs, 
  FaHtml5 
} from "react-icons/fa";
import { SiVite } from "react-icons/si";

const currentDate = new Date();
const year = currentDate.getFullYear();

const Footer = () => {
  return (
    <div className='footer w-100 mt-4 text-center'>
        <p className='mb-1'>Made by Liam Cottrell © {year}</p>
        <p className='mb-1'>
          <FaReact className='fs-3 mx-1'/>
          <FaBootstrap  className='fs-3 mx-1'/>
          <FaHtml5 className='fs-3 mx-1'/>
          <FaCss3Alt className='fs-3 mx-1'/>
          <FaNodeJs className='fs-3 mx-1'/>
          <SiVite className='fs-3 mx-1'/>
        </p>
    </div>
  )
}

export default Footer