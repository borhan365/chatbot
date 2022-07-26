import React from 'react'
import { Link } from 'react-router-dom'
import {BsFacebook, BsTwitter, BsLinkedin, BsYoutube} from 'react-icons/bs'

// images
import logo from '../../assets/images/wipdata-logo.png'
import bg from '../../assets/images/bg/bg.png'

function index() {
  return (
    <>
    <section className='footer-section'>
      <div class="dia-footer-shape3 position-absolute">
          <img src={bg} alt="bg shape" />
      </div>
      <div className="container">
        <div className="footer-wrapper">

          {/* item */}
          <div className="footer-item">

            {/* logo */}
            <div class="footer-item-logo">
              <Link to="/">
                <img src={logo} alt="site logo" />
              </Link>
              <h2>
                <span class="orangered">Wip</span> Data
              </h2>
            </div>

            {/* detials */}
            <div className="footer-company-bio">
              <p>
              A chatbot or chatterbot is a software application used to conduct an on-line chat conversation via text or text-to-speech.
              </p>
            </div>

            {/* social media */}
            <div className="footer-item-social">
              <ul>
                <li>
                  <Link to="#"> <BsFacebook /> </Link>
                </li>
                <li>
                  <Link to="#"> <BsTwitter /> </Link>
                </li>
                <li>
                  <Link to="#"> <BsLinkedin /> </Link>
                </li>
                <li>
                  <Link to="#"> <BsYoutube /> </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* item | company detials */}
          <div className="footer-item">
            <div className="footer-title">
              <h3>Company Details</h3>
            </div>
            <div className="footer-item-list">
              <ul>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
                <li>
                  <Link to="#">Privecy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Carriar</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* item | services */}
          <div className="footer-item">
            <div className="footer-title">
              <h3>Company Services</h3>
            </div>
            <div className="footer-item-list">
              <ul>
                <li>
                  <Link to="#">Business Intelligence</Link>
                </li>
                <li>
                  <Link to="#">Robotic Process Automation</Link>
                </li>
                <li>
                  <Link to="#">AI Chatbot NLP</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Carriar</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* item | conteact detials */}
          <div className="footer-item">
            <div className="footer-title">
              <h3>Headquarters</h3>
            </div>
            <div className="footer-item-list">
              <ul>
                <li>
                  <span className='footer-address-title'>Phone Number: </span>
                  <span className="footer-address-details"> +6011 1123 4515</span>
                </li>
                <li>
                  <span className='footer-address-title'>Email Address: </span>
                  <span className="footer-address-details"><Link to="mailto:info@wipdata.com"> info@wipdata.com</Link></span>
                </li>
                <li>
                  <span className='footer-address-title'>Working Hours: </span>
                  <span className="footer-address-details"> 9:00 AM – 6:00 PM</span>
                </li>
                <li>
                  <span className='footer-address-title'>Office: </span>
                  <span className="footer-address-details"> B608, Kelana Square, 47301 Petaling Jaya, Selangor, Malaysia</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>

    {/* bottom */}
    <section className="footer-bottom-section">
        <div className="container">
          <div className="footer-bottom">
            <div className="footer-bottom-item">
              <p>Website Design & Developed By <Link to="/"><img src={logo} /> WipData</Link> </p>
            </div>
            <div className="footer-bottom-item">
              <p>© copyright all right reserved 2022</p>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default index