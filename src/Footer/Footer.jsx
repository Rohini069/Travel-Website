import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    
    <footer>
      <div className="footer_content">
        <p>Contact us: contact@traveladventures.com</p>
        <div className="social_links">
            <ul id='foot_ul'>
                <li><a href='#' ><i className="fab fa-facebook"></i>Facebook</a></li>
                <li><a href='#'><i className="fab fa-twitter"></i>Twitter</a></li>
                <li><a href='#'><i className="fab fa-instagram"></i>Instagram</a></li>
            </ul>
        </div>
      </div>
    </footer>    
    </>
  )
}

export default Footer