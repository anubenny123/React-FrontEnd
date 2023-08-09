import React from 'react'
import './Dashboard.css'
import squre from './svg/squre.svg'
import bl from './svg/bl.svg'
import target from './svg/target.png'
import up from './svg/up.svg'
import up2 from './svg/up2.svg'
import up3 from './svg/up3.svg'
import arrow from './svg/arrow.svg'
function Dashboard() {
  return (
    <div className='dash-sec'>
      <h2 className='dash-brand'>Dashboard</h2>
      <p>Welcome back, Dr. Siby</p>

      <div className="rect-sec">
        <div className='rectangle-1'>
          <h5>Total Business Volume<img className='img1' src={squre} alt="" /></h5>
          <h3>$15,540.50</h3>
          <p> <img height={15} src={up} alt="" />   20% Compared to last month</p>
        </div>


        <div className='rectangle-2'>
          <h5>Completed BV   <img className='img2' src={bl} alt="" /></h5>
          <h3>$15,540.50</h3>
          <p> <img height={15} src={up2} alt="" />   20% Compared to last month</p>

        </div>

        <div className="rectangle-3">

          <h5>Uncompleted BV <img className='img3' src={bl} alt="" /> </h5>
          <h3>$15,540.50</h3>
          <p> <img height={15} src={up3} alt="" />  20% Compared to last month</p>

        </div>

        <div className="rectangle-4">

          <p> <img className='img4' src={target} alt="" />  Target</p>
          <span>
            <span class="large-font">72/</span>
            99<img height={12} src={arrow} alt="" />15% Target Completed
          </span>


        </div>


      </div>


      <h4 className='p1'>Patient Statistics</h4>

      <div className="dash-table">
        <h4> Total Patient </h4>
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
            <td><button className='c-1'>Completed</button></td>
            <td>$1000</td>
            <td>$1000</td>
            <td><button className='b-1'>$1000</button></td>
          </tr>
          <tr>
            <td>002</td>
            <td>David Ahmedh</td>
            <td>Root Canal</td>
            <td>Dr. Siby</td>
            <td><button className='c-2'>Completed</button></td>
            <td>$1000</td>
            <td>$1000</td>
            <td><button className='b-2'>$1000</button></td>
          </tr>
          <tr>
            <td>002</td>
            <td>David Ahmedh</td>
            <td>Root Canal</td>
            <td>Dr. Siby</td>
            <td><button className='c-3'>Completed</button></td>
            <td>$1000</td>
            <td>$1000</td>
            <td><button className='b-3'>$1000</button></td>
          </tr>
          <tr>
            <td>002</td>
            <td>David Ahmedh</td>
            <td>Root Canal</td>
            <td>Dr. Siby</td>
            <td><button className='c-4'>Completed</button></td>
            <td>$1000</td>
            <td>$1000</td>
            <td><button className='b-4'>$1000</button></td>
          </tr>
          <tr>
            <td>002</td>
            <td>David Ahmedh</td>
            <td>Root Canal</td>
            <td>Dr. Siby</td>
            <td><button className='c-5'>Completed</button></td>
            <td>$1000</td>
            <td>$1000</td>
            <td><button className='b-5'>$1000</button></td>
          </tr>
        </table>
      </div>
    </div>


  )
}

export default Dashboard