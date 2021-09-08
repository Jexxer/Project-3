import React from "react";
import "../css/NavBar.css";

export default function NavBar(props) {
  return (
    <div className="navbar-container">
      <div className="dashborad-btn">

          <a href="/">Dashboard</a>

      </div>
      <div className="tickets-btn">

          <a href="/tickets">Tickets</a>

      </div>
      <div className="settings-btn">

          <a href="/settings">Settings</a>

      </div>
    </div>
  );
}
