import React from 'react'
import './Contact.css'
const Contact = () => {
  return (
    <>
      <div id="contact" className="contact">
      <h2 id='con_head'>Contact Us</h2>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required></textarea>
        
        <button id="con_submit" type="submit">Submit</button>
      </form>
    </div>
    </>
  )
}

export default Contact