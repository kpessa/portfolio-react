import { Navbar, Nav } from 'react-bootstrap';

function MyNavbar({ currentPage, setCurrentPage }) {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="#">KURT PESSA</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setCurrentPage('about-me')} href="#about-me">
            About Me
          </Nav.Link>
          <Nav.Link onClick={() => setCurrentPage('portfolio')} href="#portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link onClick={() => setCurrentPage('resume')} href="#resume">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
