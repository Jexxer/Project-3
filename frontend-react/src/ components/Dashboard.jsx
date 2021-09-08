import React, { useEffect } from "react";
import axios from "axios";
import ClosedTicket from "./ClosedTicket";
import OpenTicket from "./OpenTicket";
import UserInfo from "./UserInfo";
import NavBar from "./NavBar";


function Dashboard({userInfo}) {

  const username = localStorage.getItem("loggedInUser").replace(/['"]+/g, '') // regex to remove double quotes around username

  function updateLastLogin(){
    const userId = localStorage.getItem("userId").replace(/['"]+/g, '')
    axios
      .put(`https://bugtracker-api-v1.herokuapp.com/api/users/${userId}`, {
          lastLogin: Date.now()
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      });
  }
  useEffect(()=> {
    updateLastLogin()
  },[])

    return (
      <div className="dashboard-container">
        <div className="navbar">
          <NavBar />
        </div>
        <div className="dashboard-div">
          <h3>Welcome back {username}!</h3>
          <OpenTicket />
          <ClosedTicket />
        </div>
        <div className="usericon-div">
          <UserInfo />
        </div>
      </div>
    )
  
}

export default Dashboard;
