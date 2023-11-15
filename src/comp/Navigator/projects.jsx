import SecondProject from "../Projects/SecondProject";
import Contest from "../Projects/Contest";
import FirstProject from "../Projects/FirstProject";

const projects = [
    {
        tab: "FirstProject",
        detail: "Calender App",
        image: "/Imgs/calenderApp.svg",
        content: <FirstProject />
    },
    {
        tab: "SecondProject",
        detail: "Shopping Mall Website",
        image: "/Imgs/mallWeb.svg",
        content: <SecondProject />
    },
    {
        tab: "Contest",
        detail: "데이터 분석 • 활용 경진대회",
        image: "/Imgs/contest.svg",
        content: <Contest />
    }
];

export default projects;
