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
        <div className='homeWrapper'>
            <article className='projArticle'>
                <div className='projTitle'>PROJECTS & CONTEST</div>
                <hr className='projHr' />
                <div className="projNav">
                    {projects.map((projects, index) => (
                        <Link to={`/projects/${projects.tab}`}>
                            <button onClick={contentChange} value={index} className="projBtn">
                                <img src={projects.image} value={index} className="projImg"/>
                                <hr className="btnHr"/>
                                {projects.detail}
                            </button>
                        </Link>
                    ))}
                </div>
            </article>

        </div>
    );
}

export default ProjectHome;