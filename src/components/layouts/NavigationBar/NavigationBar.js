import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
function NavigationBar() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Link className="navbar-brand" to="/">
                Logo
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/role" className="nav-link">
                        Role
                    </Link>
                    <Link to="/user" className="nav-link">
                        User
                    </Link>
                </Nav>
                <Nav>
                    <Link to="/login" className="nav-link">
                        Login
                    </Link>
                    <Link to="/register" className="nav-link">
                        Register
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
