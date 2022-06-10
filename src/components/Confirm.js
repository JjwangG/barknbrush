import { Modal } from "react-bootstrap";
import logo from './images/logo.svg';
import classes from './../styles/Confirm.module.scss';
import React from 'react';

function Confirm(props){
    return(
        <Modal show={props.trigger} onHide={() => props.setTrigger(false)} className={classes.modal}>
            <Modal.Header closeButton className={classes.modal__header}>
                <Modal.Title >Appointment Confirmed</Modal.Title>
            </Modal.Header>
            <Modal.Body className={classes.modal__body}>
                {props.children}
                <img src={logo} className={classes.modal__body__img}/>
            </Modal.Body>
        </Modal>
    );
}

export default Confirm
