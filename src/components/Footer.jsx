import React from 'react'
import './Footer.css'
function Footer() {
   const currentYear = new Date().getFullYear(); 
  return (
    <div className='footer-container'>
      <div className='footer-info'>
        <div className='footer-left'>
          <h1> ADDRESS</h1>
          <p><span>8756 Warner Ave </span>
          <br></br>Fountain Valley, 
          CA 92708</p>
        </div>
        <div className='footer-middle'>
          <h1> HOURS </h1>
          <p> Tuesday - Saturday   12PM - 8PM</p>
          <p> Sunday - Monday    Closed</p>
        </div>
        <div className='footer-right'>
          <h1> CONTACT US </h1>
          <p>(714) 847-4777  </p>
        </div>
        <div>
        </div>
      </div>
      <div className='footer-copyright'>
        <p>&copy; {2024} Eighth Element Tattoo</p>
      </div>
    </div>
  )
}

export default Footer
