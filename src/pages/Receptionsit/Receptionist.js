import React from 'react'
import './Receptionist.css'

function Receptionist() {
  return (

    <div className="head">
      <h4 className='brand'>Doctors</h4>
       <div className='container-box'>
        <div className="small-box"><h4>+ Add New Doctors</h4></div>
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Qualification</th>
                <th>Target</th>
                <th>Target Achieved</th>
              </tr>
              </thead>
              <tr>
                <td>002</td>
                <td>David Ahmedh</td>
                <td>Root Canal</td>
                <td>$1000</td>
                <td><button className='button-1' >$350/$2000</button></td>
              </tr>
              <tr>
                <td>002</td>
                <td>David Ahmedh</td>
                <td>Root Canal</td>
                <td>$1000</td>
                <td><button className='button-2'  >$350/$2000</button></td>
              </tr>
              <tr>
                <td>002</td>
                <td>David Ahmedh</td>
                <td>Root Canal</td>
                <td>$1000</td>
                <td><button className='button-3'>$350/$2000</button></td>
              </tr>
          </table>
        </div>
   </div>
    </div>
    
  
  )
}

export default Receptionist