import React from 'react';
import './home-module.css';
import Navigation from '../../components/navigation/Navigation';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = () => {
  return (
    <>
    <Container className='marquee text-center'>
        The health and well-being of our patients and their health care team will always be our priority, so we follow the best practices for cleanliness.
    </Container>
    <Navigation/>
    
    
    </>
    
  )
}

export default Home