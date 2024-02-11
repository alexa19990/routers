import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../modules/Link.module.scss'
import natureIcon from '../assets/nature.jpg'

const Profile = () => {
  return (
    <div>
        <img src={natureIcon} alt="" />
        <p>Profile</p>
        <br />
        <button><Link to={'/'}>Home</Link></button>
        <br />
        <button><Link to={'/about'}>About</Link></button>
    </div>
  )
}

export default Profile