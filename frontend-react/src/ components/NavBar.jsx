import React from "react";

export default function NavBar(props) {
  return (
    <div className="NavBar1">
      <div className="dashborad-btn">
        <button><a href="/dashboard">Dashboard</a></button>
      </div>
      <div className="tickets-btn">
        <button>Tickets</button>
      </div>
    </div>
  );
}
