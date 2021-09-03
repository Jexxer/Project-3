import logo from './logo.svg';
import './css/App.css';
import OpenTicket from './components/low-level/OpenTicket';
import ClosedTicket from './components/low-level/ClosedTicket'
function App() {
  return (
    <div className="App">
      <OpenTicket />
      <ClosedTicket />
    </div>
  );
}

export default App;
