import Landing from './ components/Landing'

import logo from './logo.svg';

import './css/App.css';

import { Route , Link , Redirect} from "react-router-dom";
import Dashboard from './ components/Dashboard';
import newTicketPage from './ components/newTicketPage'; // delete
import Ticket from './ components/Ticket';
function App() {
  return (
    <div className="App">
      
      <Route exact path = '/' 
            component = {Landing}
      /> 
      <Route exact path = '/tickets/new'
          component = {newTicketPage}
      /> 

      <Route exact path = '/dashboard' 
          component = {Dashboard}
      />
      
      <Route exact path = '/tickets/:id' 
          component = {Ticket}
      />
    </div>
  );
}

export default App;
