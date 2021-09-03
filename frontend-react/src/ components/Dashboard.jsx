import React from 'react';
import ClosedTicket from './ClosedTicket';
import OpenTicket from './OpenTicket';

function Dashboard(props) {
    return (
        <div>
            <OpenTicket />
            <ClosedTicket />
        </div>
    );
}

export default Dashboard;