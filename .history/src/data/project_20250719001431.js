import project1 from '../assets/images/OS.png';
import project2 from '../assets/images/circle.png';
import project3 from '../assets/images/Debugger1.png';
import project4 from '../assets/images/gameTime.png';
import project5 from '../assets/images/qrcode.png';
const projects = [
    {
        title: "Process Scheduler",
        features: "Visualize and compare CPU scheduling algorithms like FCFS, SJF, RR, and more with an interactive simulator.",
        bg: project1,
        github: "https://github.com/ujjwalkathait/Process_Scheduler",
        description: "This project is a process scheduling simulator that allows users to visualize and understand different scheduling algorithms. It provides an interactive interface where users can input processes, select scheduling algorithms, and observe how the processes are scheduled over time. The simulator supports various algorithms such as First-Come-First-Serve (FCFS), Shortest Job Next (SJN), Round Robin (RR), and Priority Scheduling. Users can also view Gantt charts and process states to gain insights into the scheduling behavior.",
        tech_stack: ["JavaScript", "React", "CSS"],
        live_demo: "",
        status: "Completed",
        type: "Web Application",
        video_demo: "",
        
    },
    {
        title: "Circle",
        features: "A secure, modern and interactive social netwroking platform. To help you connect with your friends and family.",
        bg: project2,
        github: "",
        description: "This project is a circle drawing simulator that allows users to create and manipulate circles in real-time. It provides an interactive interface where users can draw circles, adjust their properties such as radius and color, and observe how the circles change dynamically. The simulator supports various styles of circles, enabling users to compare different circle designs and their visual effects.",
        tech_stack: ["JavaScript", "React", "CSS"],
        live_demo: "",
        status: "In Progress",
        type: "Web Application",
        video_demo: "",
    },
    {
        title: "AI-Debugger",
        features: "An AI-powered tool to detect and fix bugs in C/C++ code instantly with just one click.",
        bg: project3,
        github: "",
        description: "This project is a debugging simulator that allows users to debug code interactively. It provides a real-time code execution environment where users can set breakpoints, step through code, and inspect variables. The simulator supports multiple debugging modes, enabling users to compare different debugging techniques and understand their effectiveness in identifying and fixing issues.",
        tech_stack: `"JavaScript ", " React ", " CSS "`,
        live_demo: "",
        status: "Completed",
        type: "Web Application",
        video_demo: "",
    },
    {
        title: "Game Time",
        features: [
            "Interactive game simulation",
            "Real-time game updates",
            "Multiple game modes",
            "Comparison of game strategies",
        ],
        bg: project4,
        github: "",
        description: "This project is a game simulation that allows users to play and experience different game scenarios. It provides an interactive interface where users can choose game modes, make strategic decisions, and observe how the game evolves in real-time. The simulator supports various game strategies, enabling users to compare their effectiveness and learn from different gameplay approaches.",
        tech_stack: ["JavaScript", "React", "CSS"],
        live_demo: "",
        status: "In Progress",
        type: "Application",
        video_demo: "",

    },
    {
        title: "Qr Code Generator",
        features: [
            "Interactive QR code generation",
            "Real-time QR code updates",
            "Multiple QR code styles",
            "Comparison of QR code styles",
        ],
        bg: project5,
        github: "",
        description: "This project is a QR code generator that allows users to create and customize QR codes. It provides an interactive interface where users can input data, select QR code styles, and generate QR codes in real-time. The simulator supports various QR code designs, enabling users to compare different styles and their visual impact.",
        tech_stack: ["JavaScript", "React", "CSS"],
        live_demo: "",
        status: "Completed",
        type: "Web Application",
        video_demo: "",
    }
];

export default projects;