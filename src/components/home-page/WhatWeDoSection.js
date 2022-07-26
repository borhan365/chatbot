import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {Link} from 'react-router-dom'

// import icons
import iconOne from '../../assets/images/icons/icon1.png'
import iconTwo from '../../assets/images/icons/icon2.png'
import iconThree from '../../assets/images/icons/icon3.png'
import iconFour from '../../assets/images/icons/icon4.png'

function WhatWeDoSection() {
  return (
    <section className='what-we-do-section'>
      <div className="container">
        <div class="section-title">
          <span class="sub-title purple-color">What We Do</span>
          <h2>Our work is delivered by the best team in the world</h2>
        </div>
        <div className="what-we-do-wrapper">

          {/* item */}
          <div className="what-we-do-item">
            {/* thumb */}
            <div className="what-we-do-thumb">
              <img src={iconOne} alt="icon one" />
            </div>
            {/* content */}
            <div className="what-we-do-content">
              <h3>Incredible Infrastructure</h3>
              <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed est. Our work is delivered by the best team in the world.</p>
              <Link to="#">Learn More <MdKeyboardArrowRight /></Link>
            </div>
          </div>

          {/* item */}
          <div className="what-we-do-item">
            {/* thumb */}
            <div className="what-we-do-thumb">
              <img src={iconTwo} alt="icon two" />
            </div>
            {/* content */}
            <div className="what-we-do-content">
              <h3>Deadline Reminders</h3>
              <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed est. Our work is delivered by the best team in the world.</p>
              <Link to="#">Learn More <MdKeyboardArrowRight /></Link>
            </div>
          </div>

          {/* item */}
          <div className="what-we-do-item">
            {/* thumb */}
            <div className="what-we-do-thumb">
              <img src={iconThree} alt="icon three" />
            </div>
            {/* content */}
            <div className="what-we-do-content">
              <h3>Information Retrieval</h3>
              <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed est. Our work is delivered by the best team in the world.</p>
              <Link to="#">Learn More <MdKeyboardArrowRight /></Link>
            </div>
          </div>

          {/* item */}
          <div className="what-we-do-item">
            {/* thumb */}
            <div className="what-we-do-thumb">
              <img src={iconFour} alt="icon four" />
            </div>
            {/* content */}
            <div className="what-we-do-content">
              <h3>Simple Dashboard</h3>
              <p>Lorem ipsum dolor sit amet, conse ctetur adipi scing elit sed est. Our work is delivered by the best team in the world.</p>
              <Link to="#">Learn More <MdKeyboardArrowRight /></Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection