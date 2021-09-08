import React, { useState } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import "../css/newTicketPage.css";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo"

function NewTicketPage(props) {
  const [bugTitle, setBugtitle] = useState("");
  const [bugLocation, setBugLocation] = useState("");
  const [bugDetails, setBugDetails] = useState("");
  const [isSubmitted, setIsSubmitted] = useState("");

  function postTicket(title, message) {
    axios
      .post("https://bugtracker-api-v1.herokuapp.com/api/tickets", {
        title: `${title}`,
        dateCreated: Date.now(),
        status: "Pending",
        creatorId: localStorage.getItem("userId").replace(/['"]+/g, ''),
        isOpen: true,
        message: `${message}`,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handlesSubmit(e) {
    e.preventDefault();
    postTicket(bugTitle, bugDetails);
    setBugDetails("");
    setBugtitle("");
    setBugLocation("");
    setIsSubmitted(true);
  }
  if (!isSubmitted) {
    return (
        <div className="new-bug-page">

            <div className="form-container">
                <form onSubmit={handlesSubmit}>
                    <h1>New bug Form</h1>
                    <p>
                        Please send us details about the bug you would like to report. Our
                        Developers will analyze your complaint and take the appropriate
                        measures in order that the reported situation will not occur at any
                        other time in the future.
                    </p>
                    <hr />
                    <div className="titel-item">
                        <p>Title</p>
                        <input
                        type="text"
                        className="new-bug-input-1"
                        value={bugTitle}
                        onChange={(e) => setBugtitle(e.target.value)}
                        />
                    </div>
                    <div className="location-item">
                        <p>Bug location? (path/URL)</p>
                        <input
                        type="text"
                        className="new-bug-input-2"
                        value={bugLocation}
                        onChange={(e) => setBugLocation(e.target.value)}
                        />
                    </div>
                    <div className="details-item">
                        <p>Bug details</p>
                        <div className="details-textarea">
                            <textarea
                            rows="5"
                            className="new-bug-textarea"
                            value={bugDetails}
                            onChange={(e) => setBugDetails(e.target.value)}
                            ></textarea>
                        </div>
                    </div>
                    <div className="form-submit-btn">
                        <input type="submit" value="Submit" />
                    </div>
                
                </form>
            </div>
            <UserInfo />
      </div>
    );
  } else if (isSubmitted) {
    return (
        <div className="form-submit">
            <NavBar />

            <dev className="form-submit-right">
              <p>Thanks for submitting!</p>
              <Link to="/">Dashboard</Link>
            </dev>
        </div>
    );
  }
}

export default NewTicketPage;
