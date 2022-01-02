import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const LoginForm = () => (
<Navbar collapseOnSelect  expand="xl" bg="danger" variant="dark" sticky="top">
  <Container>
  <Navbar.Brand expand="lg" href="#home">EKA Çelik Merdiven</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Anasayfa</Nav.Link>
      <Nav.Link href="#pricing">Ürünler</Nav.Link>
      <Nav.Link href="#pricing">İletişim</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
)

export default LoginForm