import React from 'react'
import { Link } from 'react-router-dom'
import natureIcon from '../assets/nature.jpg'
import classes from '../modules/Link.module.scss'

const About = () => {
  return (
    <div>
        <img src={natureIcon} alt="" />
        <p>About</p>
        <br />
        <button><Link to={'/'}>Home</Link></button>
        <br />
        <button><Link to={'/profile'}>profile</Link></button>
    </div>
  )
}

export default About