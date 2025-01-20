import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

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
        { title: "Project 1", description: "Lorem ipsum dolor sit.", icon: "logo-react", bg: "../../assets/images/project1.jpg" },
        { title: "Project 2", description: "Lorem ipsum dolor sit.", icon: "logo-nodejs", bg: "../../assets/images/project2.jpg" },
        { title: "Project 3", description: "Lorem ipsum dolor sit.", icon: "logo-nodejs", bg: "../../assets/images/banner-bg.png" },
        { title: "Project 4", description: "Lorem ipsum dolor sit.", icon: "logo-python", bg: "../../assets/images/banner-bg.png" },
        { title: "Project 5", description: "Lorem ipsum dolor sit.", icon: "person-outline", bg: "../../assets/images/banner-bg.png" },
    ];
    const handleCardClick = (index) => {
        setActiveCard(index);
    };
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
                <p>This is a list of my current and previous projects of work. Use the menu below to see project titles and their statuses.</p>
                <div className="menu">
                    <div className="cards">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className={`card ${activeCard === index ? "active" : ""}`}
                                onClick={() => handleCardClick(index)}
                                style={{ "--bg": `url(${project.bg})` }}
                            >
                                <div className="shadow"></div>
                                <div className="label">
                                    <div className="icon" style={{ "--color": "white" }}>
                                        <ion-icon name={project.icon}></ion-icon>
                                    </div>
                                    <div className="info">
                                        <div className="title">{project.title}</div>
                                        <div>{project.description}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;