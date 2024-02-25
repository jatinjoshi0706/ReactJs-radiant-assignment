import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <>
      <div className='footer-container'>
        <div className='container'>
          <div className="categories">
            <h2>CATEGORIES</h2>
            <ul>
              <li><a href='#'>Web Builder</a></li>
              <li><a href='#'>Hosting</a></li>
              <li><a href='#'>Data Center</a></li>
              <li><a href='#'>Robotic-Automation</a></li>
            </ul>
          </div>
          <div className="contact">
            <h2>CONTACT</h2>
            <ul>
              <li><a href='#'>Contect</a></li>
              <li><a href='#'>Privacy Policy</a></li>
              <li><a href='#'>Terms Of Service</a></li>
              <li><a href='#'>Categories</a></li>
              <li><a href='#'>About</a></li>
            </ul>
          </div>
          <div className="country">
            <select name="country" >
              <option value="United States">United States</option>
              <option value="India">India</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
