import React, { useEffect } from "react";
import axios from "axios";
import ClosedTicket from "./ClosedTicket";
import OpenTicket from "./OpenTicket";
import UserInfo from "./UserInfo";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

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
          <h3 className="dashboard-welcome-msg">Welcome back {username}!</h3>
        <div className="dashboard-div">
        <Tabs>
          <TabList>
            <Tab>Open Tickets</Tab>
            <Tab>Closed Tickets</Tab>
          </TabList>

          <TabPanel>
            <OpenTicket />
          </TabPanel>
          <TabPanel>
            <ClosedTicket />
          </TabPanel>
        </Tabs>
        </div>
        <div className="usericon-div">
          <UserInfo />
        </div>
      </div>
    )
  
}

export default Dashboard;
