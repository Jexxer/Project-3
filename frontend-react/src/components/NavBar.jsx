import React from "react";

function NavBar(props) {
  return (
    <div className="NavBar">
      <div className="dashborad-btn">
        <button>Dashboard</button>
      </div>
      <div className="tickets-btn">
        <button>Tickets</button>
      </div>
    </div>
  );
}

export default NavBar;
