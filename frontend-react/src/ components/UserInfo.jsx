import React from "react";
import usericon from "../usericon.png";

function UserInfo(props) {
  return (
    <div>
      <img className="usericon" src={usericon} alt="usericon" />
    </div>
  );
}

export default UserInfo;
