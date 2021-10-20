import React from "react";
import './header.css';
import { Button, ButtonGroup, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header= () =>{
    const {user, logOut} = useAuth;
    return(
        <div className='header'>
            <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home"><strong>Medicscape</strong></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/aboutus'>About Us</Nav.Link>
                    <Nav.Link as={Link} to='/services'>Services</Nav.Link>
                    <Nav.Link as={Link} to='/contact'>Contact</Nav.Link>
                    {user?.email ?
                    <Button variant='light'>LogOut</Button> :
                    <Nav.Link as={Link} to='/login'>LogIn</Nav.Link>
                    }

                <Navbar.Text>
                    Signed in as: <a href="/login">{user?.displayEmail}</a>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    );
};
export default Header;