import lindaImage from '../img/linda1.png';
import pawesomeImage from '../img/pawesome.png';
import { 
    FaCss3Alt,
    FaHtml5,
    FaMdb,
    FaReact, 
    FaBootstrap,
    FaNodeJs,
    FaNpm,
} from "react-icons/fa";
import {
    SiPhp,
    SiJavascript
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const projects = [
    {
        title: 'Pawesome Pets',
        description: 'A resource to help prospective cat and dog owners choose a breed, learn facts, and pick a name for their furry friend',
        url: 'https://main--sunny-semifreddo-f70c5b.netlify.app/#',
        status: 'Complete',
        img: pawesomeImage,
        type: 'Bootcamp Capstone Project #2',
        icons: [FaCss3Alt, FaHtml5, SiJavascript, FaReact, FaBootstrap, FaNodeJs, FaNpm]
    },
    {
        title: 'Pretty Goldfinches',
        description: 'The Linda Cardellini Fanlisting - a project to practice PHP and MySQL...and relive my youth',
        url: 'https://liamco.io/linda/',
        status: 'Complete',
        img: lindaImage,
        type: 'Personal project',
        icons: [FaCss3Alt, FaHtml5, FaMdb, SiPhp, GrMysql]
    }
]

