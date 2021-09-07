import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import "../css/Landing.css";
import Dashboard from "./Dashboard";
import e from "cors";

// new api: https://bugtracker-api-v1.herokuapp.com/api/users
function Landing() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const memory = useHistory();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
    }
  }, []);


  function login(username, password) {
    axios
      .get("https://bugtracker-api-v1.herokuapp.com/api/users")
      .then(function (res){
        const users = res.data

        for(let i = 0; i < users.length; i++){
          // check if username matches

          if(username == users[i].userName && password === users[i].password){
            //check that the password matches
            console.log('you logged in!')
            break;
          } else {
            console.log(`Wrong info. Try again`)
          }
        }
      })
      .catch(function (error){
        console.log(error)
      })
  }

  return (
    <div className="container">
      <div className="logincontainer">
        <Header />

        <div className="item">
          <input
            type="email"
            className="form"
            id="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="item">
          <input
            type="password"
            className="form"
            id="Password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="item">
          <button onClick={() => login(email, password)} className="button">
            {" "}
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
