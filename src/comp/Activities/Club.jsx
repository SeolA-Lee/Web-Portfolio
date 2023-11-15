import { Link } from "react-router-dom";
import '../CSS/Activity.css' ;

const Club = () => {
    return(
        <div className="contentWrapper">
            <div className="clubArticle">
                <div className="clubImg">
                    <img src='/Imgs/club.svg' className='clubSubImg' />
                </div>
                <div className="clubProj">
                    <div className="clubTitle">OOO 개발 동아리</div>
                    <hr className="clubHr" /><br />

                    <div className='clubSub'>
                        <div className='clubCont'>활동 기간</div>
                        <div className='clubDate'>2024.09~2024.12</div>
                    </div>

                    <div className='clubSub'>
                        <div className='clubCont'>내용</div>
                        <div className='clubList'>
                            <ul className="actList2">
                                <li className="actLi2">OOO 개발 동아리 n기</li>
                                <li className="actLi2">캘린더 애플리케이션 제작</li>
                                <li className="actLi2">프론트엔드 개발 담당</li>
                            </ul>
                        </div>
                    </div>

                    <div className='clubSub'>
                        <div className='clubCont'>느낀점</div>
                        <div className='clubList'>
                            <ul className="actList2">
                                <li className="actLi2">개발자 멘토를 통해 지식을 쌓을 수 있었음</li>
                                <li className="actLi2">동아리 내 프로젝트 진행 시 팀의 리더를 맡아 리더십을 기르고, 커뮤니케이션 능력을 향상시킬 수 있었음</li>
                                <li className="actLi2">동아리를 진행하면서 개발에 대한 능력 및 기술, 경험을 쌓을 수 있었음</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="actNav">
                    <Link to="/activities" className="otherLink"><button className="otherAct">다른 활동 보러 가기</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Club;