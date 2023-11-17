import '../CSS/Intro.css' ;

const Strength = () => {
    return(
        <div className='contentWrapper'>
            <article className='strength'>
                <div className='strs'>
                    <hr className='strHr'/>
                    <div className='num'>01</div>
                    <div className='keyword'>열정</div>
                    <div className='strExp'>
                        항상 맡은 업무에 열정을 다하는 자세로 임하며 일을 주로 주도하여 팀원들을 이끌어 나갑니다.
                    </div>
                </div>
                <div className='strs'>
                    <hr className='strHr'/>
                    <div className='num'>02</div>
                    <div className='keyword'>팀워크</div>
                    <div className='strExp'>
                        팀원과의 원활한 의사소통을 유지하여 팀 내의 불화가 발생하지 않도록 하며, 서로의 의견을 조율하며 협업해 나갑니다.
                    </div>
                </div>
                <div className='strs'>
                    <hr className='strHr'/>
                    <div className='num'>03</div>
                    <div className='keyword'>업무의 유연성</div>
                    <div className='strExp'>
                        생각한 방향성이 있더라도 팀원의 의견을 적극적으로 수용하여 효율적인 일처리를 위하여 업무 처리의 계획을 바꿉니다.
                    </div>
                </div>
            </article>
        </div>    
    );
}

export default Strength;