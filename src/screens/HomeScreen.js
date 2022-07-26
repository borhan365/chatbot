import React, { useState } from 'react'
import Header from '../components/header/Header'

// product images
import Chatbot from '../components/chatbot/Chatbot'
import happyChat from '../assets/images/peoples/happy-chat.jpg'
import HeroSection from '../components/home-page/hero-section/HeroSection';
import FeaturedSection from '../components/home-page/featured-section/FeaturedSection';
import GoalSection from '../components/home-page/GoalSection';


function HomeScreen() {

  const [toggle, setToggle] = useState(false); 

  const handleToggle = (e) => {
    setToggle(!toggle);
  }

  return (
    <>
      <Header />
        <HeroSection />
        <FeaturedSection />
        <GoalSection />
      <Chatbot />
    </>
  )
}

export default HomeScreen