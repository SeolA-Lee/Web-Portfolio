import { useEffect, useState } from 'react';
import '../../App.css'

const Home = () => {
    const content = "안녕하세요 :)\n성장하는 개발자 이설아입니다.";
    const [displayText, setDisplayText] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setDisplayText((prev) => {
                let hello = prev ? prev + content[count] : content[0];
                setCount(count + 1);
                
                if (count >= content.length) {
                    setCount(0);
                    setDisplayText("");
                }

                return hello;
            })
        }, 200);

        return () => {
            clearInterval(interval);
        }
    });

    return(
        <div className='homeWrapper' id='mainHomepage'>
            <article className='homeArticle'>
                <img src='https://seola-lee.github.io/Web-Portfolio/Imgs/main.svg' className='mainImg' />
                <div className='homePage'>
                    이설아's Web Portfolio
                </div>
                <hr className='homeHr' />
                <div className='hello'>
                    <pre className='hello1'>{displayText}</pre>
                </div>
            </article>
        </div>
    );
}

export default Home;