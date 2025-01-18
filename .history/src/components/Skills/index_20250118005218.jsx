import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const SkillCard = ({ icon, skill, percentage, color }) => {
    return (
      <div className="skill-card">
        <div className="progress" style={{ borderColor: color }}>
          <div
            className="progress-circle"
            style={{
              background: `conic-gradient(${color} ${percentage}%, #333 ${percentage}%)`,
            }}
          >
            <span>{percentage}%</span>
          </div>
        </div>
        <h3>{skill}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas.</p>
      </div>
    );
};
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
                    {skillsData.map((data, index) => (
                        <SkillCard
                            key={index}
                            icon={data.icon}
                            skill={data.skill}
                            percentage={data.percentage}
                            color={data.color}
                        />
                    ))}
                </div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Skills;