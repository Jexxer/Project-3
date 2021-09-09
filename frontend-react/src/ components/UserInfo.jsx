import React, { useState } from "react";
import usericon from "../usericon.png";
import "../css/UserInfo.css";
import LogoutSVG from "../svgsource/182-startup-2.svg";

function UserInfo(props) {
  const [userDisplay, setUserDisplay] = useState("none");

  function toggle() {
    if (userDisplay === "block") {
      setUserDisplay("none");
    } else if (userDisplay === "none") {
      setUserDisplay("block");
    }
  }

  return (
    <div>
      <div className="action">
        <div className="profile">
          <img
            className="usericon"
            src={localStorage.getItem("profilePic").replace(/['"]+/g, "")}
            alt="usericon"
            onClick={toggle}
          />
        </div>
        <div className="menu" style={{ display: userDisplay }}>
          <h3>
            {" "}
            Hello {localStorage
              .getItem("loggedInUser")
              .replace(/['"]+/g, "")}{" "}
            <br />{" "}
            <span>
              {" "}
              User Level:{" "}
              {localStorage.getItem("privLevel").replace(/['"]+/g, "")}
            </span>
          </h3>

          <div className="logout-svg-div">
            <img src={LogoutSVG} alt="logout" />
            <button
              className="logout-btn"
              onClick={() => {
                localStorage.setItem("loggedInUser", JSON.stringify(""));
                window.location.reload(false);
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
