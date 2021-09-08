import React from "react";
import "../css/NavBar.css";

export default function NavBar(props) {
  return (
    <div className="NavBar1">
      <div className="dashborad-btn">
        <button>
          <a href="/">Dashboard</a>
        </button>
      </div>
      <div className="tickets-btn">
        <button>
          <a href="/tickets">Tickets</a>
        </button>
      </div>
      <div className="settings-btn">
        <button>
          <a href="/settings">Settings</a>
        </button>
      </div>
    </div>
  );
}
