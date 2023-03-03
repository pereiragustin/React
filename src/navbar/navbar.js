import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" to='./navbar/inicio.js'  >Inicio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/verMenu">Ver Menu</Nav.Link>
            <Nav.Link href="/QuienesSomos">Quienes somos</Nav.Link>
            <Nav.Link href="/Contacto">Contacto</Nav.Link>
            <Nav.Link href="/productos/Burger">Burgers</Nav.Link>
            <Nav.Link href="/productos/Bebida">Bebidas</Nav.Link>
            <Nav.Link href="/productos/Compartir">Para Compartir</Nav.Link>
            <Nav.Link href="/productos/Veggie">Veggie</Nav.Link>
            
            
          </Nav>
        </Container>
      </Navbar>;
    </>
  );
}

export default ColorSchemesExample;