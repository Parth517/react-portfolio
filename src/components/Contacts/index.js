import Loader from 'react-loaders';
import './index.scss'

const Contact = ()=>{
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'></div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact;