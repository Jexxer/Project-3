import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./css/App.css";

import Landing from "./ components/Landing";
import Dashboard from "./ components/Dashboard";
import newTicketPage from "./ components/newTicketPage"; // delete
import Ticket from "./ components/Ticket";
import myProfile from "./ components/myProfile";
import Settings from "./ components/Settings";
import AllTickets from "./ components/AllTickets";
import NavBar from "./ components/NavBar";
import Work from "./ components/Work"

function App() {
  // username storage
  const [loggedInUser, setLoggedInUser] = useState(() => {
    const saved = localStorage.getItem("loggedInUser");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  const [userInfo, setUserInfo] = useState(null)

  if (loggedInUser === "") {
    return (
      <Landing userInfo={userInfo} setUserInfo={setUserInfo}/>
    );
  } else {
    return (
      <div className="App">
        <NavBar userInfo={userInfo}/>
        <Route exact path="/" render={() => (
            <Dashboard userInfo={userInfo} />
          )}/>
        <Route exact path="/work" component={Work} />
        <Route exact path="/users/:id" component={myProfile} />
        <Route exact path="/tickets/new" component={newTicketPage} />
        <Route exact path="/tickets/details/:id" component={Ticket} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/tickets" component={AllTickets} />

        {/* 
        Example:
        <Route exact path="/dashboard" render={(routerProps) => (
            <Series match={routerProps.match} seriesURL={seriesURL} setSeriesURL={setSeriesURL}/>
          )}/> 
          
        */}
      </div>
    );
  }
}

export default App;
