import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { FaReact } from "react-icons/fa";

const currentDate = new Date();
const year = currentDate.getFullYear();

const Footer = () => {
  return (
    <div className='footer w-100 mt-4 text-center'>
        <p className='m-1'>Made by Liam Cottrell © {year}</p>
        <p>
          <FaReact size={26}/>
          
          
        </p>

    </div>
  )
}

export default Footer