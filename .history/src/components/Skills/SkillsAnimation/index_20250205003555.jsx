import IconCloud from "../../../ui/icon-cloud";
import React from "react";
import './index.scss';

const slugs = [
    "cplusplus",
    "javascript",
    ""
    "dart",
    "openjdk",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "tensorflow",
    "mysql",
    "sqlite",
    "firebase",
    "vercel",
    "git",
    "github",
    "gitlab",
    "vscode",
    "androidstudio", 
    "figma",
  ];
const SkillsAnimation = () => {
    return (
        <>
            <div className='skill-box'>
                <div className="relative flex size-full items-center justify-center overflow-hidden px-20 pb-20 pt-2">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </>
    );
};
export default SkillsAnimation;