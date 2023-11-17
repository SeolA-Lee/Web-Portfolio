import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import React, { useState } from "react";

import Home from "./comp/Homes/Home";
import IntroHome from "./comp/Homes/IntroHome"
import Profile from "./comp/Introduction/Profile";
import Strength from "./comp/Introduction/Strength";
import Careers from "./comp/Careers/Careers";
import ProjectHome from "./comp/Homes/ProjectHome";
import projects from "./comp/Navigator/projects";
import ActivityHome from "./comp/Homes/ActivityHome";
import activities from "./comp/Navigator/activities";

import "./App.css";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="myPortfolio">
        <header className="myHeader">
          {/* Header Title */}
          <div className="title">
            <Link className="mainTitle" to={"/"}>LEE's Portfolio</Link>
          </div>

          {/* Header Navs */}
          <nav className="mainNav">
            {/* About Me */}
            <div className="meNavs"
              onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link className="mainMenu" to={"/introduction"}>About Me</Link> 
                {isHovered && (
                  <div className="subMenu">
                    <Link className="subNavs" to={"/profile"}>Profile</Link>
                    <hr className="subHr" />
                    <Link className="subNavs" to={"/strength"}>Strength</Link>
                  </div>
                )}
            </div>
            
            {/* Careers */}
            <div className="meNavs">
              <Link className="mainMenu" to={"/careers"}>Careers</Link>
            </div>

            {/* Projects */}
            <div className="meNavs">
              <Link className="mainMenu" to={"/projects"}>Projects</Link>
            </div>

            {/* Activities */}
            <div className="meNavs">
              <Link className="mainMenu" to={"/activities"}>Activities</Link>
            </div>
          </nav>
        </header>  
        
        <main>
          <Routes>
            <Route path="/" Component={Home} />
            {/* About Me */}
            <Route path="/introduction" Component={IntroHome} />  
              <Route path="/profile" Component={Profile} />
              <Route path="/strength" Component={Strength} />
            
            {/* Careers */}
            <Route path="/careers" Component={Careers} />
            
            {/* Projects */}
            <Route path="/projects" Component={ProjectHome} />
              {projects.map((projects) => (
                <Route path={`/projects/${projects.tab}`} element={projects.content} />
              ))}

            {/* Activities */}
            <Route path="/activities" Component={ActivityHome} />
              {activities.map((activities) => (
                <Route path={`/activities/${activities.tab}`} element={activities.content} />
              ))}
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
