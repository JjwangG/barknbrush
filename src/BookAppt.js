import { useState } from 'react';
import {Row, Col, Form,Button} from 'react-bootstrap';
import data from './data.json'
import NavbarComponent from './components/NavbarComponent';
import classes from './styles/BookAppt.module.scss';
import Confirm from './components/Confirm'
import React from 'react';

const times = ["9:00 am","9:30 am","10:00 am","10:30 am","11:00 am","11:30 am",
"12:00 am","12:30 am","1:00 pm","1:30 pm","2:00 pm","2:30 pm","3:00 pm","3:30 pm",
"4:00 pm","4:30 pm","5:00 pm","5:30 pm","6:00 pm","6:30 pm","7:00 pm","7:30 pm","8:00 pm"]; 

/*
JS for the DogCounter component was referenced from the video:
Event Handling in React(Clicking on a Button) The 10 Days of React JS (Day 8) by LearnWebCode
https://www.youtube.com/watch?v=Zbjmfqw9RXM
*/

function DogComponent ({label, text}){
  const [dogCount, setCount] = useState(0);

  function addDogHandler(){
    setCount(function(prev){
      if (prev < 3){
        return prev+1;
      }
      alert ("Maximum 3 per booking");
      return prev;
    })
  }

  function minusDogHandler(){
    setCount(function(prev){
      if (prev>0){
        return prev-1;
      }
      return 0;
    })
  }
  return (
    <Col className={classes.dogComp}>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
      <Form.Label className={classes.dogComp}>Number of {label} Breeds &#40;{text} lbs&#41;</Form.Label>
      <div class="input-group mb-3">
        <button class="btn btn-outline-secondary" type="button" onClick={addDogHandler}>+</button> 
        <button class="btn btn-outline-secondary" type="button" onClick={minusDogHandler}>-</button> 
        <input type="text" class="form-control" placeholder="" value={dogCount}/>
      </div>
    </Col>
  )
}

function BookAppt() {
  const [buttonModal, setModal] = useState(false);
  const [groomer, setGroomer] = useState();
  const [service, setService] = useState();
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  function handleSubmit(e) {
    setModal(true);
    e.preventDefault();
  }

  return (
    <div className={classes.main}>
      <NavbarComponent/>
      <div className={classes.main__container}>
        <h1 className={classes.main__container__header}>BOOK YOUR APPOINTMENT</h1>
        <Form onSubmit={handleSubmit} className={classes.main__container__form}>
          <Row className = "mb-2">
            <Col>
              <Form.Label className={classes.main__container__form__label}>First Name</Form.Label>
              <Form.Control type="text" placeholder="first name" />
            </Col>
            <Col>
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="last name" />
            </Col>
          </Row>
          <Row className = "mb-4">
            <Col xs={8}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="example@email.com" />
            </Col>
            <Col>
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="number" placeholder="1234567890"/>
            </Col>
          </Row>
          <Form.Label>Groomer</Form.Label>
          <Form.Select id="staff" onChange={e => setGroomer(e.target.value)}>
            <option>Select A Groomer</option>
            {data.staff.map(data => (<option value= {`${data.name}`}>{data.name}</option>))}
          </Form.Select>
          <Row>
            <DogComponent label = "Small" text="10-40"/>
            <DogComponent label = "Large" text="41-100"/>
            <Col xs={8}>
              <Form.Label className={classes.main__container__form__serviceLabel}>Service Type</Form.Label>
              <Form.Select id="appt" onChange={e => setService(e.target.value)}>
                <option>Select Service</option>
                {data.services.map(data => (<option value= {`${data.name}`}>{data.name}</option>))}
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
            <Form.Label>Date of Appointment</Form.Label>
            <Form.Control type="date" onChange={e => setDate(e.target.value)}/>
            </Col>
            <Col>
            <Form.Label>Time of Appointment</Form.Label>
            <Form.Select id="appt-time" onChange={e => setTime(e.target.value)}>
              {times.map(data => (<option value= {`${data}`}>{data}</option>))}
            </Form.Select>
            </Col>
          </Row>
          <br/>
          <Form.Control as="textarea" rows={4} placeholder="Additional Comments"/>  
          <br/>      
          <div className={classes.main__container__form__buttonDiv}>
            <Button variant="outline-secondary" type="submit">BOOK APPOINTMENT</Button>
          </div>
          <Confirm trigger = {buttonModal} setTrigger={setModal}> 
            <p>Thank you for booking with Bark&amp;Brush. We'll give you a call 1 hr prior to your appointment as a reminder.</p>
            <p>Date of Appointment: {date}, {time}</p>
            <p>Type of Appointment: {service} appointment with {groomer}</p>
          </Confirm>
        </Form>
      </div>
    </div>
  );
}
  
export default BookAppt;