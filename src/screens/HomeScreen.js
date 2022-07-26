import React, { useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer'

// product images
import Chatbot from '../components/chatbot/Chatbot'
import happyChat from '../assets/images/peoples/happy-chat.jpg'
import HeroSection from '../components/home-page/hero-section/HeroSection';
import FeaturedSection from '../components/home-page/featured-section/FeaturedSection';
import GoalSection from '../components/home-page/GoalSection';
import WhatWeDoSection from '../components/home-page/WhatWeDoSection';
import WhatWeOffer from '../components/home-page/WhatWeOffer';


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
        <WhatWeDoSection />
        <WhatWeOffer />
      <Chatbot />
      <Footer />
    </>
  )
}

export default HomeScreen