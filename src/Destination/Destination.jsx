import React from 'react'
import './Destination.css'
const Destination = () => {
  return (
    <>
    <div id="carouselExampleCaptions" class="carousel slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://plus.unsplash.com/premium_photo-1682628191403-93af6e7388e7?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="d-block w-100" alt="..." height={500}/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Statue of Liberty,New York</h3>
        <p>The statue is a figure of Libertas, the Roman goddess of liberty. She holds a torch above her head with her right hand, and in her left hand carries a tabula ansata inscribed JULY IV MDCCLXXVI (July 4, 1776, in Roman numerals), the date of the U.S. Declaration of Independence.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1587135941948-670b381f08ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGFqJTIwbWFoYWx8ZW58MHx8MHx8fDA%3D" class="d-block w-100" alt="..." height={500}/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Taj Mahal, India</h3>
        <p>The Taj Mahal is a white marble mausoleum located in Agra, India. It was built by Mughal emperor Shah Jahan in memory of his third wife, Mumtaz Mahal. The Taj Mahal is one of the most iconic buildings in the world and is a symbol of love and devotion. </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1608037521244-f1c6c7635194?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGhlJTIwZ3JlYXQlMjB3YWxsJTIwb2YlMjBjaGluYXxlbnwwfHwwfHx8MA%3D%3D" class="d-block w-100" alt="..." height={500}/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Great Wall of China,China</h3>
        <p>The Great Wall of China is a series of fortifications that were built over centuries to protect the Chinese Empire from invaders. It is one of the longest man-made structures in the world and is a UNESCO World Heritage Site. </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.unsplash.com/photo-1512813389649-acb9131ced20?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2hpY2glQzMlQTluJTIwSXR6JUMzJUExJTJDJTIwTWV4aWNvfGVufDB8fDB8fHww" class="d-block w-100" alt="..." height={500}/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Chichen Itza, Mexico</h3>
        <p>Chichen Itza is an ancient Mayan city located in the Yucatán Peninsula of Mexico. It was one of the most important Mayan centres during the Classic period (250-900 AD). </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://plus.unsplash.com/premium_photo-1675975678138-9413779a753a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q29sb3NzZXVtJTJDJTIwSXRhbHl8ZW58MHx8MHx8fDA%3D" class="d-block w-100" alt="..." height={500}/>
      <div class="carousel-caption d-none d-md-block">
        <h3>Colosseum, Italy</h3>
        <p>The Colosseum is an ancient amphitheatre located in the centre of Rome. It was built in the first century AD and was used for gladiatorial contests, public executions, and other events.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
    </>
  )
}

export default Destination