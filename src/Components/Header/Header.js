import React from 'react';
import './Header.css'
import logo from '../Image/Logo.png'
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <>
             <Container >
                <Navbar bg="transparent" variant="dark">
                <Navbar.Brand href=""><img className="logo" src={logo} alt=""/></Navbar.Brand>
            <Form inline>
                <FormControl type="text" placeholder="Search your destination" className="mr-sm-2 input search-bar" />
            </Form>
                <Nav defaultActiveKey="#" as="ul" className="navi">
                    <Nav.Item as="li" >
                        <Nav.Link  href=""  className='text-white'>News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" >
                        <Nav.Link  href="#"  className='text-white'>Destination</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link  href="#"  className='text-white'>Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link  href="#"  className='text-white'>Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link  href="#"  className='text-white btn btn-warning'>Login</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Navbar>                                   
            </Container> 
            
        </>
    );
};

export default Header;