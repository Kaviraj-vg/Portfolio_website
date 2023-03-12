import React from 'react'
import './about.css'
import {meabout} from '../../assets/assets'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <>
        <section id='about'>
          <h5>Get to Know</h5>
          <h2>About Me</h2>

          <div className="container about__container">
            <div ClassName="about__me">
              <div className="about__me-image">
                <img src={meabout} alt="About image"/>
              </div>
            </div>

            <div className="about__content">
              <div className="about__cards">
                <article className='about__card'>
                  <FaAward className='about__icon'/>
                  <h5>Experience</h5>
                  <small>Studying and looking forward for an internship offer</small>
                </article>

              
                <article className='about__card'>
                  <VscFolderLibrary className='about__icon'/>
                  <h5>Projects</h5>
                  <small>10+ completed projects </small>
                </article>
              </div>
              <p>
              A passionate student who is keen
to exploring new technologies and
improve skills and excited to do
projects with the ability to learn
things and work in fast changing
environment.
              </p>

              <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>
          </div>
        </section>
    </>
  )
}

export default About