import React from "react";
import "../css/newTicketPage.css";
import NavBar from "./NavBar";

function newTicketPage(props) {

    function handleChange(){
        // do something for each change to a field. (update variables?)
    }

    function handleSubmit(){
        // do something with input in datafields
    }

  return (
    <div class="testbox">
      <div className="navbar">
        <NavBar />
      </div>
      <form action="/">
        <h1>New bug Form</h1>
        <p>
          Please send us details about the bug you would like to report. Our
          Developers will analyze your complaint and take the appropriate
          measures in order that the reported situation will not occur at any
          other time in the future.
        </p>
        <hr />
        <div class="item">
          <p>Email</p>
          <input type="text" name="name" />
        </div>
        <div class="item location">
          <p>Bug location? (path/URL)</p>
          <input type="text" name="name" />
        </div>
        <div class="item complaint-details">
          <p>Bug details</p>
          <div class="complaint-details-item">
            <textarea rows="5"></textarea>
          </div>
        </div>
        <div class="btn-block">
          <button type="submit" href="/">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default newTicketPage;
