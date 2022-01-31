import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import '../App.css'
const Header = () => {
    return (
        <div className="header">
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="/" className="marginLeft"> AudioBook PU</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                {/* <Nav.Link href="#features">Features</Nav.Link> */}
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="List of Sthana" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/sutrasthana">Sutra Sthana</NavDropdown.Item>
                    <NavDropdown.Item href="/nidanasthana">Nidana Sthana</NavDropdown.Item>
                    <NavDropdown.Item href="/vimanasthana">Vimana Sthana</NavDropdown.Item>
                    <NavDropdown.Item href="/shareerasthana">Shareera Sthana</NavDropdown.Item>
                    {/* <NavDropdown.Divider />sutrasthana,nidanasthana,vimanasthana,shareerasthana */}
                    {/* <NavDropdown.Item href="/test">Test</NavDropdown.Item> */}
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="/all-books">Chapters</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header