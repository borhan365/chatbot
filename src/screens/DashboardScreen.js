import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import Header from '../components/header/Header'
import DashboardFullContent from '../components/dashboard/DashboardFullContent'
import DashboardSidebar from '../components/dashboard/DashboardSidebar'

function DashboardScreen() {
  return (
    <>
      <Header />
      <section className='dashboard-section'>
        <div className='container'>
            <div className="dashboard-wrapper">

              {/* dashboard sidebar */}
              <DashboardSidebar />

              {/* container */}
              <DashboardFullContent />
            </div>
        </div>
      </section>
    </>
  )
}

export default DashboardScreen