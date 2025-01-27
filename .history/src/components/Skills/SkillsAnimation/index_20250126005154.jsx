import IconCloud from "../ui/icon-cloud";

const slugs = [
    "typescript",
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
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];
const SkillsAnimation = () => {
    return (
        <>
            <div className={`container mx-auto px-8 md:px-10 lg:px-20 xl:px-32`}>
                <div className="relative flex size-full items-center justify-center overflow-hidden px-20 pb-20 pt-2">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
        </>
    );
};