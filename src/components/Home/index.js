import { Link} from 'react-router-dom'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home=()=>{
    const [letterClass,setLetterClass]=useState('text-animate')
    const nameArray=['P','a','r','t','h']
    const jobArray=['W','e','b',' ','D','e','v','e','l','o','p','e','r']

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 4000);
      
        // Cleanup function to clear the timeout when the component is unmounted
        return () => clearTimeout(timeoutId);
      }, []);
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>m,</span>
                    <span>  </span>
                <AnimatedLetters 
                letterClass={letterClass} 
                strArray={nameArray}
                idx={15}
                />
                <br />
                <AnimatedLetters 
                letterClass={letterClass} 
                strArray={jobArray}
                idx={15}
                />
                </h1>
                <h2>Frontend Developer</h2>
                <Link to="/contact" className='flat-button'>Contact Me</Link>
            </div>
        </div>
    )
}



export default Home;