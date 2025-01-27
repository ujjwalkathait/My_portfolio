import IconCloud from "../../../ui/icon-cloud";
import React from "react";
// import './index.scss'

const slugs = [
    "cplusplus",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    ",
    "mysql",
    "oracle",
    "firebase",
    "vercel",
    "docker",
    "git",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio", 
    "figma",
  ];
const SkillsAnimation = () => {
    return (
        <>
            <div className='container  mx-auto px-8 md:px-10 lg:px-20 xl:px-32 w-1/2 right-0 '>
                <div className="relative flex size-full items-center justify-center overflow-hidden px-20 pb-20 pt-2">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </>
    );
};
export default SkillsAnimation;