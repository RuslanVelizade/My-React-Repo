import React from 'react'
import Button from '../../components/button'
import "./index.scss"
const Header = () => {
  return (
      <>
          <header>
              <div className="container">
                  <div className="header">
                      <p>This is Header</p>
                      <Button btnTextContent={"Header Button" } />
                  </div>
              </div>
          </header>
      </>
  )
}

export default Header