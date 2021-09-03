import React from 'react'
import Header from './Header'




function Landing () {
  return (
   

    <div className="loginpage">
      <div className= "header">
        <Header/>
        </div>
     <input type="email" 
                       className="form" 
                       id="email" 
                       placeholder="Enter email"
                />

      
       <input type="password" 
                        className="form" 
                        id="Password" 
                        placeholder="Password"
                    />




                    </div>


 ) }

export default Landing;