import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" to='./navbar/inicio.js'  >Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/verMenu">Ver Menu</Nav.Link>
            <Nav.Link href="/QuienesSomos">Quienes somos</Nav.Link>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>;
    </>
  );
}

export default ColorSchemesExample;