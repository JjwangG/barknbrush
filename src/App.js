import BookAppt from './BookAppt';
import Landing from './Landing';
import Services from './Services';
import Staff from './Staff';
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return(<HashRouter>
      <Routes>
        <Route path='/' element={<Landing />} /> 
        <Route path='/service' element={<Services />} />
        <Route path='/book' element={<BookAppt />} />
        <Route path='/staff' element={<Staff />} />
      </Routes>
    </HashRouter>);
}

export default App;
