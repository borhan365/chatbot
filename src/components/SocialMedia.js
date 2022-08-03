import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs'
import {Link} from 'react-router-dom'

function SocialMedia() {
  return (
    <ul>
      <li>
        <Link to="#"> <BsFacebook /> </Link>
      </li>
      <li>
        <Link to="#"> <BsTwitter /> </Link>
      </li>
      <li>
        <Link to="#"> <BsLinkedin /> </Link>
      </li>
      <li>
        <Link to="#"> <BsYoutube /> </Link>
      </li>
    </ul>
  )
}

export default SocialMedia