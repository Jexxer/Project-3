import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import "../css/Landing.css";


function Landing({ loggedInUser, setLoggedInUser, userInfo, setUserInfo }) {

  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");
  const [failedLogin, setFailedLogin] = useState("none")
  

  function login(username, password) {
    axios
      .get("https://bugtracker-api-v1.herokuapp.com/api/users")
      .then(function (res){
        const users = res.data
        for(let i = 0; i < users.length; i++){

          // check if username matches
          if(username === users[i].userName && password === users[i].password || username === users[i].email && password === users[i].password){
            //check that the password matches
            console.log('you logged in!')
            localStorage.setItem("loggedInUser", JSON.stringify(users[i].userName))
            localStorage.setItem("privLevel", JSON.stringify(users[i].privLevel))
            localStorage.setItem("lastLogin", JSON.stringify(Date.now()))
            localStorage.setItem("email", JSON.stringify(users[i].email))
            localStorage.setItem("profilePic", JSON.stringify(users[i].profilePic))
            localStorage.setItem("userId", JSON.stringify(users[i]._id))
            window.location.reload(false)
            break;
          } else {
            console.log(`Wrong info. Try again`)
          }
        }
        if(localStorage.getItem("loggedInUser") == ""){
          setFailedLogin("block")
        }
        console.log('finished api call, now checking for errors')
      })
      .catch(function (error){
        console.log(error)
      })
  }

  function handleSubmit(e){
    e.preventDefault()
    login(usernameInput, password)
    resetFields()
  }

  function resetFields(){
    setPassword("")
    setUsernameInput("")
  }

  return(
    <div className="landing-page-container">

      <div className="login-form-container">

        <h1 className="login-text">BugTracker</h1>

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            className="landing-page-username-input landing-text-input"
            placeholder="Username/Email"
            onChange={(e) => setUsernameInput(e.target.value)}
            value={usernameInput}
          />

          <input
            required
            type="password"
            className="landing-page-password-input landing-text-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        
          <input
            className="login-submit-btn"
            type="submit"
            value="Login"
          />

          <p 
            className="login-failed"
            style={{display: failedLogin}}
          >
            Incorrect username or password
          </p>

        </form>

      </div>

    </div>
  )

}

export default Landing;
