import React from "react";
import "../css/NavBar.css";
import { slide as Menu } from "react-burger-menu";

export default function NavBar(props) {
  class Example extends React.Component {
    showSettings(event) {
      event.preventDefault();
    }
  }

  return (
    <div className="navbar-container">
      <Menu>
        <a id="dashboard" className="menu-item" href="/">
          Dashboard
        </a>
        <a id="tickets" className="menu-item" href="/tickets">
          Tickets
        </a>
        <a id="settings" className="menu-item" href="/settings">
          Settings
        </a>
      </Menu>
    </div>
  );
}
