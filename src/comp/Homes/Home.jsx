import '../../App.css'

const Home = () => {
    return(
        <div className='homeWrapper'>
            <article className='homeArticle'>
                <img src='/Imgs/main.svg' className='mainImg'/>
                <div className='homePage'>
                    이설아's Web Portfolio
                </div>
                <hr className='homeHr'/>
                <div className='hello'>
                    안녕하세요 :&#41; <br />
                    성장하는 Frontend 개발자 이설아입니다.
                </div>
            </article>
        </div>
    );
}

export default Home;