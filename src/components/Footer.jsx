import React from 'react';
import { FaReact } from "react-icons/fa";

const currentDate = new Date();
const year = currentDate.getFullYear();

const Footer = () => {
  return (
    <div>
        <p>Made by Liam Cottrell © {year}.</p>
        <p><FaReact size={26}/></p>

    </div>
  )
}

export default Footer