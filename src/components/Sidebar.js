import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import dashboard from './icons/dasboard.svg'
import patience from './icons/patience.svg'
import doctor from './icons/doctor.svg'
import receptionist from './icons/receptionists.svg'
import settings from './icons/settings.svg'
import logout from './icons/logout.svg'

function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        <ul className='sidebar-nav'>
          <li className='Menu-items'>
            <img height={25} src={dashboard} alt="" />
            <Link className='Menu-link'  to='/dashboard' >Dashboard</Link>
            
            </li>
          <li className='Menu-items'>
            <img src={patience} alt="" />
             <Link className='Menu-link' to='/patince'> patience</Link> 
              </li>
          <li className='Menu-items'>
            <img src={doctor} alt="" />
           <Link className='Menu-link'  to='/doctor'>Doctor</Link>   
            </li>
          <li className='Menu-items'>
            <img src={receptionist} alt="" />
           <Link className='Menu-link'   to='/receptionist'>Receptionist</Link>  
            </li>
            <li className='Menu-items'>
              <img src={settings} alt="" />
              settings
              </li>
            <li  className='Menu-items'>
              <img src={logout} alt="" />
              <Link className='Menu-link' to='/'>logout</Link>
              
             
              </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar