import React from 'react'

// images
import partner1 from '../../assets/images/brands/partner2.png'
import partner2 from '../../assets/images/brands/partner6.png'
import partner3 from '../../assets/images/brands/partner3.png'
import partner4 from '../../assets/images/brands/partner4.png'
import partner5 from '../../assets/images/brands/partner5.png'
import partner6 from '../../assets/images/brands/partner7.png'

function PartnerSection() {
  return (
    <section className='partner-section'>
      <div className="container">
        <div className="partner-wrapper">
          {/* item */}
          <div className="partner-item">
            <img src={partner1} alt="partner one" />
          </div>
          {/* item */}
          <div className="partner-item">
            <img src={partner2} alt="partner two" />
          </div>
          {/* item */}
          <div className="partner-item">
            <img src={partner3} alt="partner three" />
          </div>
          {/* item */}
          <div className="partner-item">
            <img src={partner4} alt="partner four" />
          </div>
          {/* item */}
          <div className="partner-item">
            <img src={partner5} alt="partner five" />
          </div>

          {/* item */}
          <div className="partner-item">
            <img src={partner6} alt="partner six" />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default PartnerSection