import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Skills = () => { 
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
                        idx={15}
                    />
                </h1>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Skills;