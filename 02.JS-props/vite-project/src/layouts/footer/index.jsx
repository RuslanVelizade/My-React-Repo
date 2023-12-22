import React from 'react'
import Button from '../../components/button'
import "./index.scss"
const Footer = () => {
  return (
      <>
          <footer>
              <div className="container">
                  <div className="footer">
                      <p>This is Footer</p>
                      <Button btnTextContent={"Footer Button"} bg={"green"} />
                  </div>
              </div>
      </footer>
      </>
  )
}

export default Footer