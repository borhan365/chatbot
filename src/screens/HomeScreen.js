import React, { useState } from 'react'
import Header from '../components/header/Header'

// product images
import Chatbot from '../components/chatbot/Chatbot'
import happyChat from '../images/peoples/happy-chat.jpg'
import HeroSection from '../components/home-page/hero-section/HeroSection';


function HomeScreen() {

  const [toggle, setToggle] = useState(false); 

  const handleToggle = (e) => {
    setToggle(!toggle);
  }

  return (
    <>
      <Header />
        {/* <HeroSection /> */}
      <Chatbot />
    </>
  )
}

export default HomeScreen