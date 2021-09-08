import React, {useEffect , useState} from 'react';
import {Link} from 'react-router-dom'
import '../css/OpenTicket.css'

export default function OpenTicket(props) {
    const [loading , setLoading] = useState(true)
    const [tickets , setTickets] = useState(null)
    let ticketArr = []
    let url = 'https://bugtracker-api-v1.herokuapp.com/api/tickets'

    const populateTickets = () => {
        for(let i = 0 ; i < tickets.length ; i++){
            const dateFormated = new Date(tickets[i].dateCreated)
            if(tickets[i].isOpen == true){
                ticketArr.push(
                <div className = 'open-ticket-item'>
                    <p className = 'open-ticket-title'>{tickets[i].title}</p>
                    <p className = 'open-ticket-date'>{dateFormated.toDateString()}</p>
                    <p className="open-ticket-status">{tickets[i].status}</p>
                    <Link to = {`/tickets/details/${tickets[i]._id}`}>View Ticket</Link>
                </div>
            )}
            
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
