import React from 'react'
import './../index.css';
import { LinkContainer } from 'react-router-bootstrap';
import { Navbar, Nav, Container } from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" variant="light" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand id="nav-title">DeSilo</Navbar.Brand>
                    </LinkContainer>
                    
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <LinkContainer to='/'>
                                <Nav.Link><i className="far fa-paper-plane"></i>Publish</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/'>
                                <Nav.Link><i className="fas fa-book-open"></i>Review Papers</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/'>
                                <Nav.Link><i className="far fa-user-circle"></i>Profile</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='/'>
                                <Nav.Link><i className="far fa-question-circle"></i>About</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
export default Header