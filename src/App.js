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
        <Route path='https://jjwangg.github.io/barknbrush/' element={<Landing />} /> 
        <Route path='https://jjwangg.github.io/barknbrush/service' element={<Services />} />
        <Route path='https://jjwangg.github.io/barknbrush/book' element={<BookAppt />} />
        <Route path='https://jjwangg.github.io/barknbrush/staff' element={<Staff />} />
      </Routes>
    </Router>);
}

export default App;
