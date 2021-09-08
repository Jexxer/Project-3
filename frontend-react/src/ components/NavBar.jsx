import React from "react";
import "../css/NavBar.css";
import {slide as Menu} from 'react-burger-menu'

export default function NavBar(props) {

  class Example extends React.Component {
    showSettings (event) {
      event.preventDefault();
      
      
      
    }
  }

  return (
    <div className="navbar-container">

      <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a  className="menu-item--small" href="">Settings</a>
      </Menu>

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
