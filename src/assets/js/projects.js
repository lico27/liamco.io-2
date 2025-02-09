import pawesomeImage from '../img/pawesome.png';
import travellerImage from '../img/traveller1.png';
import simpsonsImage from '../img/simpsons.jpg';
import { 
    FaCss3Alt,
    FaHtml5,
    FaReact, 
    FaBootstrap,
    FaNodeJs,
    FaNpm,
    FaRProject,
} from "react-icons/fa";
import {
    SiJavascript,
    SiTidyverse,
    SiKaggle
} from "react-icons/si";

export const projects = [
    {
        title: 'Worst. Analysis. Ever.',
        description: 'An exploration of Simpsons episodes in R',
        credit: 'https://analyticsindiamag.com/ai-features/understanding-simpsons-paradox-and-its-impact-on-data-analytics/',
        url: '/blogs/simpsons.html',
        status: 'Complete',
        img: simpsonsImage,
        subtitle: 'TidyTuesdays Project #1 - Feb 2025',
        icons: [FaRProject, SiTidyverse, SiKaggle],
        type: 'Data Analysis',
    },
    {
        title: 'Pawesome Pets',
        description: 'A resource to help prospective cat and dog owners choose a breed, learn facts, and pick a name for their furry friend',
        url: 'https://main--sunny-semifreddo-f70c5b.netlify.app/#',
        status: 'Complete',
        img: pawesomeImage,
        subtitle: 'Bootcamp Project #2 - Feb 2024',
        icons: [FaCss3Alt, FaHtml5, SiJavascript, FaReact, FaBootstrap, FaNodeJs, FaNpm],
        type: 'Web Development',
    },
    {
        title: 'travel.ler',
        description: 'A dynamic travel dashboard for visitors to the UK, providing relevant data like weather, currency and news',
        url: 'https://lico27.github.io/travelLER/',
        status: 'Complete',
        img: travellerImage,
        subtitle: 'Bootcamp Project #1 - Dec 2023',
        icons: [FaCss3Alt, FaHtml5, SiJavascript, FaBootstrap],
        type: 'Web Development',
    }
]

