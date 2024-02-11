import './index.scss';
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faPhp, faReact } from '@fortawesome/free-brands-svg-icons';
import { Loader} from 'react-loaders';

const About=() =>{

    const[letterClass,setLetterClass]=useState('text-animate');
    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        // Cleanup function to clear the timeout when the component is unmounted
        return () => clearTimeout(timeoutId);
      }, []);
    return(
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','M','e']}
                        idx={15}
                    /> 
                </h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                dolore eu fugiat nulla pariatur.
                </p>
                <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et 
                quasi architecto beatae vitae dicta sunt explicabo. 
                </p>
                <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci 
                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam 
                aliquam quaerat voluptatem.

                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                    <FontAwesomeIcon icon={faReact} color='#5ED4F4'/>
                    </div>
                    <div className='face2'>
                    <FontAwesomeIcon icon={faHtml5} color='#F06529'/>
                    </div>
                    <div className='face3'>
                    <FontAwesomeIcon icon={faCss3} color='#28A4D9'/>
                    </div>
                    <div className='face4'>
                    <FontAwesomeIcon icon={faPhp} color='#61dbfb'/>
                    </div>
                    <div className='face5'>
                    <FontAwesomeIcon icon={faJsSquare} color='#EFD81D'/>
                    </div>
                    <div className='face6'>
                    <FontAwesomeIcon icon={faGitAlt} color='#EC4D28'/>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman"/>
        </>
    )
}

export default About;

