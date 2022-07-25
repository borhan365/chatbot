import React, { useState } from 'react'
import {BsFillChatRightTextFill, BsThreeDotsVertical, BsChevronDown} from 'react-icons/bs'
import robot from "../../assets/images/peoples/online-agent.jpg"
import bot from '../../assets/images/icons/robot.png'
import logo from '../../assets/images/wipdata-logo.png'
import book from '../../assets/images/icons/book.png'
import {FaChevronDown, FaTelegramPlane} from 'react-icons/fa'
import {IoIosArrowDown} from 'react-icons/io'
import {HiPlus} from 'react-icons/hi'
import {MdAttachFile} from 'react-icons/md'
import {BsEmojiSmile, BsFillEmojiSmileFill, BsArrowsFullscreen} from 'react-icons/bs'
import {AiOutlineFullscreen} from 'react-icons/ai'

// product images
import productOne from '../../assets/images/products/res1.jpeg'
import x from '../../assets/images/icons/x.png'
import happyChat from '../../assets/images/peoples/happy-chat.jpg'
import MessageProduct from '../../components/MessageProduct'
import { Link } from 'react-router-dom'

function AdminMessageBody() {

  const [toggle, setToggle] = useState(false); 
  const [resize, setResize] = useState(false);

  const handleToggle = (e) => {
    setToggle(!toggle);
  }

  // resize handler
  const handleResize = () => {
    setResize(!resize)
  }

  return (
    <>
      <div className="chatbox-wrapper">
          {/* chatbot widget wrapper */}
          <div className="chatbox">
            
            {/* chat header */}
            <div className="chatbot-widget-header chatbox-header">

              {/* agent presence */}
              <div className="chatbot-widget-agent-precence">

                {/* agent left side */}
                <div className="chatbot-widget-header-left">
                  {/* agent avatar */}
                  <div className="chatbot-recipient-avatar chatbox-recipient-avatar">
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

                  {/* chatbot credit */}
                  <div className='chatbot-creator'>
                    <p>Powered by</p>
                    <a href="https://www.wipdata.com/" target="_blank" rel="noreferrer">
                      <img src={logo} alt="site logo" />
                    </a>
                  </div>

                  <div className='chatbot-widget-header-right-options chatbox-header-right-options'>
                    {/* options */}
                    <div className='chatbot-widget-options'>
                      <BsThreeDotsVertical />
                    </div>

                    {/* resize */}
                    <div className='chatbot-widget-minimize' onClick={handleResize}>
                      <AiOutlineFullscreen />
                    </div>

                    {/* minimize */}
                    <div className="chatbot-widget-minimize" onClick={handleToggle}>
                      <IoIosArrowDown />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* chat conversation group body */}
            <div className="chat-conversation-wrapper chatbox-conversation">
              <ul className='message-body'>

                {/* plain text bubble */}
                <li className='message-bubble-agent'>
                  <span>Hi, I'm WipData Chatbot</span>
                  <img src={bot} alt="bot" />
                </li>
                <div class="messageTimestamp fade-enter-done">Yesterday, 20:00</div>


                {/* message by visitor */}
                <li className="message-bubble-visitor">
                  <img src={book} alt="book" />
                  <span>Help Center</span>
                </li>

                {/* message by visitor */}
                <li className="message-bubble-visitor">
                  <span>Can I book new room?</span>
                </li>

                {/* plain text bubble */}
                <li className='message-bubble-agent'>
                  <span>Sure, Here is our available rooms. Please click and <button className='btn'>Book now</button></span>
                </li>

                {/* time slot */}
                <li className="message-day-slot">
                  <div className='message-day-slot-wrap'>
                    <li className="message-day-slot-item">1</li>
                    <li className="message-day-slot-item">2</li>
                    <li className="message-day-slot-item">3</li>
                    <li className="message-day-slot-item">4</li>
                    <li className="message-day-slot-item">5</li>
                    <li className="message-day-slot-item">6+</li>
                  </div>
                </li>

                {/* message by visitor */}
                <li className="message-bubble-visitor">
                  {/* <img src={book} alt="book" /> */}
                  <span>Show me the popular products</span>
                </li>

                {/* plain text bubble */}
                <li className='message-bubble-agent'>
                  <span>Here is last 30 days most popular sales products</span>
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
                {/* <li className="message-product-carousel">
                  <MessageProduct />
                </li> */}

                {/* message by agent */}
                <li className="message-bubble-agent">
                  {/* <img src={book} alt="book" /> */}
                  <span>Thanks for your recent purchase. We hope you love it. If you do, would you considar posting an online review? This helps us to continue providing great products and help potential buyers to make confident decision.</span>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  {/* <img src={book} alt="book" /> */}
                  <span>Please leave a review about our store on Facebook 😊<a href='https://www.facebook.com/WipData/'>https://www.facebook.com/WipData/ </a></span>
                </li>

                {/* message by visitor */}
                <li className="message-bubble-visitor">
                  {/* <img src={book} alt="book" /> */}
                  <span>What is your office hours?</span>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  {/* <img src={book} alt="book" /> */}
                  <span>Here is our office hour</span>
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

                {/* message by agent */}
                <li className="message-bubble-agent">
                  {/* <img src={book} alt="book" /> */}
                  <span>Would you like to personalize your order with gift option or customer engraving?</span>
                </li>

                {/* time slot */}
                <li className="message-day-slot">
                  <div className='message-day-slot-wrap'>
                    <li className="message-day-slot-item active">Yes, Please</li>
                    <li className="message-day-slot-item">No thanks</li>
                  </div>
                </li>

                {/* message by visitor */}
                <li className="message-bubble-visitor">
                  <span>Yes, Please.</span>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  <span>Ok I'm transferning to Anna.</span>
                </li>

                {/* message by agent */}
                <li className="message-bubble-agent">
                  <img src={bot} alt="rob" />
                  <span>Hi, This is Anna. How would you like to personalize your order?</span>
                </li>

              </ul>
            </div>

            {/* chat footer */}
            <div className="chatbot-footer chatbox-footer">
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
      </div>
    </>
  )
}

export default AdminMessageBody