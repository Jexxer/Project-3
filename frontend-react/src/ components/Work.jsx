import React, { useEffect, useState } from "react";
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
import '../css/Work.css'


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

        if(localStorage.getItem("privLevel").replace(/['"]+/g, '') === "2" || localStorage.getItem("privLevel").replace(/['"]+/g, '') === "3"){
            return(
                <div className="work-page-container">
                    <h1>BugTracker</h1>
                    <h2>Your work orders</h2>
                    <div className="work-accordion-container">
                            <Accordion>
                                {workOrders}
                            </Accordion>
                    </div>
                    <UserInfo/>
                </div>
            )
        } else {
            return(
                <div>
                    <h1>You do not have permision to view this page!</h1>
                    <Link to="/">Home</Link>
                    <UserInfo/>
                </div>
            )
        }
        
        
            
    }
        

        
}
  


export default Work;
