import React, {useEffect , useState} from 'react';
import '../css/Dashboard.css'

export default function ClosedTicket(props) {
    const [loading , setLoading] = useState(true)
    const [tickets , setTickets] = useState(null)
    let ticketArr = []
    let url = 'http://localhost:4000/api/users'

    const populateTickets = () => {
        for(let i = 0 ; i < tickets.length ; i++){
            ticketArr.push(
                <div className = 'ticket'>
                    <span className = ''>{tickets[i].userName}</span>
                    <span>Created: 09-17-21 at 8:45pm</span>
                    <span>Status: Pending</span>
                    <button>View Ticket</button>
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
                    <div className = 'ticket-header-openclose'>My closed tickets</div>
                </div>
                    
                <div className = 'ticket-container'>
                    {ticketArr}
                </div>
                
            </div>
        );
    }

}
