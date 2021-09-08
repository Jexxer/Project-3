import React, {useEffect , useState} from 'react';
import {Link} from 'react-router-dom'
import '../css/Dashboard.css'

export default function OpenTicket(props) {
    const [loading , setLoading] = useState(true)
    const [tickets , setTickets] = useState(null)
    let ticketArr = []
    let url = 'https://bugtracker-api-v1.herokuapp.com/api/tickets'

    const populateTickets = () => {
        for(let i = 0 ; i < tickets.length ; i++){
            const dateFormated = new Date(tickets[i].dateCreated)
            ticketArr.push(
                <div className = 'ticket'>
                    <span className = 'ticket-title'>{tickets[i].title}</span>
                    <span className = 'ticket-date'>{dateFormated.toDateString()}</span>
                    <div className="ticket-status"><span>Status: Pending</span></div>
                    <button><Link to = {`/tickets/details/${tickets[i]._id}`}>View Ticket</Link></button>
            </div>)
        }
    } 

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
        populateTickets()
        return (
            <div className = 'open-tickets'>
                
                <div className = 'ticket-header'>
                    <div className = 'ticket-header-openclose'>My open tickets</div>
                        
                    <button className = 'submit-bug'><Link to = '/tickets/new'>Submit Bug</Link></button>
                </div>
                    
                <div className = 'ticket-container'>
                    {ticketArr}
                </div>
                
            </div>
        );
    }

}
