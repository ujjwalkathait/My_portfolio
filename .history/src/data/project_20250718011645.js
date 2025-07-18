import project1 from '../assets/images/OS.png';
import project2 from '../assets/images/circle.png';
import project3 from '../assets/images/Debugger1.png';
import project4 from '../assets/images/gameTime.png';
import project5 from '../assets/images/qrcode.png';
const projects = [
    {
        title: "Process Scheduler",
        features: [
            "Interactive process input",
            "Multiple scheduling algorithms",
            "Gantt chart visualization",
            "Process state tracking"
        ],
        bg: project1,
        github: "",
        description: "This project is a process scheduling simulator that allows users to visualize and understand different scheduling algorithms. It provides an interactive interface where users can input processes, select scheduling algorithms, and observe how the processes are scheduled over time. The simulator supports various algorithms such as First-Come-First-Serve (FCFS), Shortest Job Next (SJN), Round Robin (RR), and Priority Scheduling. Users can also view Gantt charts and process states to gain insights into the scheduling behavior.",
        tech_stack: ["JavaScript", "React", "CSS"],
        live_demo: "https://ujjwalkathait.github.io/Process_Scheduler/",
        status: "Completed",
        type: "Web Application",
        video_demo:""
        
    },
    { title: "Project 1", description: "Lorem ipsum dolor sit.", icon: "logo-react", bg: project1 , github: "https://github.com/ujjwalkathait/Process_Scheduler"},
    { title: "Project 2", description: "Lorem ipsum dolor sit.", icon: "logo-nodejs", bg: project2 , github: "https://github.com/ujjwalkathait/Process_Scheduler"},
    { title: "Project 3", description: "Lorem ipsum dolor sit.", icon: "logo-nodejs", bg: project3 , github: "https://github.com/ujjwalkathait/Process_Scheduler"},
    { title: "Project 4", description: "Lorem ipsum dolor sit.", icon: "logo-python", bg: project4 , github: "https://github.com/ujjwalkathait/Process_Scheduler"},
    { title: "Project 5", description: "Lorem ipsum dolor sit.", icon: "person-outline", bg: project5 , github: "https://github.com/ujjwalkathait/Process_Scheduler"},
];

export default projects;