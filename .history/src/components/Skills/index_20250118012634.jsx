import React, { useEffect, useState , useRef ,  } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Skills = () => { 
    const skillsData = [
        { skill: "HTML", percentage: 98, color: "#FF4C4C" },
        { skill: "CSS", percentage: 98, color: "#4C94FF" },
        { skill: "JavaScript", percentage: 98, color: "#FFD700" },
        { skill: "Node.js", percentage: 98, color: "#4CFF4C" },
        { skill: "React", percentage: 98, color: "#4CBFFF" },
    ];
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
    }, 3000);

    });
    return (
        <>
            <div className="container skills-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Skills".split("")}
                        idx={14}
                    />
                </h1>
                <div className="skills-container">
                    
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Skills;