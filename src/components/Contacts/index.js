import Loader from 'react-loaders'
import './index.scss'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters/index'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm=useRef();



  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Cleanup function to clear the timeout when the component is unmounted
    return () => clearTimeout(timeoutId)
  }, [])

  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs 
    .sendForm(
        'service_0qvzrxh',
        'template_q7rupnn',
        refForm.current,
        'BLnlsLreudmqi59YG'
    )
    .then(
        ()=>{
            alert('Message sucessfully Sent')
            window.location.reload(false);
        },
        ()=>{
            alert('Failed to send the mail')
        }
    )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            
          </p>

          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="suject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                    <textarea placeholder='Message' name='message' required />
                </li>
                <li>
                    <input type="submit" className='flat-button' value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className='info-map'>
            Parth Deshpande,
            <br />
            University Road,
            <br />
            Ahmedabad,<br />
            India<br />
            <span>parth.carats@gmail.com</span>
        </div>
        <div className='map-wrap'>
            <MapContainer center={[23.04275,72.54061]} zoom={13}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[23.04275,72.54061]}>
                <Popup>
                    Parth Lives Here
                    </Popup>
            </Marker>
            </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Contact
