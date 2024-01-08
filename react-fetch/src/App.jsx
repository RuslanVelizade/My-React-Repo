import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './layouts/header'
import { Route, Routes } from "react-router-dom";
import Home from '../../03.Optional-react/src/pages/home'
import HomePage from './pages/homepage'
import AboutPage from './pages/aboutpage'
import ProductsPage from './pages/productspage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={ <HomePage />} />
        <Route path='/about' element={ <AboutPage />} />
        <Route path='/products' element={<ProductsPage />} />
        
      </Routes>
      
    </>
  )
}

export default App
