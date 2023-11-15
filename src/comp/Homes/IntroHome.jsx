import '../../App.css'
import '../CSS/Intro.css'

const IntroHome = () => {
    return(
        // 간략히 보는 About Me
        <div className='homeWrapper'>
            <article className='introArticle'>
                <div className='introTitle'>ABOUT ME</div>
                <hr className='introHr' />
                <div className='introMain'>
                    <div className='introItems'>
                        <span className='introSpan'>👤 &nbsp;&nbsp; 이름</span><br />
                        <p className='introCont'>이설아</p>
                    </div>
                    <div className='introItems'>
                        <span className='introSpan'>🗓️ &nbsp;&nbsp; 생년월일</span><br />
                        <p className='introCont'>03.12.01</p>
                    </div>
                    <div className='introItems'>
                        <span className='introSpan'>📞 &nbsp;&nbsp; 연락처</span><br />
                        <p className='introCont'>010-9600-4436</p>
                    </div>
                    <div className='introItems'>
                        <span className='introSpan'>😺 &nbsp;&nbsp; 깃허브</span><br />
                        <p className='introCont'>
                            <a href="http://www.github.com/SeolA-Lee" id='link' target='_self'>SeolA-Lee</a>
                        </p>
                    </div>
                    <div className='introItems'>
                        <span className='introSpan'>✉️ &nbsp;&nbsp; 이메일</span><br />
                        <p className='introCont'>
                            <a href="mailto:dlcodus1201@naver.com" id='link'>dlcodus1201@naver.com</a>
                        </p>
                    </div>
                    <div className='introItems'>
                        <span className='introSpan'>🎓 &nbsp;&nbsp; 학력</span><br />
                        <p className='introCont'>
                            가천대학교<br />
                            (컴퓨터공학전공)
                        </p>
                    </div>
                </div>
            </article>
            
        </div>
    )
}

export default IntroHome;