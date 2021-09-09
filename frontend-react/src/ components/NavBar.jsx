import React, { useState } from "react";
import "../css/NavBar.css";
import { slide as Menu } from "react-burger-menu";

export default function NavBar({ userInfo }) {

  let customNav = null

  if(localStorage.getItem("privLevel").replace(/['"]+/g, '') === "1"){
    customNav = (
        <Menu>
          <a id="dashboard" className="menu-item" href="/">
            Dashboard
          </a>
          <a id="tickets" className="menu-item" href="/tickets">
            Tickets
          </a>
          <div className="settings-div">
            <a id="settings" className="menu-item" href="/settings">
              Settings
            </a>
          </div>
        </Menu>
    )
  } else if(localStorage.getItem("privLevel").replace(/['"]+/g, '') === "2"){
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
          <div className="settings-div">
            <a id="settings" className="menu-item" href="/settings">
              Settings
            </a>
          </div>
        </Menu>
    )
  } else if(localStorage.getItem("privLevel").replace(/['"]+/g, '') == "3"){
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
          <div className="settings-div">
            <a id="settings" className="menu-item" href="/settings">
              Settings
            </a>
          </div>
        </Menu>
    )
  }

  class Example extends React.Component {
    showSettings(event) {
      event.preventDefault();
    }
  }


    return (
      <div className="navbar-container">
        {customNav}
      </div>
    )

  
}
