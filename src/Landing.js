import {Col} from 'react-bootstrap';
import image from './components/images/doggie.jpg'
import NavbarComponent from './components/NavbarComponent';
import classes from './styles/Landing.module.scss'
import React from 'react';

const link = "https://www.google.com/maps/place/385+Metcalfe+St,+Ottawa,+ON+K2P+1S7/@45.4134856,-75.6912221,17z/data=!3m1!4b1!4m5!3m4!1s0x4cce05afbd989f05:0xfbd4c4f0a152f73b!8m2!3d45.4134856!4d-75.6890334";

function Landing() {
    return (
        <div className={classes.main}>
            <NavbarComponent/>
            <Col className ={classes.main__container}>
            <div className ={classes.main__container__about}>
                <Col className ={classes.main__container__about__col1}>
                    <h1 className ={classes.main__container__about__col1__h1}>WHO ARE WE?</h1>
                    <p>Your pet is a part of your family. Give them a luxurious pampering experience in a comfortable environment. 
                        Getting your pet the care they need to look and feel their best shouldn&apos;t be a burden. With over 20 years 
                        of combined experience in the pet pampering buisness, Bark&amp;Brush seeks to deliever the best grooming experience 
                        your pet could have.</p>
                </Col>
                <Col className ={classes.main__container__about__col2}>
                    <img src={image} className ={classes.main__container__about__col2__img}/>
                </Col>
            </div>
            <hr/> 
            <div className ={classes.main__container__contact}>
                <Col>
                <h1 className ={classes.main__container__contact__header}>WORK HOURS</h1>
                <ul className ={classes.main__container__contact__list}> 
                    <li>Mon-Thurs: 9:00am - 8:00pm</li>
                    <li>Fri,Sat: 9:00am - 4:00pm</li>
                    <li>Sun: Closed</li>
                </ul>
                </Col>
                <Col>
                <h1 className ={classes.main__container__contact__header}>CONTACT US</h1>
                <ul className ={classes.main__container__contact__list}> 
                    <li>Address: <a href={link} target="_blank">385 Metcalfe St</a>, Ottawa, ON, K2P 1S7</li>
                    <li>Email: barkNbrush@gmail.com</li>
                    <li>Phone Number: 613-444-8637</li>
                </ul>
                </Col>
            </div>
            </Col>
        </div>
    );
  }
  export default Landing;

/*
list styling:style="list-style-type:none; text-align:center"
*/