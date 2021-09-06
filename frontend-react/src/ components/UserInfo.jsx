import React from "react";
import usericon from "../usericon.png";

function UserInfo(props) {
  return (
    <div>
      <div className="action">
        <div className="profile">
          <img className="usericon" src={usericon} alt="usericon" />
        </div>
        <div className="menu">
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
