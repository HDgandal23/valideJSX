import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Prix from './prix';
import Name from './name';
import Description from './description';
import Image from './image';
import Product from './products';

import './App.css';




function App() {
  const name = "Habib Diallo CEO de Gandal-Dev"
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Gandal-Dev</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Accueil</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <CardGroup className='styleCard'>
      <Card>
        <Image url={Product.url} />
        <Card.Body>
          <Card.Title>
            <Name nom={Product.nom} />
          </Card.Title>
          <Card.Text>
              <Description description={ Product.description } />
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Prix prix={Product.prix} />
        </Card.Footer>
      </Card>
      <h3> Hello, { name } </h3>
      </CardGroup>

      <div>
        
      </div>
    </>
    

  );
}

export default App;
 