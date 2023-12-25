import React from 'react'
import Counter from '../../components/counter'

import "./index.scss"
const Home = () => {
    
    <>
        
          <section id="home">
              <h1>Counter Example</h1>
              <Counter/>
              <br />
              <hr />
              <br />
              <div className='inputName'>
                  <input type="number" />
                  <span>Inc by Value</span>
              </div>
          </section>
      </>
  
}

export default Home