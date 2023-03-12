import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { BiMessageSquareDetail } from 'react-icons/bi'
import { useState } from 'react'
const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} ClassName={activeNav === '#' ? 'active' : '' }><AiOutlineHome/> </a>
      <a href="#about" onClick={() => setActiveNav('#about')} ClassName={activeNav === '#about' ? 'active' : '' }><AiOutlineUser/> </a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} ClassName={activeNav === '#experience' ? 'active' : '' }><BiBook/> </a>
      <a href="#services" onClick={() => setActiveNav('#services')} ClassName={activeNav === '#services' ? 'active' : '' }><RiServiceLine/> </a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} ClassName={activeNav === '#contact' ? 'active' : '' }><BiMessageSquareDetail/></a>
      </nav>
  )
}

export default Nav