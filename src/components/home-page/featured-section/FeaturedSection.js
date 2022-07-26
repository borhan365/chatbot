import React from 'react'
import {BsChatDots} from 'react-icons/bs'

// import images
import comment from '../../../assets/images/icons/comments.png'
import analysis from '../../../assets/images/icons/analysis.png'
import ai from '../../../assets/images/icons/artificial-intelligence.png'

function FeaturedAreaSection() {
  return (
    <>
      <section className='featured-section'>
        <div className='container'>
          <div className='featured-container'>

            {/* title */}
            <div className='section-title'>
              <span className='sub-title purple-color'>Key Features</span>
              <h2>Most probably included best features ever</h2>
            </div>

            {/* featured wrapper */}
            <div className='featured-wrapper'>

              {/* single item */}
              <div className="single-features-item comment-style">
                <div className="icon">
                  <img src={comment} alt="comment" />
                </div>
                <h3>Live Chat Handover</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
              </div>

              {/* single item */}
              <div className="single-features-item analysis-style">
                <div className="icon">
                  <img src={analysis} alt="analysis" />
                </div>
                <h3>Sentiment Analysis</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
              </div>

              {/* single item */}
              <div className="single-features-item ai-style">
                <div className="icon">
                  <img src={ai} alt="ai" />
                </div>
                <h3>Artificial Intelligence</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est non feugiat sagittis, donec.</p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FeaturedAreaSection