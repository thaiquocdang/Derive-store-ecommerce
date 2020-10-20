import React from "react"
import { LinkContainer } from "react-router-bootstrap"
import { Navbar, Nav, Container, NavDropdown, Dropdown } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { logout } from "../actions/userActions"

const Header = () => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const basketItem = cart.cartItems.length

  const userLogin = useSelector((state) => state.userLogin)

  const { userInfo } = userLogin

  const handleLogout = () => {
      dispatch(logout())
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Derive</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <i className="fas fa-shopping-cart" />
                  Cart {basketItem > 0 && `(${basketItem})`}
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <Dropdown.Item>Profile</Dropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <i className="fas fa-user" />
                    Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
              { userInfo ? null : (
                <LinkContainer to="/register">
                  <Nav.Link>
                  <i class="fas fa-user-plus"></i>
                    Sign Up 
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
