import React from 'react'
import "./index.scss"
import {NavLink, useNavigate} from 'react-router-dom'
const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="flex-container">
  <div className="text-center">
    <h1>
      <span className="fade-in" id="digit1">
        4
      </span>
      <span className="fade-in" id="digit2">
        0
      </span>
      <span className="fade-in" id="digit3">
        4
      </span>
    </h1>
    <h3 className="fadeIn">PAGE NOT FOUND</h3>
        <button
          onClick={()=>
            {navigate("/")}
          }
          type="button" name="button">
      Return To Home
    </button>
  </div>
</div>


  )
}

export default NotFound