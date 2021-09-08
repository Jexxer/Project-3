import React, {useEffect , useState} from 'react';
import {Link} from 'react-router-dom'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../css/Dashboard.css'

export default function ClosedTicket(props) {
    const [loading , setLoading] = useState(true)
    const [tickets , setTickets] = useState(null)
    let ticketArr = []
    let url = 'https://bugtracker-api-v1.herokuapp.com/api/tickets'
    //creatorId
    const populateTickets = () => {
        for(let i = 0 ; i < tickets.length ; i++){
            const dateFormated = new Date(tickets[i].dateCreated)
            if(tickets[i].isOpen == false){
                ticketArr.push(
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="accordion-title">
                                <span id="accordion-span-title">{tickets[i].title}</span>
                                <span className='span-hide'>{tickets[i].status}</span>
                                <span className='span-hide'>{dateFormated.toDateString()}</span>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="open-ticket-item">
                            <div className="dashboard-ticket-message-container">
                                <p className="open-ticket-status">{tickets[i].message}</p>
                            </div>
                            <div className="dashboard-link-container">
                                <Link to = {`/tickets/details/${tickets[i]._id}`} className="open-ticket-link">View Ticket</Link>
                            </div>
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