import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-h.png'
import Background from '../Background'
import Logo from './Logo'
import './index.scss'


const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['j',' ' ,'j', 'w', 'a', 'l', ',']
  const jobArray = [
    't',
    'e',
    'c',
    'h',
    ' ',
    ' ',
    'e',
    'n',
    't',
    'h',
    'u',
    's',
    'i',
    'a',
    's',
    't',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <Background>
          <div className="text-zone">
            <h1>
              <span className={letterClass}>H</span>
              <span className={`${letterClass} _12`}>i</span>
              <span className={`${letterClass} _13`}>,</span>
              <br />
              <span className={`${letterClass} _14`}>I</span>
              <span className={`${letterClass} _15`}>'</span>
              <span className={`${letterClass} _16`}>m</span>
              <img
                src={LogoTitle}
                alt="JavaScript Developer Name, Web Developer Name"
                />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={15}
                />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={jobArray}
                idx={20}
              />
            </h1>
            <h2>Front End Developer / ML Engineer / Problem Solver</h2>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
          {/* <Logo /> */}
        </Background>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home