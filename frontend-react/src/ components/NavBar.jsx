import React, { useState } from "react";
import "../css/NavBar.css";
import { stack as Menu } from "react-burger-menu";

export default function NavBar({ userInfo }) {
  let customNav = null;

  if (localStorage.getItem("privLevel").replace(/['"]+/g, "") === "1") {
    customNav = (
      <Menu>
        <div className="navbar-menu-div">
          <a id="dashboard" className="menu-item nav-links" href="/">
            Dashboard
          </a>
        </div>
        <div className="navbar-menu-div">
          <a id="tickets" className="menu-item nav-links" href="/tickets">
            Tickets
          </a>
        </div>
      </Menu>
    );
  } else if (localStorage.getItem("privLevel").replace(/['"]+/g, "") === "2") {
    customNav = (
      <Menu>
        <a id="dashboard" className="menu-item" href="/">
          Dashboard
        </a>
        <a id="tickets" className="menu-item" href="/tickets">
          Tickets
        </a>
        <a id="work-assigned-link" className="menu-item" href="/work">
          Work Assigned
        </a>
      </Menu>
    );
  } else if (localStorage.getItem("privLevel").replace(/['"]+/g, "") == "3") {
    customNav = (
      <Menu>
        <a id="dashboard" className="menu-item" href="/">
          Dashboard
        </a>
        <a id="tickets" className="menu-item" href="/tickets">
          Tickets
        </a>
        <a id="work-assigned-link" className="menu-item" href="/work">
          Work Assigned
        </a>
        <a id="admin-link" className="menu-item" href="/admin">
          Admin
        </a>
      </Menu>
    );
  }

  class Example extends React.Component {
    showSettings(event) {
      event.preventDefault();
    }
  }

  return <div className="navbar-container">{customNav}</div>;
}
