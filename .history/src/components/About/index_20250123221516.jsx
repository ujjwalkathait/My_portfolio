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
// import{
//   faPaintbrush,
// } from '@fortawesome/free-solid-svg-icons'
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
            {/* <li className='about-item'>
              <div>
                <h3>Frontend Developer</h3>
                <p>
                  I'm a very ambitious front-end developer with experience in building responsive and optimized sites.
                </p>
              </div>
            </li>
            <li className='about-item'>
              <div>
                <h3>ML Engineer</h3>
                <p align="LEFT">
                  I'm quiet confident, naturally curious, and perpetually working on
                  improving my machine learning knowledge.
                </p>
              </div>
            </li>
            <li className='about-item'>
              <div>
                <h3>Problem Solver</h3>
                <p>
                  I love to solve problem and skilled in analyzing challenges and delivering efficient, innovative solutions.
                </p>
              </div>
            </li> */}
            <div className="card" style={{ "--color": "#ff88a6" }}>
            {/* <FontAwesomeIcon className= 'icon' icon={faPaintbrush} color='#ff88a6'/> */}
              <svg className='svg-outline' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M339.3 367.1c27.3-3.9 51.9-19.4 67.2-42.9L568.2 74.1c12.6-19.5 9.4-45.3-7.6-61.2S517.7-4.4 499.1 9.6L262.4 187.2c-24 18-38.2 46.1-38.4 76.1L339.3 367.1zm-19.6 25.4l-116-104.4C143.9 290.3 96 339.6 96 400c0 3.9 .2 7.8 .6 11.6C98.4 429.1 86.4 448 68.8 448L64 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0c61.9 0 112-50.1 112-112c0-2.5-.1-5-.2-7.5z"/></svg>
              <div className="title">
                Frontend Developer
              </div>
              <div className="detail">
                I'm a very ambitious front-end developer with experience in building responsive and optimized sites.
              </div>
            </div>
            <div className="card" style={{ "--color": "#ff88a6" }}>
              <i class="fa-solid fa-paintbrush"></i>
              <div className="title">
                Frontend Developer
              </div>
              <div className="detail">
                I'm a very ambitious front-end developer with experience in building responsive and optimized sites.
              </div>
            </div>
            <div className="card" style={{ "--color": "#ff88a6" }}>
              <i class="fa-solid fa-paintbrush"></i>
              <div className="title">
                Frontend Developer
              </div>
              <div className="detail">
                I'm a very ambitious front-end developer with experience in building responsive and optimized sites.
              </div>
            </div>
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