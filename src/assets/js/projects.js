import lindaImage from '../img/linda1.png';
import { 
    FaCss3Alt,
    FaHtml5,
} from "react-icons/fa";
import {
    SiPhp,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const projects = [
    {
        title: 'Pretty Goldfinches',
        description: 'A project to practice PHP and MySQL...and relive my youth',
        url: 'https://liamco.io/linda/',
        status: 'Complete',
        img: lindaImage,
        type: 'Web design',
        icons: [FaCss3Alt, FaHtml5, SiPhp, GrMysql]
    }
]

