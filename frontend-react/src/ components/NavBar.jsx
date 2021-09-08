import React from "react";
import "../css/NavBar.css";
import {slide as Menu} from 'react-burger-menu'

export default function NavBar(props) {


  return (
    <div className="navbar-container">
        <Menu>
          <a id="home" className="menu-item" href="/">Home</a>
          <a id="about" className="menu-item" href="/about">About</a>
          <a id="contact" className="menu-item" href="/contact">Contact</a>
          <a onClick={console.log('clicked')} className="menu-item--small" href="">Settings</a>
        </Menu>
    </div>
  );
}
