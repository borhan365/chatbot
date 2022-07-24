import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/wipdata-logo.png'
import {AiOutlineUser} from 'react-icons/ai'
import peopleOne from '../images/peoples/online-agent.jpg'
import Chatbot from '../components/chatbot/Chatbot'
import AdminMessageBody from '../components/chatbot/AdminMessageBody'
import { BsArrowsMove, BsBagCheck, BsBell, BsBookmarks, BsBox, BsBrightnessHigh, BsBug, BsChatLeftQuote, BsFolder2Open } from 'react-icons/bs'
import {RiGroupLine} from 'react-icons/ri'
import {BiAddToQueue} from 'react-icons/bi'

function AdminScreen() {
  return (
    <>
      <div className='admin-page-wrapper'>

        {/* header */}
        <div className='admin-header'>
          <ul>
            <li><Link to='/'><img src={logo} alt="logo" /></Link></li>
            <li><Link to='/admin'> <AiOutlineUser /> </Link></li>
            <li><Link to='/admin'> <BsChatLeftQuote /> </Link></li>
            <li><Link to='/admin'> <RiGroupLine /> </Link></li>
            <li><Link to='/admin'> <BiAddToQueue /> </Link></li>
            <li><Link to='/admin'> <BsBookmarks /> </Link></li>
            <li><Link to='/admin'> <BsFolder2Open /> </Link></li>
            <li><Link to='/admin'> <BsArrowsMove /> </Link></li>
            <li><Link to='/admin'> <BsBagCheck /> </Link></li>
            <li><Link to='/admin'> <BsBell /> </Link></li>
            <li><Link to='/admin'> <BsBox /> </Link></li>
            <li><Link to='/admin'> <BsBrightnessHigh /> </Link></li>
            <li><Link to='/admin'> <BsBug /> </Link></li>
          </ul>
        </div>

        {/* chat body */} 
        <div className='chat-body-wrapper'>
          {/* sidebar */}
          <div className='chat-body-sidebar'>
            <div className='chatbox-sidebar-wrap'>
              <div className='chat-title chat-title-big'>
                <h2>Chats</h2>
              </div>

              {/* search */}
              <div className='chat-body-search'>
                <input placeholder='Search messages or users' />
              </div>

              {/* featured chats */}
              {/* https://www.npmjs.com/package/react-alice-carousel */}
              <div className='featured-chats'>

                {/* item */}
                <div className='featured-chat-item'>
                  {/* thumb */}
                  <div className='featured-chat-thumb'>
                    <img src={peopleOne} alt="chat one" />
                    <div className="online-status"></div>
                  </div>
                  <p>Doris</p>
                </div>

                {/* item */}
                <div className='featured-chat-item'>
                  {/* thumb */}
                  <div className='featured-chat-thumb'>
                    <img src={peopleOne} alt="chat one" />
                    <div className="online-status"></div>
                  </div>
                  <p>Doris</p>
                </div>

                {/* item */}
                <div className='featured-chat-item'>
                  {/* thumb */}
                  <div className='featured-chat-thumb'>
                    <img src={peopleOne} alt="chat one" />
                    <div className="online-status"></div>
                  </div>
                  <p>Doris</p>
                </div>

                {/* item */}
                <div className='featured-chat-item'>
                  {/* thumb */}
                  <div className='featured-chat-thumb'>
                    <img src={peopleOne} alt="chat one" />
                    <div className="online-status"></div>
                  </div>
                  <p>Doris</p>
                </div>

                {/* item */}
                <div className='featured-chat-item'>
                  {/* thumb */}
                  <div className='featured-chat-thumb'>
                    <img src={peopleOne} alt="chat one" />
                    <div className="online-status"></div>
                  </div>
                  <p>Doris</p>
                </div>

                {/* item */}
                <div className='featured-chat-item'>
                  {/* thumb */}
                  <div className='featured-chat-thumb'>
                    <img src={peopleOne} alt="chat one" />
                    <div className="online-status"></div>
                  </div>
                  <p>Doris</p>
                </div>
              </div>

              {/* recent chat */}
              <div className='chat-title'>
                <h2>Recent Chat</h2>
              </div>

              {/* recent chat wrap */}
              <div className='recent-chat'>
                <ul className='recent-chat-wrap'>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleOne} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Patrick Hendricks</h2>
                          <p>okay sure😄👍</p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleOne} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Patrick Hendricks</h2>
                          <p>okay sure😄👍</p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleOne} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Patrick Hendricks</h2>
                          <p>okay sure😄👍</p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleOne} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Patrick Hendricks</h2>
                          <p>okay sure😄👍</p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleOne} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Patrick Hendricks</h2>
                          <p>okay sure😄👍</p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          {/* message body */}
          <div className='chat-message-body'>
            <AdminMessageBody />
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminScreen