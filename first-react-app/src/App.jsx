
import './App.css'
import { FaBeer } from "react-icons/fa";
import Footer from './layout/footer'
import Header from './layout/header'
import Home from './components/homepages';

function App() {
  

  return (
    <>
      <div>
        <Header />
        <Home/>
        <Footer/>
      </div>
      
    </>
  )
}

export default App
