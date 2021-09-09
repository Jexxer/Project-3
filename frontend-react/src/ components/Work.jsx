import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";
import UserInfo from "./UserInfo";
import axios from "axios";
import {Link} from 'react-router-dom'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import '../css/OpenTicket.css'


function Work(props) {

    const [loading, setLoading] = useState(true)
    const [assignedWork, setAssignedWork] = useState(null)

    const workerId = localStorage.getItem("userId").replace(/['"]+/g, '')

    function getWork() {
        axios
          .get(`https://bugtracker-api-v1.herokuapp.com/api/tickets/assigned/${workerId}`)
          .then(function (res){
            setAssignedWork(res.data)
            setLoading(false)
          })
          .catch(function (error){
            console.log(error)
          })
    }

    useEffect(()=>{
        getWork()
    },[])



    if(loading){
        return <h1> loading...</h1>
    }  else {
        let workOrders = assignedWork.map(item => {
            const dateFormated = new Date(item.dateCreated)
            if(item.isOpen === true){
                return(
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                
                                <div className="accordion-title">
                                    <span id="accordion-span-title">{item.title}</span>
                                    <span className='span-hide'>{item.status}</span>
                                    <span className='span-hide'>{dateFormated.toDateString()}</span>
                                </div>
                                
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className="open-ticket-item">
                                <div className="dashboard-ticket-message-container">
                                    <p className="open-ticket-status">{item.message}</p>
                                </div>
                                <div className="dashboard-link-container">
                                    <Link to = {`/tickets/details/${item._id}`} className="open-ticket-link">View Ticket</Link>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                )
            }
            
            
        })    
        
        return(
            <Accordion>
                {workOrders}
            </Accordion>
        )
            
    }
        

        
}
  


export default Work;
