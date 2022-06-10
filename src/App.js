import BookAppt from './BookAppt';
import Landing from './Landing';
import Services from './Services';
import Staff from './Staff';
import {
  Routes,
  Route
} from "react-router-dom";
import {Component} from 'react';

class App extends Component {
  render(){
    return(
      <Routes>
        <Route exact path='/' element={<Landing />} /> 
        <Route path='/service' element={<Services />} />
        <Route path='/book' element={<BookAppt />} />
        <Route path='/staff' element={<Staff />} />
      </Routes>);
  }
}

export default App;
