import React, {useEffect , useState} from 'react';
import {Link} from 'react-router-dom'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
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
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            {tickets[i].title}
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="open-ticket-item">
                            <p className="open-ticket-status">Status: {tickets[i].status}</p>
                            <p className = 'open-ticket-date'>Date created: {dateFormated.toDateString()}</p>
                            <Link to = {`/tickets/details/${tickets[i]._id}`} className="open-ticket-link">View Ticket</Link>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
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

            <div className="accordion-container">
                <Accordion>
                    {ticketArr}
                </Accordion>
            </div>
        );
    }

}
