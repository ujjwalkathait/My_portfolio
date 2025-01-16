import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <div className='about-items'>
            <li className='about-item'>
              <div>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a very ambitious front-end developer with experience in building responsive .
                </p>
              </div>
            </li>
            <li className='about-item'>
              <div>
                <h3>ML Engineer</h3>
                <p align="LEFT">
                  I'm quiet confident, naturally curious, and perpetually working on
                  improving my chops one design problem at a time.
                </p>
              </div>
            </li>
            <li className='about-item'>
              <div>
                <h3>Problem Solver</h3>
                <p>
                  If I need to define myself in one sentence that would be a family
                  person, father of a beautiful daughter, a sports fanatic,
                  photography enthusiast, and tech-obsessed!!!
                </p>
              </div>
            </li>
          </div>
          <Link to="https://drive.google.com/file/d/1ZtraeJJcR-7mPkhS7-8UXoJNXp79mLtN/view?usp=drive_link" target='_blank' className="flat-button">
              RESUME
          </Link>
        </div>


        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About