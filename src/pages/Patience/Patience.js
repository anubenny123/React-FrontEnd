import React from 'react'
import './Patience.css'
import search from './icons/search.svg'
import vector from './icons/vector.svg'
import box from './icons/box.svg'
import filter from './icons/filter.svg'


function Patience() {
  return (

    <div>
      <p>Total patience</p>
      <div className="section">
        <h4>Your paitence</h4>


        <div className="filter-icons">
          <div className="icon"><img src={search} alt="" /></div>
          <div className='vector'><img src={vector} alt="" /> </div>
          <div className='box'><img src={box} alt="" /></div>
          <div className='fil-icon'><img src={filter} alt="" />filter</div>
        </div>



        <div className="table-sec">
          <table>
            <thead>
              <th>#OP No.</th>
              <th>Name</th>
              <th>Treatment</th>
              <th>Doctor</th>
              <th>Status</th>
              <th>Amount</th>
              <th>Paid Amount</th>
              <th>Due Amount</th>
            </thead>
          
            <tr>
              <td>002</td>
              <td>David Ahmedh</td>
              <td>Root Canal</td>
              <td>Dr. Siby</td>
              <td><button className='cd-1'>Completed</button></td>
              <td>$1000</td>
              <td>$1000</td>
              <td><button className='bt-1'>$1000</button></td>
            </tr>
            <tr>
            <td>002</td>
            <td>David Ahmedh</td>
            <td>Root Canal</td>
            <td>Dr. Siby</td>
            <td><button className='cd-2'>Completed</button></td>
            <td>$1000</td>
            <td>$1000</td>
            <td><button className='bt-2'>$1000</button></td>
          </tr>
            <tr>
            <td>002</td>
            <td>David Ahmedh</td>
            <td>Root Canal</td>
            <td>Dr. Siby</td>
            <td><button className='cd-3'>Completed</button></td>
            <td>$1000</td>
            <td>$1000</td>
            <td><button className='bt-3'>$1000</button></td>
        </tr> 
        <tr>
            <td>002</td>
            <td>David Ahmedh</td>
            <td>Root Canal</td>
            <td>Dr. Siby</td>
            <td><button className='cd-4'>Completed</button></td>
            <td>$1000</td>
            <td>$1000</td>
            <td><button className='bt-4'>$1000</button></td>
        </tr> 
        <tr>
            <td>002</td>
            <td>David Ahmedh</td>
            <td>Root Canal</td>
            <td>Dr. Siby</td>
            <td><button className='cd-5'>Completed</button></td>
            <td>$1000</td>
            <td>$1000</td>
            <td><button className='bt-5'>$1000</button></td>
        </tr> 
        <tr>
            <td>002</td>
            <td>David Ahmedh</td>
            <td>Root Canal</td>
            <td>Dr. Siby</td>
            <td><button className='cd-6'>Completed</button></td>
            <td>$1000</td>
            <td>$1000</td>
            <td><button className='bt-6'>$1000</button></td>
        </tr> 


          </table>
        </div>

      </div>
    </div>
  )
}

export default Patience