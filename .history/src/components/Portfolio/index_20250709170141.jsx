import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import project1 from '../../assets/images/OS2.png';
import project2 from '../../assets/images/OS2.png';
import project3 from '../../assets/images/OS2.png';
import project4 from '../../assets/images/OS2.png';
import project5 from '../../assets/images/OS2.png';
import AppCard from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [activeCard, setActiveCard] = useState(0);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);
    const projects = [
        { title: "Project 1", description: "Lorem ipsum dolor sit.", icon: "logo-react", bg: project1 , github: "https://github.com/ujjwalkathait/Process_Scheduler"},
        { title: "Project 2", description: "Lorem ipsum dolor sit.", icon: "logo-nodejs", bg: project2 , github: "https://github.com/ujjwalkathait/Process_Scheduler"},
        { title: "Project 3", description: "Lorem ipsum dolor sit.", icon: "logo-nodejs", bg: project3 , github: "https://github.com/ujjwalkathait/Process_Scheduler"},
        { title: "Project 4", description: "Lorem ipsum dolor sit.", icon: "logo-python", bg: project4 , github: "https://github.com/ujjwalkathait/Process_Scheduler"},
        { title: "Project 5", description: "Lorem ipsum dolor sit.", icon: "person-outline", bg: project5 , github: "https://github.com/ujjwalkathait/Process_Scheduler"},
    ];
    const handleCardClick = (index) => {
        setActiveCard(index);
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        // autoplaySpeed: 3000,
        // arrows: true,
        // pauseOnHover: true,
    }
    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div className="menu">
                    <Slider {...settings} >
                        {projects.map((project, index) => (
                            
                            <AppCard
                                key={index}
                                imageUrl={project.bg}
                                title={project.title}
                                description={project.description}
                                github={project.github}
                            />
                        ))}

                    </Slider>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;