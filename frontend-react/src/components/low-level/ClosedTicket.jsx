import React, {useEffect , useState} from 'react';
import '../../css/Dashboard.css'
function Dashboard(props) {

    const [tickets , setTickets] = useState(null)
    let ticketArr = []

    const populateTickets = () => {
        for(let i = 0 ; i < 10 ; i++){
            ticketArr.push(<div className = 'ticket'>
                <span className = ''>Ticket name</span>
                <span>Created: 09-17-21 at 8:45pm</span>
                <span>Status: Pending</span>
            </div>)
        }
        setTickets(ticketArr)
    } 

    useEffect(() => {
        populateTickets()
    },[])
    
    if(tickets == null){
        return null;
    }
    else{
        return (
            <div>
                <div className = 'open-tickets'>
                    <div className = 'ticket-header'>
                        <div className = 'ticket-header-openclose'>My open tickets</div>
                        
                        <div className = 'submit-bug'>Submit Bug</div>
                    </div>
                    
                    <div className = 'ticket-container'>
                        {tickets}
                    </div>
                    
                </div>
                
            </div>
        );
    }

}

export default Dashboard;