import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavOne() {
  return (
        <Navbar expand="lg" className="navbar navbar-expand-lg bg-primary px-4" data-bs-theme="dark">
          <Container>
          <Navbar.Brand href="#about">Liamco</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">                
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#certs">Certifications</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
}

export default NavOne;