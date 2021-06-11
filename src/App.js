import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import FreeConsultation from './components/FreeConsultation/FreeConsultation';
import PaidServices from './components/PaidServices/PaidServices';

function App() {
  return (
    <div className="App">
      <Router>  
        <Switch> 

          <Route exact path="/"> 
              <Home></Home> 
          </Route>
          
          <Route path="/freeconsultation"> 
                  <FreeConsultation></FreeConsultation>         
          </Route>

          <Route path="/paidservices">
            <PaidServices></PaidServices>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
