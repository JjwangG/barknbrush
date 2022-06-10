import BookAppt from './BookAppt';
import Landing from './Landing';
import Services from './Services';
import Staff from './Staff';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return(
  <div className='App'>
    <Router>
      <Switch>
        <Route path='/barknbrush/' exact component={Landing} /> 
        <Route path='/barknbrush/service' exact component={Services} />
        <Route path='/barknbrush/book' exact component={BookAppt} />
        <Route path='/barknbrush/staff' exact component={Staff} />
      </Switch>
    </Router>
  </div>
  );
}

export default App;
