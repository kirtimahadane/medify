import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const App = () => {
  return (
  <Container className='text-center'>
    <Row>
      <Col sm={6}>App One
      </Col>
      <Col sm={6}>App Two
      </Col>
    </Row>
    </Container>
  )
}

export default App