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
        <Route path='/barknbrush' element={<Landing />} /> 
        <Route path='/barknbrush/service' element={<Services />} />
        <Route path='/barknbrush/book' element={<BookAppt />} />
        <Route path='/barknbrush/staff' element={<Staff />} />
      </Routes>
    </Router>);
}

export default App;
