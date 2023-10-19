import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
            <Container className="">
                <Navbar.Brand>
                    <Link to="/" className='nav-item fs-3'>E-commerce</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-bold">
                        <Nav.Link >
                            <Link to="/" className='nav-item'>Home</Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link to="/info" className='nav-item'>Info</Link>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;