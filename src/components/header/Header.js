import React from 'react'
import logo from '../../assets/images/wipdata-logo.png'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <section className='header-section'>
      <div className='container'>
        <header>
          {/* logo */}
          {/* <div className='header-logo'>
            <a href='/'>
              <img src={logo} />
            </a>
          </div> */}

          {/* chatbot credit */}
          <div className='login-logo header-logo'>
              <Link to="/">
                <img src={logo} alt="site logo" />
              </Link>
            <h2><span className='orangered'>Wip</span> Data</h2>
          </div>

          {/* navbar */}
          <nav>
            <ul className='navbar-wrappper'>
              <li className='nav-item'><Link to='/' className='nav-link'>Home</Link></li>
              <li className='nav-item'><Link to='/' className='nav-link'>Business intelligence</Link></li>
              <li className='nav-item'><Link to='/' className='nav-link'>robotic process automation</Link></li>

              <li className='nav-item'><Link to='/' className='nav-link'>AI chatbot NLP</Link></li>

              <li className='nav-item'>
                <Link to='/login' className='nav-link'>Login</Link>
              </li>
              <li className='nav-item'><Link to='/admin' className='nav-link admin-dashboard-btn'>Admin Panel</Link></li>
            </ul>
          </nav>
        </header>
      </div>
    </section>
  )
}

export default Header 