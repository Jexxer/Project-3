import React, { useState } from "react";
import usericon from "../usericon.png";

function UserInfo(props) {
  const [userDisplay, setUserDisplay] = useState("none");

  function toggle() {
    if (userDisplay == "block") {
      setUserDisplay("none");
    } else if (userDisplay == "none") {
      setUserDisplay("block");
    }
  }

  return (
    <div>
      <div className="action">
        <div className="profile">
          <img
            className="usericon"
            src={usericon}
            alt="usericon"
            onClick={toggle}
          />
        </div>
        <div className="menu" style={{ display: userDisplay }}>
          <h3>
            {" "}
            Mohamed <br /> <span>Level 1 User</span>
          </h3>
          <ul>
            <li>
              <a href="#">My Profile</a>
            </li>
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
