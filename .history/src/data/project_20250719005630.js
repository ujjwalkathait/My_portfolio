import project1 from '../assets/images/OS.png';
import project2 from '../assets/images/circle.png';
import project3 from '../assets/images/Debugger1.png';
import project4 from '../assets/images/gameTime.png';
import project5 from '../assets/images/qrcode.png';
const projects = [
    {
        title: "Process Scheduler",
        features: "Interactive Scheduling Simulator",
        bg: project1,
        github: "https://github.com/ujjwalkathait/Process_Scheduler",
        description: "An interactive simulator to visualize and compare CPU scheduling algorithms like FCFS, SJN, Priority, and Round Robin. Users can input process data, select algorithms, and observe scheduling in real-time through Gantt charts and process states. Ideal for learning and analyzing CPU scheduling behavior.",
        tech_stack: "React, JavaScript, Backend API, CSS",
        live_demo: "https://process-scheduler-blue.vercel.app/",
        status: "Completed",
        type: "Web Application",
        video_demo: "",
        
    },
    {
        title: "Circle",
        features: "Collaborate with Passion",
        bg: project2,
        github: "https://github.com/ujjwalkathait/social-networking-site",
        description: "",
        tech_stack: "React, TypeScript, Appwrite Cloud, CSS",
        live_demo: "https://social-networking-site-zeta.vercel.app/",
        status: "In Progress",
        type: "Web Application",
        video_demo: "",
    },
    {
        title: "AI-Debugger",
        features: "One Click Debugging",
        bg: project3,
        github: "https://github.com/ujjwalkathait/AI-Asissted_Debugging_tool",
        description: "This project is a debugging simulator that allows users to debug code interactively. It provides a real-time code execution environment where users can set breakpoints, step through code, and inspect variables. The simulator supports multiple debugging modes, enabling users to compare different debugging techniques and understand their effectiveness in identifying and fixing issues.",
        tech_stack: "HTML, CSS, JavaScript, C/C++, LEX, YACC",
        live_demo: "https://github.com/ujjwalkathait/AI-Asissted_Debugging_tool",
        status: "Completed",
        type: "Web Application",
        video_demo: "",
    },
    {
        title: "Game Time",
        features: "Make your Free Time Fun",
        bg: project4,
        github: "https://github.com/ujjwalkathait",
        description: "This project is a game simulation that allows users to play and experience different game scenarios. It provides an interactive interface where users can choose game modes, make strategic decisions, and observe how the game evolves in real-time. The simulator supports various game strategies, enabling users to compare their effectiveness and learn from different gameplay approaches.",
        tech_stack: "Flutter, Dart, Flame, Tiled",
        live_demo: "https://github.com/ujjwalkathait",
        status: "In Progress",
        type: "Application",
        video_demo: "",

    },
    {
        title: "Qr Code Generator",
        features: "Create and Customize QR Codes",
        bg: project5,
        github: "https://github.com/ujjwalkathait",
        description: "This project is a QR code generator that allows users to create and customize QR codes. It provides an interactive interface where users can input data, select QR code styles, and generate QR codes in real-time. The simulator supports various QR code designs, enabling users to compare different styles and their visual impact.",
        tech_stack: "Python, Flask, HTML, CSS, JavaScript, Firebase",
        live_demo: "https://github.com/ujjwalkathait",
        status: "Completed",
        type: "Web Application",
        video_demo: "",
    }
];

export default projects;