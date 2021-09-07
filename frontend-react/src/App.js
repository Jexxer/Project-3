import React, { useState } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./css/App.css";
import Landing from "./ components/Landing";
import Dashboard from "./ components/Dashboard";
import newTicketPage from "./ components/newTicketPage"; // delete
import Ticket from "./ components/Ticket";
import myProfile from "./ components/myProfile";

function App() {

  const [loggedInUser, setLoggedInUser] = useState(null)

  return (
    <div className="App">

      <Route exact path="/" component={Landing} />
      <Route exact path="/users/:id" component={myProfile} />
      <Route exact path="/tickets/new" component={newTicketPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/tickets/details/:id" component={Ticket} />
      {/* <Route exact path="/dashboard" render={(routerProps) => (
          <Series match={routerProps.match} seriesURL={seriesURL} setSeriesURL={setSeriesURL}/>
        )}/> */}

    </div>
  );
}

export default App;
