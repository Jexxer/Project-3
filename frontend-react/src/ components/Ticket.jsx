import React, {useEffect , useState} from 'react';
import '../css/Ticket.css'

export default function Ticket(props) {
    const [loading , setLoading] = useState(true)
    const [tickets , setTickets] = useState(null)
    const [userInfo , setUserInfo] = useState(null)

    let url = `https://bugtracker-api-v1.herokuapp.com/api/tickets/${props.match.params.id}`
    let userUrl;
    const ticketFetch = () =>{
        fetch(url)
        .then(res => res.json())
        .then(res => { 
            setTickets(res) 
            //setLoading(false)
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
                    <span className = 'ticket-header-openclose'>Open Ticket</span>
                    <span className = 'update-ticket-status'>Update Ticket</span>
                    <span className = 'close-ticket-button'>Close Ticket</span>
                    <span></span>
                </div>
                <ul>
                    <li><span>Email: </span>{userInfo.email}</li>
                    <li id = 'title'><span>Title:</span> {tickets.title}</li>
                    <li id = 'status'><span>Status:</span>{tickets.status}</li>
                    <li id = 'id'><span>Creator's ID:</span>{tickets.creatorId}</li>
                    <li id = 'date'><span>Created:</span>{tickets.dateCreated}</li>
                    <li id = 'message'><span>Message:</span>{tickets.message}</li>
                </ul>
                    {/* <button className = 'submit-bug'><Link to = '/tickets/new'>Submit Bug</Link></button> */}
                
            </div>
        );
        
    }

}
//update status button
//close ticket
//section for dev notes(form)
//submit button that pushes to a key in the ticket db (devnotes)
