import React from 'react'
import { Link } from 'react-router-dom'
import natureIcon from '../assets/nature.jpg'


const Home = () => {
  return (
    <div>
        <img src={natureIcon} alt="" />
        <p>Home</p>
        <br />
        <button><Link to={'/about'}>about</Link></button>
        <br />
        <button><Link to={'/profile'}>profile</Link></button>
    </div>
  )
}

export default Home