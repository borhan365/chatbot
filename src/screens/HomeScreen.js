import React from 'react'
import {BsFillChatRightTextFill, BsThreeDotsVertical, BsChevronDown} from 'react-icons/bs'
import robot from "../images/peoples/online-agent.jpg"
import bot from '../images/icons/robot.png'
import book from '../images/icons/book.png'
import {FaChevronDown, FaTelegramPlane} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
import {HiPlus} from 'react-icons/hi'
import {MdAttachFile} from 'react-icons/md'
import {BsEmojiSmile, BsFillEmojiSmileFill} from 'react-icons/bs'

// product images
import productOne from '../images/products/res1.jpeg'
import MessageProduct from '../components/MessageProduct'


function HomeScreen() {
  return (
    <>
      <section className='chatbot-section'>
        <div className='container'>

          <div className="chatbot-widget-wrapper">
            {/* chatbot widget wrapper */}
              <div className='chatbot-widget'>
                
                {/* chat header */}
                <div className="chatbot-widget-header">

                  {/* agent presence */}
                  <div className="chatbot-widget-agent-precence">

                    {/* agent left side */}
                    <div className="chatbot-widget-header-left">
                      {/* agent avatar */}
                      <div className="chatbot-recipient-avatar">
                          <img src={robot} alt="agent avatar" />
                          <div className="online-status"></div>
                      </div>

                      {/* agent details */}
                      <div className="chatbot-widget-recipient-details">
                        <p>Chat with</p>
                        <h3>Jassica Smith</h3>
                      </div>
                    </div>

                    {/* agent right side options */}
                    <div className="chatbot-widget-header-right">

                      {/* options */}
                      <div className='chatbot-widget-options'>
                        <BsThreeDotsVertical />
                      </div>

                      {/* minimize */}
                      <div className="chatbot-widget-minimize">
                        <IoIosArrowDown />
                      </div>
                    </div>
                  </div>
                </div>

                {/* chat conversation group body */}
                <div className="chat-conversation-wrapper">
                  <ul className='message-body'>

                    {/* plain text bubble */}
                    <li className='message-bubble-agent'>
                      <span>Hi, I'm Tidio Chatbot</span>
                      <img src={bot} alt="bot" />
                    </li>
                    <div class="messageTimestamp fade-enter-done">Yesterday, 20:00</div>

                    {/* plain text bubble */}
                    <li className='message-bubble-agent'>
                      <span>Before we begin, please choose one of the topics.</span>
                    </li>
                    <div class="messageTimestamp fade-enter-done">Yesterday, 20:00</div>

                    {/* message by visitor */}
                    <li className="message-bubble-visitor">
                      <img src={book} alt="book" />
                      <span>Help Center</span>
                    </li>

                    {/* babble typing... */}
                    <li className="message-bubble-agent">
                      <span className="tying">Typing</span>
                      <span class="animate-typing">
                        <span class="dot ms-1"></span>
                        <span class="dot ms-1"></span>
                        <span class="dot ms-1"></span>
                      </span>
                    </li>

                    {/* product carousel */}
                    <li className="message-product-carousel">
                      <MessageProduct />
                    </li>

                    {/* time slot */}
                    <li className="message-day-slot">
                      <div className='message-day-slot-wrap'>
                        <li className="message-day-slot-item">Saturday</li>
                        <li className="message-day-slot-item">SunDay</li>
                        <li className="message-day-slot-item">Monday</li>
                        <li className="message-day-slot-item">Tusday</li>
                        <li className="message-day-slot-item">Wednesday</li>
                        <li className="message-day-slot-item">Thusday</li>
                        <li className="message-day-slot-item">Friday</li>
                      </div>
                    </li>

                  </ul>
                </div>

                {/* chat footer */}
                <div className="chatbot-footer">
                  <div className="chatbot-footer-input-box">
                    <input type="text" placeholder='Start conversation...' />
                    <button className='chatbot-send-message-button'>
                      <FaTelegramPlane />
                    </button>
                  </div>
                  <div className="chatbot-footer-options">
                    <HiPlus />
                    <MdAttachFile />
                    <BsFillEmojiSmileFill />
                  </div>
                </div>
              </div>

              {/* chatbot open icon */}
              <div className='chatbot-icon'>
                <BsFillChatRightTextFill />
              </div>
          </div>


        </div>
      </section>
    </>
  )
}

export default HomeScreen