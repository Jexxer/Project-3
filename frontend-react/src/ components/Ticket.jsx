import React, {useEffect , useState} from 'react';
import {Link} from 'react-router-dom'
import '../css/Dashboard.css'

export default function Ticket(props) {
    const [loading , setLoading] = useState(true)
    const [tickets , setTickets] = useState(null)
    let ticketArr = []
    let url = 'http://localhost:4000/api/tickets'

    const populateTicket = () => {
        for(let i = 0 ; i < tickets.length ; i++){
            ticketArr.push(
                <div className = 'ticket'>
                    <span className = ''>{tickets[i].title}</span>
                    <span>Created: 09-17-21 at 8:45pm</span>
                    <span>Status: Pending</span>
                    <button><Link to = {`/tickets/details/${tickets[i].creatorId}`}>View Ticket</Link></button>
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
        populateTicket()
        console.log(tickets)
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
