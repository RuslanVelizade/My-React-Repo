import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './layouts/header'
import Home from './pages/home'
import Footer from './layouts/footer'
import {Route,  Routes } from 'react-router-dom'
import AboutPage from './pages/about/about'
import ServicesPage from './pages/services/services'
import ContactPage from './pages/contact/contact'
import NotFound from './pages/not-found/index'
import Blog from "./pages/blog/blog";
import BlogDetails from './pages/blog/blog-details'
import Element from './pages/blog/element'
function App() {


  return (
    <>
     <Header/> 
      
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/about' element={ <AboutPage />} />
        <Route path='/services' element={<ServicesPage />} />
        <Route path='/blog/blog' element={<Blog/>} />
        <Route path='/blog/blogdetails' element={<BlogDetails/>} />
        <Route path='/blog/element' element={<Element/>} />
        <Route path='/contact' element={ <ContactPage/>} />
        <Route path='*' element={<NotFound/>} />
        </Routes>
     <Footer/>
    </>
  )
}

export default App
