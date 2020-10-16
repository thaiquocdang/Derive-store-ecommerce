import React from "react";
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

const Header = () => {
  const cart = useSelector(state => state.cart)
  const basket = cart.cartItems.length
  console.log(basket);
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>Derive</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to='/cart'>
                <Nav.Link><i className='fas fa-shopping-cart'/>Cart { basket > 0 && `(${basket})`}</Nav.Link>   
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link><i className='fas fa-user'/>Sign In</Nav.Link>   
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
