import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AllOpenTickets from "./AllOpenTickets"
import AllClosedTickets from "./AllClosedTickets"
import UserInfo from "./UserInfo";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import NavBar from "./NavBar";


function AllTickets({userInfo}) {

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
        <h1>BugTracker</h1>
            <h3 className="dashboard-welcome-msg">All tickets</h3>
        <div className="dashboard-div">
        <Link to="/tickets/new" className="dashboard-new-bug-link">New Ticket</Link>
        <Tabs>
          <TabList>
            <Tab>All Open Tickets</Tab>
            <Tab>All Closed Tickets</Tab>
          </TabList>

          <TabPanel>
            <AllOpenTickets />
          </TabPanel>
          <TabPanel>
            <AllClosedTickets />
          </TabPanel>
        </Tabs>
        </div>
        <div className="usericon-div">
          <UserInfo />
        </div>
      </div>
    )
  
}

export default AllTickets;