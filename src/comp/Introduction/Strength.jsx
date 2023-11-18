import React, { useState } from "react";

import '../CSS/Intro.css' ;

const Strength = () => {
    return(
        <div className='contentWrapper' id="introPage">
            <article className='strength'>
                <div className='strFile'>
                    <div className="myFolder">
                        <div className="strOne1">Strength</div>
                        <div className="strOne2">(Hover to See Everything)</div>
                    </div>
                    <div className="allStr">
                        <div className="all1">
                            <div className="allNum">01</div>
                            <div className="allKey">열정</div>
                            <div className='allStrExp'>
                                항상 맡은 업무에 열정을 다하는 자세로<br />
                                임하며 일을 주로 주도하여<br />
                                팀원들을 이끌어 나갑니다.
                            </div>
                        </div>
                        <div className="all2">
                            <div className="allNum">02</div>
                            <div className="allKey">팀워크</div>
                            <div className='allStrExp'>
                                팀원과의 원활한 의사소통을 유지하여 <br />
                                팀 내의 불화가 발생하지 않도록 하며, <br />
                                서로의 의견을 조율하며 협업해 나갑니다.
                            </div>
                        </div>
                        <div className="all3">
                            <div className="allNum">03</div>
                            <div className="allKey">업무의 유연성</div>
                            <div className='allStrExp'>
                                생각한 방향성이 있더라도<br />
                                팀원의 의견을 적극적으로 수용함으로써<br />
                                효율적인 일처리를 위하여<br />
                                업무 처리의 계획을 바꿉니다.
                            </div>
                        </div>
                    </div>

                    <div className='strTitle' />
                    <div className='folderMain'>Strength</div>
                    <div className='folderIndex'></div>
                    <div className='folder1' id='folders'>01</div>
                    <div className='folderIndex1'>01</div>
                    <div className='str1'>
                        <div className="keyword">열정</div>
                        <div className='strExp'>
                            항상 맡은 업무에 열정을 다하는 자세로<br />
                            임하며 일을 주로 주도하여<br />
                            팀원들을 이끌어 나갑니다.
                        </div>
                    </div>
                    <div className='folder2' id='folders'>02</div>
                    <div className='folderIndex2'>02</div>
                    <div className='str2'>
                        <div className="keyword">팀워크</div>
                        <div className='strExp'>
                            팀원과의 원활한 의사소통을 유지하여 <br />
                            팀 내의 불화가 발생하지 않도록 하며, <br />
                            서로의 의견을 조율하며 협업해 나갑니다.
                        </div>
                    </div>
                    <div className='folder3' id='folders'>03</div>
                    <div className='folderIndex3'>03</div>
                    <div className='str3'>
                        <div className="keyword">업무의 유연성</div>
                        <div className='strExp'>
                            생각한 방향성이 있더라도<br />
                            팀원의 의견을 적극적으로 수용함으로써<br />
                            효율적인 일처리를 위하여<br />
                            업무 처리의 계획을 바꿉니다.
                        </div>
                    </div>
                </div>
            </article>
        </div>    
    );
}

export default Strength;