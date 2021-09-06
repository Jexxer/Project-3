import React, {useEffect , useState} from 'react';
import {Link} from 'react-router-dom'
import '../css/Dashboard.css'

export default function OpenTicket(props) {
    const [loading , setLoading] = useState(true)
    const [tickets , setTickets] = useState(null)
    let ticketArr = []
    let url = 'http://localhost:4000/api/tickets'

    const populateTickets = () => {
        for(let i = 0 ; i < tickets.length ; i++){
            ticketArr.push(
                <div className = 'ticket'>
                    <span className = 'ticket-title'>{tickets[i].title}</span>
                    <span className = 'ticket-date'>Created: 09-17-21 at 8:45pm</span>
                    <span className = 'ticket-status'>Status: Pending</span>
                    <button><Link to = {`/tickets/${tickets[i].creatorId}`}>View Ticket</Link></button>
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
        console.log(tickets)
        return (
            <div className = 'open-tickets'>
                
                <div className = 'ticket-header'>
                    <div className = 'ticket-header-openclose'>My open tickets</div>
                        
                    <button className = 'submit-bug'><Link to = '/bug?submit'>Submit Bug</Link></button>
                </div>
                    
                <div className = 'ticket-container'>
                    {ticketArr}
                </div>
                
            </div>
        );
    }

}
