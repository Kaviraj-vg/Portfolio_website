import React from 'react'
import './portfolio.css'
import {portfolio1} from '../../assets/assets'
import {portfolio2} from '../../assets/assets'
import {portfolio3} from '../../assets/assets'
import {portfolio4} from '../../assets/assets'
import {portfolio5} from '../../assets/assets'

const data = [
  {
    id: 1,
    image: {portfolio1},
    title: 'Fantasy Cricket League',
    github: 'https://github.com/Kaviraj-vg/Fantasy-Cricket-League-Game'
  },
  {
    id: 2,
    image: {portfolio2},
    title: 'Make My Journey',
    github: 'https://github.com/Kaviraj-vg/Fantasy-Cricket-League-Game'
  },
  {
    id: 3,
    image: {portfolio3},
    title: 'Cricography',
    github: 'https://github.com/Kaviraj-vg/Fantasy-Cricket-League-Game'
  },
  {
    id: 4,
    image: {portfolio4},
    title: 'Celebrity Image Classifier',
    github: 'https://github.com/Kaviraj-vg/Fantasy-Cricket-League-Game'
  }
]




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title}/>
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">

          <a href={github } className='btn' target='_blank'>Github</a>
          </div>
          
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio