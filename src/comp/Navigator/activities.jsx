import Visiting from "../Activities/Visiting";
import Club from "../Activities/Club";
import Bootcamp from "../Activities/Bootcamp";

const activities = [
    {
        tab: "VisitingStudent",
        detail: "Visiting Student",
        image: "https://seola-lee.github.io/Web-Portfolio/Imgs/visiting.svg",
        content: <Visiting />
    },
    {
        tab: "Club",
        detail: "Club Activity",
        image: "https://seola-lee.github.io/Web-Portfolio/Imgs/club.svg",
        content: <Club />
    },
    {
        tab: "BootCamp",
        detail: "Boot Camp",
        image: "https://seola-lee.github.io/Web-Portfolio/Imgs/bootcamp.svg",
        content: <Bootcamp />
    }
];

export default activities;