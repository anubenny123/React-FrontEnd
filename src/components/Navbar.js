import React from 'react'
import './Navbar.css'
import round from './icons/round.svg'
import search from './icons/search.svg'
import notification from './icons/notification.svg'
import Img1 from './images/profile.png'

function Navbar() {
  return (
    <header>
      <nav className='Navbar'>
        <div className="nav-brand">
          <img className='nav-icon' src={round} alt="" />
          Admin
          <div className="search-box">
          <img src={search} alt="" />
          <input type="text" placeholder='Search here' />
        </div>
        </div>

        <div className="input-container">
          <img src={notification} alt="" />
          <img src={Img1} alt="" />
          <h4>Dr sibily </h4>
        </div>
        <span className='email'>xxx1xxxxxxxx@xxxmail.com</span>
      
       
      </nav>
    </header>
  )
}

export default Navbar