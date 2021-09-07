import React, {useEffect , useState} from 'react';
import {Link} from 'react-router-dom'
import '../css/Ticket.css'

export default function Ticket(props) {
    const [loading , setLoading] = useState(true)
    const [tickets , setTickets] = useState(null)

    let url = `https://bugtracker-api-v1.herokuapp.com/api/tickets/${props.match.params.id}`

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(res => { 
            setTickets(res) 
            setLoading(false)
        })
        .catch(err => { console.error(err) });        
        
    },[])
    
    if(loading){
        return null;
    }
    else{
        
        return (
            <div className = 'open-tickets'>
                
                <div className = 'ticket-header'>
                    <div className = 'ticket-header-openclose'>Open Ticket</div>
                </div>    
                <ul>
                    <li id = 'title'>{tickets.title}</li>
                    <li id = 'status'>{tickets.status}</li>
                    <li id = 'id'>{tickets.creatorId}</li>
                    <li id = 'message'>{tickets.message}</li>
                    <li id = 'date'>{tickets.dateCreated}</li>
                </ul>
                    {/* <button className = 'submit-bug'><Link to = '/tickets/new'>Submit Bug</Link></button> */}
                
                    
                <div className = 'ticket-container'>
                    
                </div>
                
            </div>
        );
    }

}
