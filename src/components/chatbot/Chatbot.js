import React, { useState, useEffect } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import { AiOutlineFullscreen } from 'react-icons/ai'
import { BsFillChatRightTextFill, BsFillEmojiSmileFill, BsThreeDotsVertical } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { MdAttachFile } from 'react-icons/md'
import notification from '../../assets/mp3/message.mp3'
import book from '../../images/icons/book.png'
import bot from '../../images/icons/robot.png'
import robot from "../../images/peoples/online-agent.jpg"
import logo from '../../images/wipdata-logo.png'

// product images
import MessageProduct from '../../components/MessageProduct'
import x from '../../images/icons/x.png'

function Chatbot() {

  let audio = new Audio("/message.mp3")

  const [toggle, setToggle] = useState(false); 
  const [resize, setResize] = useState(false);

  const handleToggle = (e) => {
    setToggle(!toggle);

    // play notification sound
    if(!toggle) {
      start();
    }
  }

  // resize handler
  const handleResize = () => {
    setResize(!resize)
  }

  // play massege notification
  const start = () => {
    audio.play()
  }

  return (
    <>
      <div className={resize ? "chatbot-widget-wrapper full-screen" : "chatbot-widget-wrapper"}>
          {/* chatbot widget wrapper */}
          <div className={toggle ? "chatbot-widget active" : "chatbot-widget"}>
            
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

                  {/* chatbot credit */}
                  <div className='chatbot-creator'>
                    <p>Powered by</p>
                    <a href="https://www.wipdata.com/" target="_blank" rel="noreferrer">
                      <img src={logo} alt="site logo" />
                    </a>
                  </div>

                  <div className='chatbot-widget-header-right-options'>
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
            <div className="chat-conversation-wrapper">
              <ul className='message-body'>

                {/* plain text bubble */}
                <li className='message-bubble-agent'>
                  <span>Hi, I'm Tidio Chatbot</span>
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
                <li className="message-product-carousel">
                  <MessageProduct />
                </li>

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
          {/* if resize is true the hide chatbot icon */}
          {
            resize ? "" : <div className='chatbot-icon' onClick={handleToggle}>
            {toggle ? <img src={x} alt="x" /> : <BsFillChatRightTextFill />}
          </div>
          }
          <ReactAudioPlayer
            src={audio}
            controls
            className='audio-hidden'
          />
      </div>
    </>
  )
}

export default Chatbot