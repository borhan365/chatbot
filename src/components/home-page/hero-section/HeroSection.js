import React from 'react'
import FeaturedThumb from '../../../assets/images/bg/hero-one.png'
import bigRobot from '../../../assets/images/bg/big-robot.png'
import bigRobotTwo from '../../../assets/images/bg/big-robot-two.png'
import chatting from '../../../assets/images/bg/chatting.png'

function HeroSection() {
  return (
    <>
      <section className='hero-section'
        // style={{  
        //   backgroundImage: `url(${FeaturedThumb})`,
        //   backgroundPosition: 'top',
        //   backgroundSize: 'cover',
        //   backgroundRepeat: 'no-repeat'
        // }}
      >
        <div className='container'>
          <div className='hero-row'>
            <div className='hero-col-6'>
              <div className='hero-content-wrap'>
                <span class="sm-title">Get Ready! AI Soluation to Improve Business Growth</span>
                <h1>AI Solutions to more Business profit in</h1>
                <span className='highlight-text'>Chatbot Business</span>
                
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut culpa nulla ipsum amet a ab neque. Odio impedit inventore nemo aliquid eius ad? Veniam perferendis iste odio officiis.</p>
                <div className='hero-buttons'>
                  <a href='#'>
                    <button className='btn hero-service-button'>Our Services</button>
                  </a>
                  <a href='#'>
                    <button className='btn hero-contact-button'>Contact Us</button>
                  </a>
                </div>
              </div>
            </div>
            <div className='hero-col-6 hero-thumb'>
              <img src={chatting} alt="robot" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default HeroSection