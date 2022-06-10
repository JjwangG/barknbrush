import 'bootstrap/dist/css/bootstrap.min.css';
import {Col} from 'react-bootstrap';
import team from './data.json'
import classes from './styles/Staff.module.scss'
import NavbarComponent from './components/NavbarComponent';
import React from 'react';

const specialStaff = {
    "name": "Onyx",
    "title": "Guest Services Manager",
    "pronouns": "He/Him/Good Boy",
    "img": "/images/dog2.jpg",
    "desc": "Onyx is our resident guest services manager and supervisor. He has 3 years of experience in the field and is exceptional at his work"
}

function StaffCard({ data }){
    return(
        <Col className={classes.staffCard}>
            <div className={classes.staffCard__container}>
                <div className={classes.staffCard__container__imgContainer}>
                    <img src={data.img} className={classes.staffCard__container__imgContainer__img}/> 
                </div>
                <div className={classes.staffCard__container__descContainer}>
                    <h2 className={classes.staffCard__header}> 
                        {data.name} &#40;{data.pronouns}&#41;
                    </h2>
                    <p className={classes.staffCard__container__descContainer__desc}> {data.desc} </p>
                </div>
            </div>
            <hr/>
        </Col>
    )
}

function Services() {
    return (
      <div className={classes.main}>
          <NavbarComponent/>
            <Col className={classes.main__container}>
                <h1 className={classes.main__container__header}>OUR STAFF</h1>
                {team.staff.map(data => (
                    <div class="col" xs={3} className = "mb-5" key = {`${data.id}`}>
                        <StaffCard data={data}/>
                    </div>
                ))}
                <StaffCard data={specialStaff}/>
            </Col>
        </div>
    );
  }
  
  export default Services;