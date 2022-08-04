import React from 'react'
import {BsChatDots, BsCheck2} from 'react-icons/bs'

// import images
import chatbot from '../assets/images/icons/robot.png'
import analysis from '../assets/images/icons/analysis.png'
import ai from '../assets/images/icons/artificial-intelligence.png'
import Header from '../components/header/Header'
import Footer from '../components/footer'

function PricingScreen() {
  return (
    <>
    <Header />
      <section className='featured-section'>
        <div className='container'>
          <div className='featured-container'>

            {/* title */}
            <div className='section-title'>
              <span className='sub-title purple-color'>Our Affortable Pricing</span>
              <h2>Goal-oriented pricing that scales with you</h2>
            </div>

            {/* pricing wrapper */}
            <div className='pricing-wrapper'>

              {/* single item */}
              <div className="single-features-item pricing-item comment-style">
                <div className="icon">
                  <img src={chatbot} alt="comment" />
                </div>
                <div className="text-center border-bottom">
                  <div className="plan-name">Standard</div>
                  <div className="discriptive">Perfect for Small Businesses</div>
                  <div className="price">
                    <span className="notranslate"><span>$</span><span className="livechat-adv-numb">13.5</span></span>
                  </div>
                  <div className="plan-det">Per Agent/Month</div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li> <BsCheck2 /> Facebook Messenger</li>
                    <li> <BsCheck2 /> Department Management</li>
                    <li> <BsCheck2 /> Auto Triggers</li>
                    <li> <BsCheck2 /> Proactive Chat</li>
                    <li> <BsCheck2 /> Chat Monitoring</li>
                    <li> <BsCheck2 /> Canned Response </li>
                    <li> <BsCheck2 /> File Transfer</li>
                    <li> <BsCheck2 /> Chat Transfer</li>
                    <li> <BsCheck2 /> Single Website Integration</li>
                    <li> <BsCheck2 /> Bit 256 SSL Encryption</li>
                    <li> <BsCheck2 /> See all features</li>
                  </ul>
                </div>
                <button className='pricing-buy-button'>Buy Now</button>
              </div>

              {/* single item */}
              <div className="single-features-item pricing-item ai-style">
              <div className="icon">
                  <img src={ai} alt="comment" />
                </div>
                <div className="text-center border-bottom">
                  <div className="plan-name">Advanced</div>
                  <div className="discriptive">Ideal for Growing Businesses</div>
                  <div className="price">
                    <span className="notranslate"><span>$</span><span className="livechat-adv-numb">22.5</span></span>
                  </div>
                  <div className="plan-det">Per Agent/Month</div>
                </div>
                <div className="pricing-features">
                  <ul>
                    <li> <BsCheck2 /> Facebook Messenger</li>
                    <li> <BsCheck2 /> Department Management</li>
                    <li> <BsCheck2 /> Auto Triggers</li>
                    <li> <BsCheck2 /> Proactive Chat</li>
                    <li> <BsCheck2 /> Chat Monitoring</li>
                    <li> <BsCheck2 /> Canned Response </li>
                    <li> <BsCheck2 /> File Transfer</li>
                    <li> <BsCheck2 /> Chat Transfer</li>
                    <li> <BsCheck2 /> Single Website Integration</li>
                    <li> <BsCheck2 /> Bit 256 SSL Encryption</li>
                    <li> <BsCheck2 /> See all features</li>
                  </ul>
                </div>
                <button className='pricing-buy-button'>Buy Now</button>
              </div>

              {/* single item */}
              <div className="single-features-item pricing-item analysis-style">
                <div className="icon">
                    <img src={analysis} alt="comment" />
                  </div>
                  <div className="text-center border-bottom">
                    <div className="plan-name">Enterprise</div>
                    <div className="discriptive">Best for Enterprise Teams</div>
                    <div className="price">
                      <span className="notranslate"><span>$</span><span className="livechat-adv-numb">45.5</span></span>
                    </div>
                    <div className="plan-det">Per Agent/Month</div>
                  </div>
                  <div className="pricing-features">
                    <ul>
                      <li> <BsCheck2 /> Facebook Messenger</li>
                      <li> <BsCheck2 /> Department Management</li>
                      <li> <BsCheck2 /> Auto Triggers</li>
                      <li> <BsCheck2 /> Proactive Chat</li>
                      <li> <BsCheck2 /> Chat Monitoring</li>
                      <li> <BsCheck2 /> Canned Response </li>
                      <li> <BsCheck2 /> File Transfer</li>
                      <li> <BsCheck2 /> Chat Transfer</li>
                      <li> <BsCheck2 /> Single Website Integration</li>
                      <li> <BsCheck2 /> Bit 256 SSL Encryption</li>
                      <li> <BsCheck2 /> See all features</li>
                    </ul>
                  </div>
                  <button className='pricing-buy-button'>Buy Now</button>
              </div>

            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default PricingScreen