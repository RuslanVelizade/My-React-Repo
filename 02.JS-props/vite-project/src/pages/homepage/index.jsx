import React from 'react'
import UsersTable from '../../components/table' 
import "./index.scss"
const Home = (props) => {
    console.log(props);
  return (
      <>
      <section id="home">
        <div className="container">
          <div className="home">
          <div>
          <UsersTable users = {props.users}/>
        </div>
          </div>
        </div>
          </section>
          
      </>
  )
}

export default Home