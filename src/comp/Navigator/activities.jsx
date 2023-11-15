import Visiting from "../Activities/Visiting";
import Club from "../Activities/Club";
import Bootcamp from "../Activities/Bootcamp";

const activities = [
    {
        tab: "VisitingStudent",
        detail: "Visiting Student",
        image: "/Imgs/visiting.svg",
        content: <Visiting />
    },
    {
        tab: "Club",
        detail: "Club Activity",
        image: "/Imgs/club.svg",
        content: <Club />
    },
    {
        tab: "BootCamp",
        detail: "Boot Camp",
        image: "/Imgs/bootcamp.svg",
        content: <Bootcamp />
    }
];

export default activities;