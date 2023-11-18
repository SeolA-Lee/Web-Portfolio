import '../../App.css';
import '../CSS/Career.css';

const Careers = () => {
    return(
        <div className='contentWrapper' id='careerPage'>
            <article className='careerArticle'>
                <div className='careerTitle'>CAREERS</div>
                <hr className='careerHr' />
                <div className='careerMain'>
                    <div className='careerItems'>
                        <div className='internTitle'>👩🏻‍💻 INTERNSHIP</div>
                        <div className='internSub'>
                            <div className='internDate'>2024.12~2025.02</div>
                            <div className='internExp'>(주)OOO 개발자(Web Frontend)</div>
                        </div>
                        <div className='internSub'>
                            <div className='internDate'>2026.01~2026.05</div>
                            <div className='internExp'>(주)XXX (웹개발 및 운영)</div>
                        </div>
                    </div>
                    <div className='careerItems'>
                        <div className='lcsTitle'>🪪 LICENSE</div>
                        <div className='lcsSub'>
                            <div className='lcsDate'>2022.08</div>
                            <div className='lcsExp'>자동차운전면허증</div>
                            <div className='lcsSource'>경찰청</div>
                        </div>
                        <div className='lcsSub'>
                            <div className='lcsDate'>2023.12</div>
                            <div className='lcsExp'>네트워크관리사 2급</div>
                            <div className='lcsSource'>한국정보통신자격협회</div>
                        </div>
                        <div className='lcsSub'>
                            <div className='lcsDate'>2024.09</div>
                            <div className='lcsExp'>리눅스마스터 2급</div>
                            <div className='lcsSource'>한국정보통신자격협회</div>
                        </div>
                        <div className='lcsSub'>
                            <div className='lcsDate'>2025.03</div>
                            <div className='lcsExp'>정보처리기사</div>
                            <div className='lcsSource'>한국산업인력공단</div>
                        </div>
                    </div>
                    <div className='careerItems'>
                        <div className='etcTitle'>🗣️ SEPCIFICS</div>
                        <div className='etcSub'>
                            <div className='etcExp'>TOEIC 850점</div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
        
    );
}

export default Careers;