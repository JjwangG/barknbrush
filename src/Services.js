import {Row, Col,Button} from 'react-bootstrap';
import service from './data.json'
import classes from './styles/Services.module.scss'
import NavbarComponent from './components/NavbarComponent';
import React from 'react';
import { useState } from 'react';
import Calculate from './components/Calculate';

/*
Service Card code was heavily inspired by the following youtube video:
https://www.youtube.com/watch?v=NlZUtfNVAkI&t=388s 
"How to use Bootstrap with React" by LogRocket 
*/

function ServiceCard({ data }){
    return(
        <div className={classes.card}>
            <Row className={classes.card__container}>
                <Col xs={7} className={classes.card__container__col1}>
                    <h1 className={classes.card__container__col1__h1}> {data.name}</h1> 
                    <p> {data.desc} </p>
                </Col>
                <Col className={classes.card__container__col2}>
                    <p> Small Dogs &#40; 10 - 40 lbs &#41; : ${data.priceS} </p>
                    <hr/>
                    <p> Large Dogs &#40; 41 - 100 lbs &#41; : ${data.priceL} </p>
                </Col>
            </Row>
        </div>
    )
}

function Services() {
    const [buttonModal, setModal] = useState(false);

    return (
        <div className={classes.main}>
            <NavbarComponent/>
            <Col className={classes.main__container}>
                <h1 className={classes.main__container__header}>DOG GROOMING SERVICES</h1>
                {service.services.map(data => (
                    <Col className = "mb-4" key = {`${data.id}`}>
                        <ServiceCard data={data}/>
                    </Col>
                ))}
                <p className={classes.main__container__text}>Looking to figure the total cost of an appointment you're thinking of booking? Calculate total here: </p>
                <Calculate/>
            </Col>
        </div>
    );
  }
  
export default Services;

  //service descriptions from https://www.furryfriendsspa.ca