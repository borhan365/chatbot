import React from 'react'
import productOne from '../assets/images/products/res1.jpeg'
import productTwo from '../assets/images/products/res2.jpeg'
import productThree from '../assets/images/products/res3.jpeg'
import productFour from '../assets/images/products/res4.jpeg'
import productFive from '../assets/images/products/res5.png'
import Header from '../components/header/Header'
import Footer from '../components/footer'
import {BsStarFill, BsStarHalf} from  'react-icons/bs'

function ProductScreen() {
  return (
    <>
      <Header />
      <section className='product-section'>
        <div className="container">
          <div className="product-wrapper">

            {/* item */}
            <div className="product-item">
              <div className="product-thumb">
                <img src={productOne} alt="product one" />
              </div>
              <div className="product-content">
                <h2>Starter Hosting Packege</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, corrupti.</p>
                    <h3 className='product-price'>$200</h3>
                <div className="product-content-row">
                  <div>
                      <div className="product-review">
                      <ul>
                        <li>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                          <span>Out of (5)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* buy now button */}
                  <button className='product-buy-button'>Buy Now</button>
                </div>
              </div>
            </div>
            {/* item */}
            <div className="product-item">
              <div className="product-thumb">
                <img src={productTwo} alt="product two" />
              </div>
              <div className="product-content">
                <h2>Starter Hosting Packege</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, corrupti.</p>
                    <h3 className='product-price'>$200</h3>
                <div className="product-content-row">
                  <div>
                      <div className="product-review">
                      <ul>
                        <li>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                          <span>Out of (5)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* buy now button */}
                  <button className='product-buy-button'>Buy Now</button>
                </div>
              </div>
            </div>
            {/* item */}
            <div className="product-item">
              <div className="product-thumb">
                <img src={productThree} alt="product three" />
              </div>
              <div className="product-content">
                <h2>Starter Hosting Packege</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, corrupti.</p>
                    <h3 className='product-price'>$200</h3>
                <div className="product-content-row">
                  <div>
                      <div className="product-review">
                      <ul>
                        <li>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                          <span>Out of (5)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* buy now button */}
                  <button className='product-buy-button'>Buy Now</button>
                </div>
              </div>
            </div>
            {/* item */}
            <div className="product-item">
              <div className="product-thumb">
                <img src={productFour} alt="product four" />
              </div>
              <div className="product-content">
                <h2>Starter Hosting Packege</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, corrupti.</p>
                    <h3 className='product-price'>$200</h3>
                <div className="product-content-row">
                  <div>
                      <div className="product-review">
                      <ul>
                        <li>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                          <span>Out of (5)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* buy now button */}
                  <button className='product-buy-button'>Buy Now</button>
                </div>
              </div>
            </div>
            {/* item */}
            <div className="product-item">
              <div className="product-thumb">
                <img src={productFive} alt="product five" />
              </div>
              <div className="product-content">
                <h2>Starter Hosting Packege</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, corrupti.</p>
                    <h3 className='product-price'>$200</h3>
                <div className="product-content-row">
                  <div>
                      <div className="product-review">
                      <ul>
                        <li>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                          <span>Out of (5)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* buy now button */}
                  <button className='product-buy-button'>Buy Now</button>
                </div>
              </div>
            </div>
            {/* item */}
            <div className="product-item">
              <div className="product-thumb">
                <img src={productOne} alt="product one" />
              </div>
              <div className="product-content">
                <h2>Starter Hosting Packege</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, corrupti.</p>
                    <h3 className='product-price'>$200</h3>
                <div className="product-content-row">
                  <div>
                      <div className="product-review">
                      <ul>
                        <li>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                          <span>Out of (5)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* buy now button */}
                  <button className='product-buy-button'>Buy Now</button>
                </div>
              </div>
            </div>
            {/* item */}
            <div className="product-item">
              <div className="product-thumb">
                <img src={productTwo} alt="product two" />
              </div>
              <div className="product-content">
                <h2>Starter Hosting Packege</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, corrupti.</p>
                    <h3 className='product-price'>$200</h3>
                <div className="product-content-row">
                  <div>
                      <div className="product-review">
                      <ul>
                        <li>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                          <span>Out of (5)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* buy now button */}
                  <button className='product-buy-button'>Buy Now</button>
                </div>
              </div>
            </div>
            {/* item */}
            <div className="product-item">
              <div className="product-thumb">
                <img src={productThree} alt="product three" />
              </div>
              <div className="product-content">
                <h2>Starter Hosting Packege</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, corrupti.</p>
                    <h3 className='product-price'>$200</h3>
                <div className="product-content-row">
                  <div>
                      <div className="product-review">
                      <ul>
                        <li>
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarFill />
                          <BsStarHalf />
                          <span>Out of (5)</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* buy now button */}
                  <button className='product-buy-button'>Buy Now</button>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default ProductScreen