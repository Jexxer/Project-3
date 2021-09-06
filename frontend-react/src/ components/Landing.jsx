import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'
import Header from './Header';
import '../css/Landing.css';
import Dashboard from './Dashboard'



function Landing () {
 const [email, setEmail] = useState('')
 const [password, setPassword]= useState ('')
  const memory = useHistory ();
  useEffect(() => {
    if (localStorage.getItem ('user-info')) {
     

    }
  }, [])

  async function login () 
  {
    console.warn(email, password)
    let item = {email, password };
    let result=  await fetch("bugtrackerseeds.oi", {
   method: 'POST',
   headers: {
     "Content-Type": "application/json",
     "Accept": "application/json"

   },
   body: JSON.stringify(item)

  });
  result= await result.json();
  localStorage.setItem("user-info",JSON.stringify(result))
 
}
  
  return (
   
    <div className= "container">
    <div className="logincontainer">
    
        <Header/>

        <div className= "item"> 
    
     <input type="email" 
                       className="form" 
                       id="email" 
                       placeholder="Enter Email" onChange= {(e) =>setEmail (e.target.value)}
                />
  </div>
  <div className= "item"> 
       <input type="password" 
                        className="form" 
                        id="Password" 
                        placeholder="Enter Password" onChange= {(e) =>setPassword (e.target.value)}
                    />

</div>
<div className= "item"> 
<button onClick={login} className= 'button'> login</button>

  </div>

</div>

                    </div>



                    


 ) }

  
export default Landing;