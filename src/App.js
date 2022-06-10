import BookAppt from './BookAppt';
import Landing from './Landing';
import Services from './Services';
import Staff from './Staff';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return(<Router>
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/service' element={<Services />} />
        <Route path='/book' element={<BookAppt />} />
        <Route path='/staff' element={<Staff />} />
      </Routes>
    </Router>);
}

export default App;
