import lindaImage from '../img/linda1.png';
import pawesomeImage from '../img/pawesome.png';
import travellerImage from '../img/traveller1.png';
import wordlemImage from '../img/wordlem1.png';
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
    SiJavascript,
    SiJquery,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const projects = [
    {
        title: 'travel.ler',
        description: 'A dynamic travel dashboard for visitors to the UK, providing relevant data like weather, currency and news',
        url: 'https://lico27.github.io/travelLER/',
        status: 'Complete',
        img: travellerImage,
        type: 'Bootcamp Capstone Project #1',
        icons: [FaCss3Alt, FaHtml5, SiJavascript, FaBootstrap]
    },
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
        description: 'The Linda Cardellini Fanlisting - a project to practice PHP and MySQL ... and relive my youth',
        url: 'https://liamco.io/linda/',
        status: 'Complete',
        img: lindaImage,
        type: 'Personal project',
        icons: [FaCss3Alt, FaHtml5, FaMdb, SiPhp, GrMysql]
    },
    {
        title: 'Wordlem',
        description: 'Building a Wordle clone to practice my JavaScript skills',
        url: 'https://github.com/lico27/wordlem',
        status: 'In Progress',
        img: wordlemImage,
        type: 'Personal project',
        icons: [FaCss3Alt, FaHtml5, SiJavascript, FaMdb, SiJquery]
    }
]

