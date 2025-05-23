import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover');
        }, 3000);

    });

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
                <div className="cards">
                    <div className="card-active">
                        <div className="shadow"></div>
                        <div className="label">
                            <div className="icon">

                            </div>
                            <div className="info">
                                <div className="title"></div>
                                <div>Project 1</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;