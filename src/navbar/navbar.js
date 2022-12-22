import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" to='./navbar/inicio.js'  >Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Ver Menu</Nav.Link>
            <Nav.Link href="#features">Quienes somos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;