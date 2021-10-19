import React from "react";
import './header.css';
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header= () =>{
    const {user, logOut} = useAuth;
    return(
        <div className='header'>
            <Navbar fixed="top" bg="dark" variant="dark" >
            <Container>
                <Nav className="me-auto">
                <Link className='site-link' to="/home"><strong>Medicscape</strong></Link>
                <Link className='link' to="/home">Home</Link>
                <Link className='link' to="/aboutus">About Us</Link>
                <Link className='link' to="/services">Services</Link>
                <Link className='link' to="/contact">Contact</Link>
                <Link className='link' to="/login">Log in</Link>
                <Navbar.Text>
                    Signed in as: <a href='#login'>{user.displayname}</a>
                </Navbar.Text>
                </Nav>
            </Container>
            </Navbar>
        </div>
    );
};
export default Header;