import { Link } from "react-router-dom";
import '../CSS/Project.css' ;

const SecondProject = () => {
    return(
        <div className='contentWrapper'>
            <div className="secondArticle">
                <div className="secondImg">
                    <img src='https://seola-lee.github.io/Web-Portfolio/Imgs/second.svg' className='secondSubImg' />
                </div>
                <div className="secondProj">
                    <div className="secondTitle">S-Mall Website</div>
                    <hr className="secondHr" /><br />
                    <div className='secondSub'>
                        <div className='secondCont'>내용</div>
                        <div className='secondList'>
                            <ul className="subList2">
                                <li className="subLi2">사용자가 상품을 검색하고 주문할 수 있는 온라인 쇼핑몰 시스템을 구축</li>
                                <li className="subLi2">상품 정보, 주문 정보, 사용자 정보 등을 데이터베이스에 저장하고 관리</li>
                                <li className="subLi2">주요 기능
                                    <li id="func">사용자 : 상품 검색 및 주문 등의 기능</li>
                                    <li id="func">관리자 : 상품 추가 및 주문 처리 등의 기능</li>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='secondSub'>
                        <div className='secondCont'>담당 역할</div>
                        <div className='secondExp'>
                            데이터베이스 구축 : MS SQL 데이터베이스 시스템을 사용하여 실제 데이터의 삽입, 갱신, 삭제, 조회를 처리하고 데이터 일관성과 무결성 유지                        
                        </div>
                    </div>
                    <div className='secondSub'>
                        <div className='secondCont'>성과</div>
                        <div className='secondList'>
                            <ol className="subList2">
                                <li className="subLi2">빠른 데이터 처리</li>
                                <li className="subLi2">보안 강화</li>
                                <li className="subLi2">사용자 경험</li>
                            </ol>
                            <p className="secondExp2">&rArr; 이 프로젝트를 통해 데이터베이스 설계와 구축에 대한 실전 경험을 쌓을 수 있었으며 안전하고 효율적인 데이터베이스 활용 방법을 익힐 수 있었음</p>
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

export default SecondProject;
