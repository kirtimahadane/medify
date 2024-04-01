import React from 'react';
import './navigation.module.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Logo from "../../assets/logo.png"

const Navigation = () => {
  return (
   <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
    <Container>
          <Navbar.Brand href="#home" >
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top" 
            />{' '}
            <Navbar.Brand className='medify-txt'>Medify</Navbar.Brand>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
          <Nav.Link href="#">Find Doctors</Nav.Link>
            <Nav.Link href="#">Hospitals</Nav.Link>
            <Nav.Link href="#">Medicines</Nav.Link>
            <Nav.Link href="#">Surgeries</Nav.Link>
            <Nav.Link href="#">Software Provider</Nav.Link>
            <Nav.Link href="#">Facilities</Nav.Link>
            <Button className='booking-btn' as="a">My Bookings</Button>
            


          </Nav>
        
        {/*
        navbar container
        */}
        </Navbar.Collapse>
        </Container>
   </Navbar>
  )
}

export default Navigation