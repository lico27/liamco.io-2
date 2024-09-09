import React from 'react';
import { FaReact } from "react-icons/fa";

const currentDate = new Date();
const year = currentDate.getFullYear();

const Footer = () => {
  return (
    <footer>
        <p>Made by Liam Cottrell © {year}.</p>
        <p><FaReact size={26}/></p>

    </footer>
  )
}

export default Footer