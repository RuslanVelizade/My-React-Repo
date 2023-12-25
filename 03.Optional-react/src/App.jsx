import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './layouts/header'
import Home from './pages/home'
import Footer from './layouts/footer'

function App() {


  return (
    <>
     <Header/> 
     <Home/>
     <Footer/>
    </>
  )
}

export default App
