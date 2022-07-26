import React, { useState } from 'react'
import { AiOutlineDelete, AiOutlineUser } from 'react-icons/ai'
import { BsArchive, BsCameraVideo, BsFillEmojiSmileFill, BsXLg } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { HiPlus } from 'react-icons/hi'
import {VscArchive, VscMute} from 'react-icons/vsc'
import {GoMute} from 'react-icons/go'
import {BiVolumeMute} from 'react-icons/bi'
import { MdAttachFile, MdCall, MdVideoCall } from 'react-icons/md'
import book from '../../assets/images/icons/book.png'
import bot from '../../assets/images/icons/robot.png'
import robot from "../../assets/images/peoples/online-agent.jpg"
import logo from '../../assets/images/wipdata-logo.png'
import x from '../../assets/images/icons/x.png'

// product images
import { FiMoreVertical, FiPhoneCall, FiSearch } from 'react-icons/fi'
import happyChat from '../../assets/images/peoples/happy-chat.jpg'

function AdminMessageBody() {
  
  const [callToggle, setCallToggle] = useState(true);
  const [searchToggle, setSearchToggle] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [whichIcon, setWhichIcon] = useState('');

  // call cancle
  const callModel = (iconName) => {
    setCallToggle(!callToggle);
    setWhichIcon(iconName)
  }

  return (
    <>
      <div className="chatbox-wrapper">

        {/* call model */}
        <div className={callToggle ? "call-model-container" : "call-model-container active"}>
          <div className='call-model-wrapper'>
            <div className='call-user-avatar'>
              <img src={happyChat} alt="user on call" />
            </div>
            {/* user name */}
            <div className='call-user-content'>
              <h2>Doris Brown</h2>
              <p>Start { whichIcon == "audio" && "Audio" || whichIcon == "video" && "Video" } Call</p>
            </div>
            {/* user actions */}
            <div className='call-user-actions'>
              <div className='call-user-icon' onClick={callModel}>
                <BsXLg />
              </div>
              <div className='call-user-icon'>
              {whichIcon=="audio"&&<MdCall /> || whichIcon=="video" && <MdVideoCall />}
              {}
              </div>
            </div>
          </div>
        </div>

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

                  {/* visibility hidden */}
                  {/* search */}
                  <div className={searchToggle ? 'search-model active' : 'search-model'}>
                    <input placeholder='Search here' />
                    <BsXLg onClick={() => setSearchToggle(!searchToggle)} />
                  </div>

                  {/* dropdown menu */}
                  <div className={menuToggle ? 'dropdown-menu-wrapper active' : 'dropdown-menu-wrapper'}>
                    <ul>
                      <li>
                        <span>Archive</span> 
                        <VscArchive />
                      </li>
                      <li>
                        <span>Muted</span> 
                        <BiVolumeMute />
                      </li>
                      <li>
                        <span>Delete</span> 
                        <AiOutlineDelete />
                      </li>
                    </ul>
                  </div>

                  {/* chatbot credit */}
                  <div className='chatbot-creator'>
                    <p>Powered by</p>
                    <a href="https://www.wipdata.com/" target="_blank" rel="noreferrer">
                      <img src={logo} alt="site logo" />
                    </a>
                  </div>

                  <div className='chatbox-header-right-options'>
                    {/* search */}
                    <div className='chatbox-header-icon' onClick={() => setSearchToggle(!searchToggle)}>
                      <FiSearch />
                    </div>

                    {/* audio call */}
                    <div className='chatbox-header-icon' onClick={()=>callModel('audio')}>
                      <FiPhoneCall />
                    </div>

                    {/* video call */}
                    <div className="chatbox-header-icon" onClick={()=>callModel('video')}>
                      <BsCameraVideo />
                    </div>

                    <div className='chatbox-header-icon'>
                      <AiOutlineUser />
                    </div>

                    <div className='chatbox-header-icon' onClick={() => setMenuToggle(!menuToggle)}>
                      { !menuToggle ? <FiMoreVertical /> : <img src={x} alt="cancle" /> } 
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