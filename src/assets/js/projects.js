import pawesomeImage from '../img/pawesome.png';
import travellerImage from '../img/traveller1.png';
import { 
    FaCss3Alt,
    FaHtml5,
    FaReact, 
    FaBootstrap,
    FaNodeJs,
    FaNpm,
} from "react-icons/fa";
import {
    SiJavascript,
} from "react-icons/si";

export const projects = [
    {
        title: 'travel.ler',
        description: 'A dynamic travel dashboard for visitors to the UK, providing relevant data like weather, currency and news',
        url: 'https://lico27.github.io/travelLER/',
        status: 'Complete',
        img: travellerImage,
        subtitle: 'Bootcamp Capstone Project #1',
        icons: [FaCss3Alt, FaHtml5, SiJavascript, FaBootstrap],
        type: 'Web Development',
    },
    {
        title: 'Pawesome Pets',
        description: 'A resource to help prospective cat and dog owners choose a breed, learn facts, and pick a name for their furry friend',
        url: 'https://main--sunny-semifreddo-f70c5b.netlify.app/#',
        status: 'Complete',
        img: pawesomeImage,
        subtitle: 'Bootcamp Capstone Project #2',
        icons: [FaCss3Alt, FaHtml5, SiJavascript, FaReact, FaBootstrap, FaNodeJs, FaNpm],
        type: 'Web Development',
    }
]

