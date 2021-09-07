import Landing from "./ components/Landing";

import logo from "./logo.svg";

import "./css/App.css";

import { Route, Link, Redirect } from "react-router-dom";
import Dashboard from "./ components/Dashboard";
import newTicketPage from "./ components/newTicketPage"; // delete
import Ticket from "./ components/Ticket";
import myProfile from "./ components/MyProfile";
import UserInfo from "./ components/UserInfo";
import Settings from "./ components/Settings";
import AllTickets from "./ components/AllTickets";

function App() {
  return (
    <div className="App">
      <UserInfo />
      <Route exact path="/" component={Landing} />
      <Route exact path="/users/:id" component={myProfile} />

      <Route exact path="/tickets/new" component={newTicketPage} />

      <Route exact path="/dashboard" component={Dashboard} />

      <Route exact path="/tickets/details/:id" component={Ticket} />
      <Route exact path="/settings" component={Settings} />
      <Route exact path="/tickets" component={AllTickets} />
    </div>
  );
}

export default App;
