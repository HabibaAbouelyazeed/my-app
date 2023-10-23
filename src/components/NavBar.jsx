import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      data-bs-theme="dark"
      className="bg-body-tertiary">
      <Container className="">
        <Navbar.Brand>
          <Link to="/" className="nav-link fs-3">
            E-commerce
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold d-flex align-items-center">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
            <Link to="/counter" className="nav-link">
              Counter
            </Link>
            <Link to="/login" className="nav-link">
              <div className="btn border border-success fw-bold">login</div>
            </Link>
            <Link to="/signup" className="nav-link">
              <div className="btn btn-success">SignUp</div>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
