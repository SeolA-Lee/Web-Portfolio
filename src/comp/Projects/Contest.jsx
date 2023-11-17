import { Link } from "react-router-dom";
import '../CSS/Project.css' ;

const Contest = () => {
    return(
        <div className="contentWrapper">
            <div className="contestArticle">
                <div className="contestImg">
                    <img src='https://seola-lee.github.io/Web-Portfolio/Imgs/poster.svg' className='contestSubImg' />
                </div>
                <div className="contestProj">
                    <div className="contestTitle">데이터 분석 &bull; 활용 경진대회</div>
                    <hr className="contestHr" /><br />
                    <div className='contestSub'>
                        <div className='contestCont'>개요</div>
                        <div className='contestExp'>
                            학교 안전사고에 관련된 데이터를 분석하고 활용하여 안전사고 예방 및 관리 관련 아이디어 기획 및 데이터 시각화 대시보드 제작
                        </div>
                    </div>
                    <div className='contestSub'>
                        <div className='contestCont'>담당 역할</div>
                        <div className="contestList">
                            <ul className="subList3">
                                <li className="subLi3">데이터 분석 : 교내 안전사고 데이터에 대한 통계적 분석을 수행하여 이를 팀원들과 추가로 함께 해석</li>    
                                <li className="subLi3">데이터를 분석하고 해석하여 최종 보고서 작성에 기여</li>
                            </ul> 
                        </div>
                    </div>
                    <div className='contestSub'>
                        <div className='contestCont'>강조할 점</div>
                        <div className='contestExp'>
                            데이터 시각화를 통해 분석 결과를 직관적이고 명확하게 함으로써 안전사고 데이터의 특징을 이해하기 쉽게 제작함                        
                        </div>
                    </div>     
                    <div className='contestSub'>
                        <div className='contestCont'>성과</div>
                        <div className='contestExp'>
                            정확한 문제를 도출해내어 데이터를 시각화하였으며 이를 통해 유의미한 결과를 도출해냄 <br />
                            또한, 이러한 시각화를 바탕으로 보고서를 작성함                        
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

export default Contest;