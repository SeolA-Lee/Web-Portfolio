import { Link } from "react-router-dom";
import React, { useState } from "react";
import projects from "../Navigator/projects";

import '../../App.css'
import '../CSS/Project.css'
// import FirstProject from "../Projects/FirstProject";

const ProjectHome = () => {
    const [index, setIndex] = useState(0);
    const contentChange = (event) => {
        setIndex(event.target.value);
    };

    return(
        // 간략히 보는 Projects & Contest
        <div className='homeWrapper' id="projectPage">
            <article className='projArticle'>
                <div className='projTitle'>PROJECTS & CONTEST</div>
                <hr className='projHr' />
                <div className="projNav">
                    {projects.map((projects, index) => (
                        <Link to={`/projects/${projects.tab}`}>
                            <button onClick={contentChange} value={index} className="projBtn">
                                <img src={projects.image} value={index} className="projImg"/>
                                <hr className="btnHr"/>
                                <div className="btnDiv">{projects.detail}</div>
                            </button>
                            <div className="projSubDate">
                                <div className="projDetail">{projects.detail}</div>
                                <div className="projPTitle">&#35; Period</div>
                                <div className="projPeriod">&nbsp;&nbsp; {projects.date}</div>
                                <div className="projTTitle">&#35; Tech</div>
                                <div className="projTech">&nbsp;&nbsp; {projects.tech}</div>
                            </div>  
                        </Link>
                    ))}
                </div>
            </article>
        </div>
    );
}

export default ProjectHome;