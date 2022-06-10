import logo from './images/logo.svg';
import {Nav, Navbar} from 'react-bootstrap';
import classes from './../styles/NavbarComponent.module.scss';
import React from 'react';

function NavbarComponent(){

    return(
        <Navbar sticky="top" expand="lg" collapseOnSelect className={classes.nav}>
            <Navbar.Brand className={classes.nav__brand} href="/">
                <img src={logo} hfref="/" alt="" className={classes.nav__brand__icon} />{' '}
            </Navbar.Brand>
            <Navbar.Toggle className={classes.nav__toggle}/>
            <Navbar.Collapse className={classes.nav__linkList}>
                <Nav>
                    <Nav.Link href="/service"><h4 className={classes.nav__linkList__link}>SERVICES</h4></Nav.Link>
                    <Nav.Link href="/book"><h4 className={classes.nav__linkList__link}>BOOK APPOINTMENT</h4></Nav.Link>
                    <Nav.Link href="/staff"><h4 className={classes.nav__linkList__link}>STAFF</h4></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarComponent;