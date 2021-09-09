import React, {useEffect , useState} from 'react';
import '../css/Ticket.css'
import axios from "axios";

export default function Ticket(props) {
    const [loading , setLoading] = useState(true)
    const [tickets , setTickets] = useState(null)
    const [userInfo , setUserInfo] = useState(null)
    const [updateDisplay, setUpdateDisplay] = useState('none')
    const [openClose , setOpenClose] = useState(null)
    const [buttonToggle , setButtonToggle] = useState(null)

    let url = `https://bugtracker-api-v1.herokuapp.com/api/tickets/${props.match.params.id}`
    let userUrl;

    const ticketFetch = () =>{
        fetch(url)
        .then(res => res.json())
        .then(res => { 
            setTickets(res)
            setOpenClose(res.isOpen)
            if(res.isOpen){
                setButtonToggle('Close')
            }
            else if(!res.isOpen){
                setButtonToggle('Open')
            } 
            // setLoading(false)
        })
        .catch(err => { console.error(err) });
    }
    const userFetch = () =>{
        if(tickets != null){
            userUrl = `https://bugtracker-api-v1.herokuapp.com/api/users/${tickets.creatorId}`
            fetch(userUrl)
            .then(res => res.json())
            .then(res => { 
                setUserInfo(res)
                console.log(userInfo) 
                setLoading(false)
            })
            .catch(err => { console.error(err) });
        }
    }
    const updateStatus = () => {
        if(openClose === true){
            axios
            .put(`https://bugtracker-api-v1.herokuapp.com/api/tickets/${props.match.params.id}`, {
                status : 'closed',
                isOpen: false
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally( () => {
                setOpenClose(false)
                window.location.reload(false)
            }) 
        }
        else if (openClose === false){
            axios
            .put(`https://bugtracker-api-v1.herokuapp.com/api/tickets/${props.match.params.id}`, {
                status : 'open',
                isOpen: true
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .finally( () => {
                setOpenClose(true)
                window.location.reload(false)
            }) 
        }
        

    }
    const updateDescription = () => {
        if(updateDisplay == 'none'){
            setUpdateDisplay('block')
        }
        else{
            setUpdateDisplay('none')
        }
    }
    useEffect(() => {
        ticketFetch()
    },[])

    useEffect(() => {
        userFetch()
    },[tickets])

    if(loading){
        return null;
    }
    else if(!loading && tickets != null){
        console.log()
        return (
            <div className = 'ticket-container'>
                
                <div className = 'ticket-header'>
                    <button className = 'ticket-header-button' onClick = {updateDescription}>Update Ticket</button>
                    <input type = 'button' className = 'ticket-header-button' onClick = {updateStatus} value = {buttonToggle} />
                </div>
                <ul>
                    <li><span>Email: </span>{userInfo.email}</li>
                    <li id = 'title'><span>Title:</span> {tickets.title}</li>
                    <li id = 'status'><span>Status:</span>{tickets.status}</li>
                    <li id = 'id'><span>Creator's ID:</span>{tickets.creatorId}</li>
                    <li id = 'date'><span>Created:</span>{tickets.dateCreated}</li>
                    <li id = 'message'><span>Message:</span>{tickets.message}</li>
                </ul>
                <div className = 'form' style = {{display: updateDisplay}}>
                    <form action="/action_page.php">
                        <label for="form-title">Ticket Description:</label>
                        <input type="form-textbox"/>
                        <input type="submit" value="Update" />
                    </form>
                </div>
                    
                    {/* <button className = 'submit-bug'><Link to = '/tickets/new'>Submit Bug</Link></button> */}
                
            </div>
        );
        
    }

}
//update status button 
//-----------------close ticket--------------------
//section for dev notes(form)
//submit button that pushes to a key in the ticket db (devnotes)
