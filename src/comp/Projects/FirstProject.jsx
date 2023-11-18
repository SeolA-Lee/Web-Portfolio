import { Link } from "react-router-dom";
import '../CSS/Project.css' ;

const FirstProject = () => {
    return(
        <div className='contentWrapper' id="projectPage">
            <div className="firstArticle">
                <div className="firstImg">
                    <img src='https://seola-lee.github.io/Web-Portfolio/Imgs/first.svg' className='firstSubImg' />
                </div>
                <div className="firstProj">
                    <div className="firstTitle">Calender Application</div>
                    <hr className="firstHr" /><br />
                    <div className='firstSub'>
                        <div className='firstCont'>내용</div>
                        <div className='firstList'>
                            <ul className='subList'>
                                <li className='subLi'>사용자 친화적이고 기능적인 캘린더 애플리케이션 앱 개발 프로젝트</li>
                                <li className='subLi'>사용자가 일정을 관리하고 시간을 효율적으로 활용할 수 있도록 도와주는 목적</li>
                                <li className='subLi'>주요 기능 : 일정 추가/수정/삭제, 일정 카테고리 설정, 알림 기능, 공유 일정, 반복 일정 설정 등의 캘린더 기본 기능 + To-Do List 기능</li>
                            </ul>
                        </div>
                    </div>
                    <div className='firstSub'>
                        <div className='firstCont'>담당 역할</div>
                        <div className='firstExp'>
                            프론트엔드 개발 : 앱의 사용자 인터페이스 및 사용자 경험을 개선하기 위해 React를 사용
                        </div>
                    </div>
                    <div className='firstSub'>
                        <div className='firstCont'>성과</div>
                        <div className='firstList'>
                            <ul className='subList'>
                                <li className='subLi'>다양한 플랫폼 제공 : Android와 iOS 플랫폼에서 모두 작동 가</li>
                                <li className='subLi'>사용자 만족도 향상</li>
                                <li className='subLi'>앱 성능 최적화</li>
                                <li className='subLi'>To-Do List 기능의 추가로 인한 사용자 확보</li>    
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="projNav">
                    <Link to="/projects" className="otherLink"><button className="otherProj">다른 프로젝트 보러 가기</button></Link>
                </div>
            </div>
        </div>
    );
}

export default FirstProject;
