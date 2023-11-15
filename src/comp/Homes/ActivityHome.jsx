import { Link } from "react-router-dom";
import React, { useState } from "react";
import activities from "../Navigator/activities";

import '../../App.css'
import '../CSS/Activity.css'

const ActivityHome = () => {
    const [index, setIndex] = useState(0);
    const contentChange = (event) => {
        setIndex(event.target.value);
    };

    return(
        // 간략히 보는 Other Activities
        <div className='homeWrapper'>
            <article className='actArticle'>
                <div className='actTitle'>OTHER ACTIVITIES</div>
                <hr className='actHr' />
                <div className="actNav">
                    {activities.map((activities, index) => (
                        <Link to={`/activities/${activities.tab}`}>
                            <button onClick={contentChange} value={index} className="actBtn">
                                <img src={activities.image} value={index} className="actImg"/>
                                <hr className="btnHr"/>
                                {activities.detail}
                            </button>
                        </Link>
                    ))}
                </div>
            </article>
        </div>
    );
}

export default ActivityHome;