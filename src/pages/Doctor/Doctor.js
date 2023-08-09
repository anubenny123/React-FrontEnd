import React from 'react'
import './Doctor.css'


function Doctor() {
  return (

  
     <div className="head">
      <h4 className='brand'>Doctors</h4>
    <div className='border-box'>
    <div className='photo-card'><h4 className='upload-text'>upload photo </h4> </div>
     <div className="Register-container">
      <div className="Register-card">
        <form action="">
          <label htmlFor="">ID</label>
          <input type="text"  placeholder='002132'/>
          <label htmlFor="">Password</label> 
          <input type="text" name="" id="" placeholder='xxxx' />
          <label htmlFor="">Name</label>
          <input type="text" name="" id=""  placeholder='pavin krishna'/>
          <label htmlFor="">Qulification</label>
          <input type="text" name="" id="" placeholder='Enter your Qulification' />
          <label htmlFor="">Target Assignment</label>
          <input type="text" placeholder='Dr siliby'/>
          <button>Save</button>
        </form>
      </div>
     </div>
     </div>
     
      
    
      
      
      </div>
     

    
  )
}

export default Doctor