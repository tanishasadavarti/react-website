import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Allroutes from './routes/Allroutes'
import Footer from './components/Footer'
import { Route, Router } from 'react-router-dom'

function App() {
  
  
  return (
    <>
     <Navbar />
     <Allroutes/>
     <Footer/>
    </>
  )
}

export default App
