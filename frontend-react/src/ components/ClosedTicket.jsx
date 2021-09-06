import React, {useEffect , useState} from 'react';
import {Link} from 'react-router-dom'
import '../css/Dashboard.css'

export default function ClosedTicket(props) {
    const [loading , setLoading] = useState(true)
    const [tickets , setTickets] = useState(null)
    let ticketArr = []
    let url = 'http://localhost:4000/api/tickets'
    //creatorId
    const populateTickets = () => {
        for(let i = 0 ; i < tickets.length ; i++){
            if(tickets[i].isOpen === false){
                ticketArr.push(
                    <div className = 'ticket'>
                        <span className = 'ticket-title'>{tickets[i].title}</span>
                        <span className = 'ticket-date'>{tickets[i].dateCreated}</span>
                        <span className = 'ticket-status'>{tickets[i].status}</span>
                        <button><Link to = {`/tickets/details/${tickets[i].creatorId}`}>View Ticket</Link></button>
                </div>)
            }
            
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
                    <div className = 'ticket-header-openclose'>My closed tickets</div>
                </div>
                    
                <div className = 'ticket-container'>
                    {ticketArr}
                </div>
                
            </div>
        );
    }

}
