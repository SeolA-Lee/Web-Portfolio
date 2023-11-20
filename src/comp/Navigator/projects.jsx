import SecondProject from "../Projects/SecondProject";
import Contest from "../Projects/Contest";
import FirstProject from "../Projects/FirstProject";

const projects = [
    {
        tab: "FirstProject",
        detail: "Calender App",
        date: "2024.08~2024.11",
        tech: "React Native",
        image: "https://seola-lee.github.io/Web-Portfolio/Imgs/calenderApp.svg",
        content: <FirstProject />
    },
    {
        tab: "SecondProject",
        detail: "Shopping Mall Website",
        date: "2024.12~2025.02",
        tech: "HTML5, CSS3, JavaScript",
        image: "https://seola-lee.github.io/Web-Portfolio/Imgs/mallWeb.svg",
        content: <SecondProject />
    },
    {
        tab: "Contest",
        detail: "데이터 분석 • 활용 경진대회",
        date: "2024.11~2024.12",
        tech: "none",
        image: "https://seola-lee.github.io/Web-Portfolio/Imgs/contest.svg",
        content: <Contest />
    }
];

export default projects;
