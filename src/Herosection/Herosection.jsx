import React, { useEffect } from 'react'
import './Herosection.css'
import { Link } from 'react-router-dom'

const Herosection = () => {
  useEffect(()=>{
    const header = document.getElementById('header');
    console.log('header',header);
    header.style.display='block';
})
  return (
    <>
      <div className="landing_container">
        <div className="landing_page">
          <h2>"Embark on a Journey Beyond Boundaries: Discover, Dream, Explore!"</h2>
          <button id='btn'><Link to='/dest'>Travel World</Link></button>
        </div>
      </div>
    
    </>
  )
}

export default Herosection