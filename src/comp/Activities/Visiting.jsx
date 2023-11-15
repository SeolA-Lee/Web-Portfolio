import { Link } from "react-router-dom";
import '../CSS/Activity.css' ;

const Visiting = () => {
    return(
        <div className="contentWrapper">
            <div className="visitingArticle">
                <div className="visitingImg">
                    <img src='/Imgs/visiting.svg' className='visitingSubImg' />
                </div>
                <div className="visitingProj">
                    <div className="visitingTitle">Griffith University 방문학생</div>
                    <hr className="visitingHr" /><br />

                    <div className='visitingSub'>
                        <div className='visitingCont'>활동 기간</div>
                        <div className='visitingDate'>2024.03~2024.06</div>
                    </div>

                    <div className='visitingSub'>
                        <div className='visitingCont'>내용</div>
                        <div className='visitingList'>
                            <ul className="actList">
                                <li className="actLi">호주 Griffith University 방문학생 파견</li>
                                <li className="actLi">어학연수과정 진행</li>
                            </ul>
                        </div>
                    </div>

                    <div className='visitingSub'>
                        <div className='visitingCont'>느낀점</div>
                        <div className='visitingList'>
                            <ul className="actList">
                                <li className="actLi">현지의 문화, 예절 등을 직접 경험할 수 있었음</li>
                                <li className="actLi">해외에서의 경험으로 인해 부족했던 영어 실력을 빠르게 향상시킬 수 있었음</li>
                                <li className="actLi">다양한 인종의 사람들을 사귐으로써 글로벌 시대에 발 맞추어 걸음</li>
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

export default Visiting;