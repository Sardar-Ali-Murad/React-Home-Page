import React from 'react'
import {Navbar,About,Services,Benefit,Join,Team,Vedios,Login,Ideas,FAQ,Footer}  from "./components/index"

const App = () => {
  return (
    <div className='main'>
      <Navbar/>
      <About/>
      <Services/>
      <Benefit/>
      <Join/>
      <Team/>
      <Vedios/>
      <Login/>
      <Ideas/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App
