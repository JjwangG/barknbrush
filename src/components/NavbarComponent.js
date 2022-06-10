import logo from './images/logo.svg';
import {Nav, Navbar, NavLink} from 'react-bootstrap';
import classes from './../styles/NavbarComponent.module.scss';
import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent(){

    return(
        <Navbar sticky="top" expand="lg" collapseOnSelect className={classes.nav}>
            <Navbar.Brand className={classes.nav__brand} >
                <NavLink as={Link} to="/"><img src={logo} alt="" className={classes.nav__brand__icon}/></NavLink>{' '}
            </Navbar.Brand>
            <Navbar.Toggle className={classes.nav__toggle}/>
            <Navbar.Collapse className={classes.nav__linkList}>
                <Nav>
                    <NavLink as={Link} to="/service"><h4 className={classes.nav__linkList__link}>SERVICES</h4></NavLink>
                    <NavLink as={Link} to="/book"><h4 className={classes.nav__linkList__link}>BOOK APPOINTMENT</h4></NavLink>
                    <NavLink as={Link}  to="/staff"><h4 className={classes.nav__linkList__link}>STAFF</h4></NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavbarComponent;