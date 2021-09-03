import React from 'react';
import Header from './Header';
import '../css/Landing.css';


function Landing () {
  return (
   
    <div className= "container">
    <div className="logincontainer">
    
        <Header/>
    
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
<div className= "submit">
                    <button>submit</button>
</div>

</div>

                    </div>
                    


 ) }

export default Landing;