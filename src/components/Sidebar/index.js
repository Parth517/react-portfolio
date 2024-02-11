import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/Logo.svg'
import LogoSub from '../../assets/images/output.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (
    <div className='nav_bar'>
      <Link className='logo' to='/'>
        <img src={Logo} alt="logo" />
        <img className='sub-logo' src={LogoSub} alt="logo subtitle" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
        <NavLink 
        exact="true" 
        activeclassname="active" 
        className="about-link" 
        to="/about">
            <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink 
        exact="true" 
        className="contact-link" 
        activeclassname="active" 
        to="/contact">
            <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>
      </nav>
      <ul>
        <li>
            <a target='_blank' className='linkedin' rel="noreferrer"  href='https://www.linkedin.com/in/deshpande-parth-jun27/'>
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target='_blank' className='github' rel="noreferrer"  href='https://github.com/Parth517'>
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
        </li>
        <li>
            <a target='_blank' className='insta' rel="noreferrer"  href='https://www.instagram.com/parthdesh12/'>
                <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
            </a>
        </li>
      </ul>
    </div>
  );

export default Sidebar