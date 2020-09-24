import React from 'react';
import './Header.css'
import logo from '../Image/Logo.png'
import { Container, Form, FormControl, Nav, Navbar} from 'react-bootstrap';

const Header = () => {
    return (
        <>
             <Container >
                <Navbar bg="transparent" variant="dark">
                <Nav.Item  >
                        <Nav.Link  href="/Home"  className='text-white'><img className="logo" src={logo} alt=""/></Nav.Link>
                    </Nav.Item>
            <Form inline>
                <FormControl type="text" placeholder="Search your destination" className="mr-sm-2 input search-bar" />
            </Form>
                <Nav defaultActiveKey="#" as="ul" className="navi">
                    <Nav.Item as="li" >
                        <Nav.Link  href="/News"  className='text-white'>News</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li" >
                        <Nav.Link  href="/Destination"  className='text-white'>Destination</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link  href="/Blog"  className='text-white'>Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <Nav.Link  href="Contact"  className='text-white'>Contact</Nav.Link>
                    </Nav.Item>
                    <Nav.Item as="li">
                        <a href=" "  className='text-white btn btn-warning'>Login</a>
                    </Nav.Item>
                </Nav>
                </Navbar>                                   
            </Container> 
            
        </>
    );
};

export default Header;