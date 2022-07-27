import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/images/wipdata-logo.png'
import {AiOutlineUser} from 'react-icons/ai'
import peopleOne from '../assets/images/peoples/chat-four.jpg'
import peopleTwo from '../assets/images/peoples/chat-one.jpg'
import peopleThree from '../assets/images/peoples/chat-two.jpg'
import peopleFour from '../assets/images/peoples/chat-one.jpg'
import peopleFive from '../assets/images/peoples/chat-five.jpg'
import Chatbot from '../components/chatbot/Chatbot'
import AdminMessageBody from '../components/chatbot/AdminMessageBody'
import { BsArrowsMove, BsBagCheck, BsBell, BsBookmarks, BsBox, BsBrightnessHigh, BsBug, BsChatLeftQuote, BsFolder2Open, BsImage, BsPlusCircle } from 'react-icons/bs'
import {RiGroupLine} from 'react-icons/ri'
import {BiAddToQueue} from 'react-icons/bi'
import {FiSearch} from 'react-icons/fi'

function AdminScreen() {

  const [width, setWidth] = useState(window.innerWidth);
  const [showChat, setShowChat] = useState(false);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

    console.log(isMobile)
    console.log("chat show" + showChat)

  return (
    <>
      <div className='admin-page-wrapper'>

        {/* header */}
        <div className='admin-header'>
          <ul>
            <li><Link to='/'><img src={logo} alt="logo" /></Link></li>
            <li><Link to='/admin'> <AiOutlineUser /> </Link></li>
            <li><Link to='/admin'> <BsChatLeftQuote className='active' /> </Link></li>
            <li><Link to='/admin'> <RiGroupLine /> </Link></li>
            <li><Link to='/admin'> <BsPlusCircle /> </Link></li>
            <li><Link to='/admin'> <BsBookmarks /> </Link></li>
            <li><Link to='/admin'> <BsFolder2Open /> </Link></li>
          </ul>
          <ul>
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
                <FiSearch />
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
                    <img src={peopleTwo} alt="chat one" />
                    <div className="online-status"></div>
                  </div>
                  <p>Mike</p>
                </div>

                {/* item */}
                <div className='featured-chat-item'>
                  {/* thumb */}
                  <div className='featured-chat-thumb'>
                    <img src={peopleThree} alt="chat one" />
                    <div className="online-status"></div>
                  </div>
                  <p>Jhon</p>
                </div>

                {/* item */}
                <div className='featured-chat-item'>
                  {/* thumb */}
                  <div className='featured-chat-thumb'>
                    <img src={peopleFour} alt="chat one" />
                    <div className="online-status"></div>
                  </div>
                  <p>Jassica</p>
                </div>

                {/* item */}
                <div className='featured-chat-item'>
                  {/* thumb */}
                  <div className='featured-chat-thumb'>
                    <img src={peopleFive} alt="chat one" />
                    <div className="online-status"></div>
                  </div>
                  <p>Bond</p>
                </div>

                {/* item */}
                <div className='featured-chat-item'>
                  {/* thumb */}
                  <div className='featured-chat-thumb'>
                    <img src={peopleOne} alt="chat one" />
                    <div className="online-status"></div>
                  </div>
                  <p>Rush</p>
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
                  <li className='recent-chat-item' onClick={() => setShowChat(!showChat) }>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleTwo} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Patrick Hendricks</h2>
                          <div className='recent-chatbox-user-chat'>
                            <BsImage /> 
                            <span>images</span>
                          </div>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleOne} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Mirta George</h2>
                          <p>Your service is awesome. </p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item active'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleFour} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Albert Rodarte</h2>
                          <p className='typing-in-chat'>typing <span class="animate-typing"><span class="dot ms-1"></span><span class="dot ms-1"></span><span class="dot ms-1"></span></span></p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleThree} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Designer</h2>
                          <p>Please call me immidiately</p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleFive} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Doris Brown</h2>
                          <p>👍</p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>
                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleTwo} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Patrick Hendricks</h2>
                          <div className='recent-chatbox-user-chat'>
                            <BsImage /> 
                            <span>images</span>
                          </div>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleOne} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Mirta George</h2>
                          <p>Your service is awesome. </p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item active'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleFour} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Albert Rodarte</h2>
                          <p className='typing-in-chat'>typing <span class="animate-typing"><span class="dot ms-1"></span><span class="dot ms-1"></span><span class="dot ms-1"></span></span></p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleThree} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Designer</h2>
                          <p>Please call me immidiately</p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleFive} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Doris Brown</h2>
                          <p>👍</p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>
                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleTwo} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Patrick Hendricks</h2>
                          <div className='recent-chatbox-user-chat'>
                            <BsImage /> 
                            <span>images</span>
                          </div>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleOne} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Mirta George</h2>
                          <p>Your service is awesome. </p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item active'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleFour} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Albert Rodarte</h2>
                          <p className='typing-in-chat'>typing <span class="animate-typing"><span class="dot ms-1"></span><span class="dot ms-1"></span><span class="dot ms-1"></span></span></p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleThree} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Designer</h2>
                          <p>Please call me immidiately</p>
                        </div>
                      </div>
                      <p>02:50</p>
                    </Link>
                  </li>

                  {/* item */}
                  <li className='recent-chat-item'>
                    <Link to="/admin">
                      <div className='recent-chat-item-content'>
                        {/* thumb */}
                        <div className='featured-chat-thumb'>
                          <img src={peopleFive} alt="chat one" />
                          <div className="online-status"></div>
                        </div>
                        {/* content */}
                        <div className='recent-chatbox-content'>
                          <h2>Doris Brown</h2>
                          <p>👍</p>
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
          <div className={showChat ? 'chat-message-body chatbox-message-body active' : 'chat-message-body chatbox-message-body'}>
            <AdminMessageBody />
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminScreen