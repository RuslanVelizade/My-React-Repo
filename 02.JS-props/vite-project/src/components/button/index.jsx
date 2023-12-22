import React from 'react'
import "./index.scss"
const Button = (props) => {
  return (
      <>
      <button
      
        className={
          props.bg === 'green' ? 'primary-btn bg-orange' : 'primary-btn'
      }
      >
         {props.btnTextContent}
      </button>
      </>
  )
}

export default Button