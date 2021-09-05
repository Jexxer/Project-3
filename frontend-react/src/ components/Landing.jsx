import React from "react";
import Header from "./Header";
import "../css/Landing.css";
import { Route , Link , Redirect} from "react-router-dom";

function Landing() {
  return (
    <div className="container">
      <div className="logincontainer">
        <Header />

        <input
          type="email"
          className="form"
          id="email"
          placeholder="Enter email"
        />

        <input
          type="password"
          className="form"
          id="Password"
          placeholder="Password"
        />
        <div className="submit">
          {/* Luke - Added the link to dashboard when submit is clicked on. The link is going to have to go to '/dashboard/userId */}
          <button><Link to = '/dashboard'>submit</Link></button>
        </div>
      </div>
    </div>
  );
}

export default Landing;
