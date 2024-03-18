import React from 'react'
import './App.css'
import Header from './Header/Header'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Destination from './Destination/Destination'
import Herosection from './Herosection/Herosection'
import Contact from './Contact/Contact'
import Error from './Herosection/Error/Error'
import Footer from './Footer/Footer'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Herosection/>} />
      <Route path='/dest' element={<Destination/>}  />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<Error/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
    </>
  )
}

export default App