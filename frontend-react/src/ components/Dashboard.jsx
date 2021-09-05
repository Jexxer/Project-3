import React from "react";
import ClosedTicket from "./ClosedTicket";
import OpenTicket from "./OpenTicket";
import UserInfo from "./UserInfo";
import NavBar from "./NavBar";

function Dashboard(props) {
  return (
    <div className="parent-div">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="dashboard-div">
        <OpenTicket />
        <ClosedTicket />
      </div>
      <div className="usericon-div">
        <UserInfo />
      </div>
    </div>
  );
}

export default Dashboard;
