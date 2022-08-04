import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/wipdata-logo.png'
import burgerMenu from '../../assets/images/icons/menu-burger.svg'
import burgerMenu1 from '../../assets/images/icons/menu.png'
import burgerMenu2 from '../../assets/images/icons/menu-line.png'
import {Link, useNavigate} from 'react-router-dom'
import { BsXLg } from 'react-icons/bs'
import {FaBell} from 'react-icons/fa'
import {MdChevronRight} from 'react-icons/md'

function Header() {

  const [menuToggle, setMenuToggle] = useState(false);
  const [sticky, setSticky] = useState(window.scrollY); 
  const [notifyToggle, setNotifyToggle] = useState(false)
  const navigate = useNavigate()

  const headerSticky = () => {
    setSticky(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener('scroll', headerSticky)
    return () => window.removeEventListener('scroll', headerSticky)
  }, [])

  const isScrolled = sticky >= 1

  const isUser = localStorage.getItem('userInfo')

  // click to logout user
  const handleLogout = () => {
    localStorage.removeItem('userInfo')
    navigate('/')
  }


  return (
    <section className={isScrolled ? 'header-section active' : 'header-section'}>
      <div className='container'>
        <header>
          

          {/* chatbot credit */}
          <div className='login-logo header-logo'>
              <Link to="/">
                <img src={logo} alt="site logo" />
              </Link>
            <h2><span className='orangered'>Wip</span> Data</h2>
          </div>

          {/* mobile burger menu */}
          <div onClick={() => setMenuToggle(!menuToggle)} className="mobile-header-burger-menu desktop-hide">
            <img src={burgerMenu1} alt="burger" />
          </div>

          {/* navbar */}
          <nav className={menuToggle ? "active" : ""}>
            <BsXLg onClick={() => setMenuToggle(!menuToggle)} className='cross-mobile-navbar desktop-hide' />
            <ul className='navbar-wrappper'>
              <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
              <li className='nav-item'><Link to='/pricing' className='nav-link'>Pricing</Link></li>
              <li className='nav-item'>
                { isUser ? <Link onClick={handleLogout} to='#' className='nav-link logout-link'>Logout</Link> : <Link to='/login' className='nav-link'>LOGIN</Link> }
              </li>

              {
                isUser ?
                  <>
                    <li className='nav-item'><Link to='/dashboard' className='nav-link'>User Dashboard</Link></li>
                    <li className='nav-item admin-dashboard-li'><Link to='/admin' className='nav-link admin-dashboard-btn'>Chat Admin</Link></li>

                    {/* notification menu */}
                    <li className='nav-item' onClick={() => setNotifyToggle(!notifyToggle)}>
                    { !notifyToggle ?
                      <div className='notification-button'>
                        <FaBell /> 
                        <span className="ripple-wrap">
                          <span className="ripple"></span>
                          <span className="ripple"></span>
                          <span className="ripple"></span>
                          </span>
                      </div>
                      : 
                      <div className='notification-cancel'>
                          <BsXLg /> 
                      </div>
                      }

                      {/* notfication dropdown menu */}
                      <div className={ notifyToggle ? "nofication-dropdown-menu active" : "nofication-dropdown-menu" }>
                        <li>
                          <div className="nofication-item">
                            <h4>Hi Kash, Your domain will be expire soon.</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi a nemo architecto asperiores. Velit eveniet fugit corporis, culpa porro vero? 
                                <div className='notify-action-button'>
                                    <Link to="/dashboard">
                                      <span>Renew Now</span> 
                                    </Link> 
                                    <MdChevronRight />
                                </div>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="nofication-item">
                            <h4>Hi Kash, Your domain will be expire soon.</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi a nemo architecto asperiores. Velit eveniet fugit corporis, culpa porro vero? 
                                <div className='notify-action-button'>
                                    <Link to="/dashboard">
                                      <span>Renew Now</span> 
                                    </Link> 
                                    <MdChevronRight />
                                </div>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="nofication-item">
                            <h4>Hi Kash, Your domain will be expire soon.</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi a nemo architecto asperiores. Velit eveniet fugit corporis, culpa porro vero? 
                                <div className='notify-action-button'>
                                    <Link to="/dashboard">
                                      <span>Renew Now</span> 
                                    </Link> 
                                    <MdChevronRight />
                                </div>
                            </p>
                          </div>
                        </li>
                        <li>
                          <div className="nofication-item">
                            <h4>Hi Kash, Your domain will be expire soon.</h4>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi a nemo architecto asperiores. Velit eveniet fugit corporis, culpa porro vero? 
                                <div className='notify-action-button'>
                                    <Link to="/dashboard">
                                      <span>Renew Now</span> 
                                    </Link> 
                                    <MdChevronRight />
                                </div>
                            </p>
                          </div>
                        </li>

                      </div>
                    </li>
                  </>
               : ""
              }
              
            </ul>
          </nav>
        </header>
      </div>
    </section>
  )
}

export default Header 