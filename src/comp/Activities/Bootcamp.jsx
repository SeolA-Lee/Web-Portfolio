import { Link } from "react-router-dom";
import '../CSS/Activity.css' ;

const Bootcamp = () => {
    return(
        <div className="contentWrapper">
            <div className="bootArticle">
                <div className="bootImg">
                    <img src='/Imgs/bootcamp.svg' className='bootSubImg' />
                </div>
                <div className="bootProj">
                    <div className="bootTitle">XXX 부트캠프</div>
                    <hr className="bootHr" /><br />

                    <div className='bootSub'>
                        <div className='bootCont'>활동 기간</div>
                        <div className='bootDate'>2025.03~2025.12</div>
                    </div>

                    <div className='bootSub'>
                        <div className='bootCont'>내용</div>
                        <div className='bootList'>
                            <ul className="actList3">
                                <li className="actLi3">XXX 부트캠프 n기</li>    
                                <li className="actLi3">직무부트캠프</li>
                                <li className="actLi3">백엔드 개발 실무 체험</li>
                            </ul>
                        </div>
                    </div>

                    <div className='bootSub'>
                        <div className='bootCont'>느낀점</div>
                        <div className='bootList'>
                            <ul className="actList3">
                                <li className="actLi3">SW개발 직무 경험 쌓을 수 있었음</li>
                                <li className="actLi3">현직자의 실무를 멘토의 도움을 통해 경험할 수 있었음</li>
                                <li className="actLi3">개발에 대한 능력을 향상할 수 있었음</li>
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

export default Bootcamp;