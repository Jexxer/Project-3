import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserInfo from './UserInfo';
import axios from 'axios';
import '../css/Admin.css'

function Admin(props) {

    const initialFormState = {
        userName: "",
        password: "",
        privLevel: "",
        email: "",
        profilePic: ""
    }

    const [userFormState, setUserFormState] = useState(initialFormState)

    function addUser(object) {
        axios
            .post("https://bugtracker-api-v1.herokuapp.com/api/users", {
                userName: object.userName,
                password: object.password,
                privLevel: object.privLevel,
                email: object.email,
                profilePic: object.profilePic
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    function handleSubmit(e){
        e.preventDefault()
        addUser(userFormState)
        setUserFormState(initialFormState)
    }

    if(localStorage.getItem("privLevel").replace(/['"]+/g, '') == "3"){

        return (
            <div className="admin-page-container">
                <h1 id="admin-page-title">BugTracker</h1>
                <h3>Add User</h3>
                <div className="admin-user-form-container">
                    <form onSubmit={handleSubmit} className="admin-user-form">
                        <div className="form-partition-top">
                            <input 
                                required
                                type="text" 
                                placeholder="Username"
                                value={userFormState.userName}
                                onChange={(e) => {
                                    userFormState.userName = e.target.value
                                    setUserFormState({...userFormState})
                                }}
                            />
    
                            <input
                                required
                                minLength="8"
                                type="password"
                                placeholder="Password"
                                value={userFormState.password}
                                onChange={(e) => {
                                    userFormState.password = e.target.value
                                    setUserFormState({...userFormState})
                                }}
                            />
                        </div>
    
                        <div className="form-partition-bottom">
                            <input
                                required
                                type="text"
                                placeholder="Privilege level (1-3)"
                                value={userFormState.privLevel}
                                onChange={(e) => {
                                    userFormState.privLevel = e.target.value
                                    setUserFormState({...userFormState})
                                }}
                            />
                            <input
                                required
                                type="text"
                                placeholder="E-mail"
                                value={userFormState.email}
                                onChange={(e) => {
                                    userFormState.email = e.target.value
                                    setUserFormState({...userFormState})
                                }}
                            />
                        </div>
                        
                        <input
                            type="text"
                            placeholder="Profile picture URL"
                            value={userFormState.profilePic}
                                onChange={(e) => {
                                    userFormState.profilePic = e.target.value
                                    setUserFormState({...userFormState})
                                }}
                        />
                        
                        <input
                            id="admin-add-user-submit"
                            type="submit"
                            value="Add"
                        />
    
                    </form>
                </div>
                <UserInfo/>
            </div>
        )
    } else {
        return(
            <div className="admin-page-container">
                <h1>You do not have permision to view this page!</h1>
                <Link to="/">Home</Link>
                <UserInfo/>
            </div>
        )
    }


}

export default Admin;