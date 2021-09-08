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
      <Landing loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} userInfo={userInfo} setUserInfo={setUserInfo}/>
    );
  } else {
    return (
      <div className="App">

        <Route exact path="/" render={() => (
            <Dashboard userInfo={userInfo} />
          )}/>

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
