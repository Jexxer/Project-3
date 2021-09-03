

import Landing from './ components/Landing'

import logo from './logo.svg';

import './css/App.css';
import { Route , Link , Redirect} from "react-router-dom";
import Dashboard from './components/low-level/Dashboard';


function App() {
  return (
    <div className="App">

    <Landing/>
       
        
      


      <Route exact path = '/dashboard' 
          component = {Dashboard}
      />

    </div>
  );
}

export default App;
