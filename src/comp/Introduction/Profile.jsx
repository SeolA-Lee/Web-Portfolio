import '../../App.css';
import '../CSS/Intro.css';

const Profile = () => {
    return(
        <div className='contentWrapper'> 
            <article className='myProfile'>

                <div className='flipProfile'>
                    <div className='frontPhoto'>
                        <img src='/Imgs/me.svg' className='me' />
                        <div className='showSkill'>
                            <p className='clickMe'>Skill 보기</p>
                        </div>
                    </div>
                    <div className='backSkill'>
                        <div className='skillTitle'>⚙️ SKILL</div>
                        <div className='frontSkill'>
                            <h1 className='frontH1'>Frontend</h1>
                            <hr className='frontHr' />
                            <div className='frontImg'>
                                <img src='/Imgs/SkillImg/HTML5.svg' className='fronts' />
                                <img src='/Imgs/SkillImg/CSS3.svg' className='fronts' />
                            </div>
                            <div className='frontImg'>
                                <img src='/Imgs/SkillImg/Javascript.svg' className='fronts' />
                                <img src='/Imgs/SkillImg/React.svg' className='fronts' />
                            </div>
                        </div>
                        <div className='backendSkill'>
                            <h1 className='backendH1'>Backend</h1>
                            <hr className='backendHr' />
                            <div className='backendImg'>
                                <img src='/Imgs/SkillImg/Python.svg' className='backs' />
                                <img src='/Imgs/SkillImg/Java.svg' className='backs' />
                            </div>
                        </div>
                        <div className='gitSkill'>
                            <h1 className='gitH1'>Version Control</h1>
                            <hr className='gitHr' />
                            <div className='gitImg'>
                                <img src='/Imgs/SkillImg/git.svg' className='gits' />
                                <img src='/Imgs/SkillImg/GitHub.svg' className='gits' />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='profileDiv'>
                    <div className='profile'>
                        <div className='profileTitle'>👩🏻‍💻 PROFILE</div>
                        <div className='profSub'>
                            <div className='profItem'>Name</div>
                            <div className='profItemSub'>이설아</div>
                        </div>
                        <div className='profSub'>
                            <div className='profItem'>Tel.</div>
                            <div className='profItemSub'>010-9600-4436</div>
                        </div>
                        <div className='profSub'>
                            <div className='profItem'>E-mail</div>
                            <div className='profItemSub'>
                                <a href='mailto:dlcodus1201@naver.com' id='link'>
                                    dlcodus1201@naver.com
                                </a>
                            </div>
                        </div>
                        <div className='profSub'>
                            <div className='profItem'>GitHub</div>
                            <div className='profItemSub'>
                                <a href='http://www.github.com/SeolA-Lee' target='_self' id='link'>
                                    github.com/SeolA-Lee
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='education'>
                        <div className='eduTitle'>🎓 EDUCATION</div>
                        <div className='eduSub'>
                            <div className='eduDate'>2019.03~2022.02</div>
                            <div className='eduName'>반송고등학교 졸업</div>
                        </div>
                        <div className='eduSub'>
                            <div className='eduDate'>2022.03~2026.08</div>
                            <div className='eduName'>
                                <div id='eduCol'>가천대학교 글로벌캠퍼스</div>
                                <div id='eduMaj'>IT융합대학 컴퓨터공학부/컴퓨터공학전공</div>
                            </div>
                        </div>
                    </div>

                    {/* <div className='skills'>
                        <div className='skillTitle'>⚙️ SKILL</div>
                        <div className='skillSub'>
                            
                        </div>
                    </div> */}
                    {/* <br />
                    <h1 className='profile'>⚙️ SKILL</h1>
                    <table className='profile'>
                        <tr>
                            <td className='profileSub' id='skills'>MY SQL</td>
                            <td className='profileSub'>상 / 중 / <span className='skillSpan'>하</span></td>
                        </tr>
                        <tr> 
                            <td className='profileSub' id='skills'>Python</td>
                            <td className='profileSub'>상 / 중 / <span className='skillSpan'>하</span></td>
                        </tr>
                        <tr>
                            <td className='profileSub' id='skills'>C++</td> 
                            <td className='profileSub'><span className='skillSpan'>상</span> / 중 / 하</td> 
                        </tr>
                        <tr> 
                            <td className='profileSub' id='skills'>Java</td> 
                            <td className='profileSub'>상 / <span className='skillSpan'>중</span> / 하</td> 
                        </tr>
                        <tr> 
                            <td className='profileSub' id='skills'>HTML5</td> 
                            <td className='profileSub'>상 / <span className='skillSpan'>중</span> / 하</td> 
                        </tr>
                        <tr> 
                            <td className='profileSub' id='skills'>CSS3</td> 
                            <td className='profileSub'>상 / <span className='skillSpan'>중</span> / 하</td> 
                        </tr>
                        <tr> 
                            <td className='profileSub' id='skills'>JavaScript</td> 
                            <td className='profileSub'>상 / <span className='skillSpan'>중</span> / 하</td> 
                        </tr>
                        <tr> 
                            <td className='profileSub' id='skills'>React</td>
                            <td className='profileSub'>상 / 중 / <span className='skillSpan'>하</span></td> 
                        </tr>
                    </table> */}
                </div>
            </article>
        </div>
    );
}

export default Profile;