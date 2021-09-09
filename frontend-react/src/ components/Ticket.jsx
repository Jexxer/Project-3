import React, { useEffect, useState } from "react";
import "../css/Ticket.css";
import axios from "axios";
import UserInfo from "./UserInfo";
import Select from "react-select";

export default function Ticket(props) {
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [updateDisplay, setUpdateDisplay] = useState("none");
  const [openClose, setOpenClose] = useState(null);
  const [buttonToggle, setButtonToggle] = useState(null);
  const [descriptionValue, setDescriptionValue] = useState(null);

  /* ---react-select Start--- */

  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedUserOption, setSelectiedUserOption] = useState(null)
  const [value, setValue] = useState("");

  const options = [
    { value: "Pending Review", label: "Pending Review" },
    { value: "Under Review", label: "Under Review" },
    { value: "Rejected", label: "Rejected" },
    { value: "Completed", label: "Completed" },
  ];

  const userOptions = [
      {value: "6133752f7afc6205f786b047", label: "DemoLevel2"},
      {value: "6139a6f494fa89001664e975", label: "Tehnk"}
  ]

  function handleChange(selected) {
    setSelectedOption(selected.value);
    console.log(selected.value);
  }

  function handleUserChange(selected){
    setSelectiedUserOption(selected.value)
    console.log(selected.value)
  }

  /* ---react-select finish--- */

  let url = `https://bugtracker-api-v1.herokuapp.com/api/tickets/${props.match.params.id}`;
  let userUrl;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(descriptionValue);
    axios
      .put(
        `https://bugtracker-api-v1.herokuapp.com/api/tickets/${props.match.params.id}`,
        {
          devNotes: descriptionValue,
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        window.location.reload(false);
      });
  };

  const ticketFetch = () => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setTickets(res);
        setOpenClose(res.isOpen);
        if (res.isOpen) {
          setButtonToggle("Close Ticket");
        } else if (!res.isOpen) {
          setButtonToggle("Re-Open Ticket");
        }
        // setLoading(false)
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const userFetch = () => {
    if (tickets != null) {
      userUrl = `https://bugtracker-api-v1.herokuapp.com/api/users/${tickets.creatorId}`;
      fetch(userUrl)
        .then((res) => res.json())
        .then((res) => {
          setUserInfo(res);
          console.log(userInfo);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const updateStatus = () => {
    if (openClose === true) {
      axios
        .put(
          `https://bugtracker-api-v1.herokuapp.com/api/tickets/${props.match.params.id}`,
          {
            isOpen: false,
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => {
          setOpenClose(false);
          window.location.reload(false);
        });
    } else if (openClose === false) {
      axios
        .put(
          `https://bugtracker-api-v1.herokuapp.com/api/tickets/${props.match.params.id}`,
          {
            status: "open",
            isOpen: true,
          }
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => {
          setOpenClose(true);
          window.location.reload(false);
        });
    }
  };

  function pushStatus() {
    console.log("selected value: ", selectedOption.value);
    axios
      .put(
        `https://bugtracker-api-v1.herokuapp.com/api/tickets/${props.match.params.id}`,
        {
          status: selectedOption,
        }
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        window.location.reload(false);
      });
  }

  function assignEmployee(){
    axios
    .put(
      `https://bugtracker-api-v1.herokuapp.com/api/tickets/${props.match.params.id}`,
      {
        assignedTo: selectedUserOption,
      }
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(() => {
      window.location.reload(false);
    });
  }

  useEffect(() => {
    ticketFetch();
  }, []);

  useEffect(() => {
    userFetch();
  }, [tickets]);

  if (loading) {
    return null;
  } else if (!loading && tickets != null) {
    console.log();
    const dateFormated = new Date(tickets.dateCreated);
    return (
      <div id="ticket-page-container">
        <h1>BugTracker</h1>
        <div id="some-container">
          <div id="ticket-details-container">
            <div id="ticket-page-email" className="ticket-page-item">
              <h4>Email: </h4>
              <p>{userInfo.email}</p>
            </div>
            <div id="ticket-page-title" className="ticket-page-item">
              <h4>Title:</h4>
              <p>{tickets.title}</p>
            </div>
            <div id="ticket-page-status" className="ticket-page-item">
              <h4>Status:</h4>
              <p>{tickets.status}</p>
            </div>
            <div id="ticket-page-creatorid" className="ticket-page-item">
              <h4>Creator's ID:</h4>
              <p>{tickets.creatorId}</p>
            </div>
            <div id="ticket-page-datecreated" className="ticket-page-item">
              <h4>Created:</h4>
              <p>{dateFormated.toDateString()}</p>
            </div>
            <div id="ticket-page-message" className="ticket-page-item">
              <h4>Message:</h4>
              <p>{tickets.message}</p>
            </div>
            <div id="ticket-page-devnotes" className="ticket-page-item">
              <h4>Dev Notes:</h4>
              <p>{tickets.devNotes || "No Dev Notes"}</p>
            </div>
          </div>
          <div className="notes-and-status-div">
            <div id="devnotes-form-container">
                <div id="select-container-2">
                    <Select
                        options={userOptions}
                        onChange={(e) => handleUserChange(e)}
                        placeholder="Select Employee"
                    />
                    <button id="update-status-btn" onClick={assignEmployee}>
                        Assign
                    </button>
                </div>
              <form id="devnotes-form" onSubmit={handleSubmit}>
                <label for="form-title">Add Notes</label>
                <textarea
                  id="devnotes-textarea"
                  rows="10"
                  placeholder="Developer Comments"
                  required
                  onChange={(e) => setDescriptionValue(e.target.value)}
                />
                <input id="note-submit-btn" type="submit" value="Add Note" />
              </form>

              <div id="select-container">
                <Select
                  options={options}
                  onChange={(e) => handleChange(e)}
                  placeholder="Select Status"
                />
                <button id="update-status-btn" onClick={pushStatus}>
                  Update Status
                </button>

                
              </div>

                <div className="ticket-header">
                    <input
                        type="button"
                        id="open-close-ticket"
                        onClick={updateStatus}
                        value={buttonToggle}
                  />
                </div>

            </div>
          </div>
        </div>

        <UserInfo />
      </div>
    );
  }
}
