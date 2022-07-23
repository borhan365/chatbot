import React from 'react'
import logo from '../../images/wipdata-logo.png'

function Header() {
  return (
    <section className='header-section'>
      <div className='container'>
        <header>
          {/* logo */}
          <div className='header-logo'>
            <a href='/'>
              <img src={logo} />
            </a>
          </div>

          {/* navbar */}
          <nav>
            <ul className='navbar-wrappper'>
              <li className='nav-item'><a href='/' className='nav-link'>Home</a></li>
              <li className='nav-item'><a href='/' className='nav-link'>Business intelligence</a></li>
              <li className='nav-item'><a href='/' className='nav-link'>robotic process automation</a></li>
              <li className='nav-item'><a href='/' className='nav-link'>AI chatbot NLP</a></li>
              <li className='nav-item'><a href='/' className='nav-link'>Blogs</a></li>
              <li className='nav-item'><a href='/' className='nav-link'>Contact Us</a></li>
            </ul>
          </nav>
        </header>
      </div>
    </section>
  )
}

export default Header 