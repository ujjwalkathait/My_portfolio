import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import AppCard from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projects from '../../data/project';

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

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
                                features={project.features}
                                tech_stack={project.tech_stack}
                                description={project.description}
                                github={project.github}
                                live_demo={project.live_demo}
                                
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