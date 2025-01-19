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
                <div className="menu">
                    <div className="cards">

                        <div className="card-active" style="--bg: url(../../assets/images/banner-bg.png)">
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="icon" style="--color: white">
                                    <ion-icon name="logo-react"></ion-icon>
                                </div>
                                <div className="info">
                                    <div className="title">Project 1</div>
                                    <div>Lorem ipsum dolor sit.</div>
                                </div>
                            </div>
                        </div>
$(".card")
                        <div className="card" style="--bg: url(../../assets/images/banner-bg.png">
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="icon">
                                    <ion-icon name="logo-nodejs" style="--color: white"></ion-icon>
                                </div>
                                <div className="info">
                                    <div className="title">Project 2</div>
                                    <div>Lorem ipsum dolor sit.</div>
                                </div>
                            </div>
                        </div>

                        <div className="card" style="--bg: url(../../assets/images/banner-bg.png">
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="icon" style="--color: white">
                                    <ion-icon name="logo-nodejs"></ion-icon>
                                </div>
                                <div className="info">
                                    <div className="title">Project 3</div>
                                    <div>Lorem ipsum dolor sit.</div>
                                </div>
                            </div>
                        </div>

                        <div className="card" style="--bg: url(../../assets/images/banner-bg.png">
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="icon" style="--color: white">
                                    <ion-icon name="logo-python"></ion-icon>
                                </div>
                                <div className="info">
                                    <div className="title">Project 4</div>
                                    <div>Lorem ipsum dolor sit.</div>
                                </div>
                            </div>
                        </div>

                        <div className="card" style="--bg: url(../../assets/images/banner-bg.png">
                            <div className="shadow"></div>
                            <div className="label">
                                <div className="icon" style="--color: white">
                                    <ion-icon name="person-outline"></ion-icon>
                                </div>
                                <div className="info">
                                    <div className="title">Project 5</div>
                                    <div>Lorem ipsum dolor sit.</div>
                                </div>
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