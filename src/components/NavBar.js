import React, { useState } from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { navbarContent } from "../DB";
import "./Navbar.css";

const NavigationBar = () => {
  const [isOpen, updateIsOpen] = useState(false);
  return (
    <>
      <Navbar
        collapseOnSelect
        fixed="top"
        expand="sm"
        bg="dark"
        variant="dark"
        className="navbar__custom"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Brand>SUJIT</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" />

          <Nav>
            {navbarContent.map((navContent) =>
              navContent.dropdown.length !== 0 ? (
                <NavDropdown
                  title={navContent.title}
                  id="basic-nav-dropdown"
                  alignRight
                  onMouseOver={() => updateIsOpen(true)}
                  onFocus={() => updateIsOpen(true)}
                  onMouseLeave={() => updateIsOpen(false)}
                  onBlur={() => updateIsOpen(false)}
                  toggle={() => updateIsOpen(!isOpen)}
                  isOpen={isOpen}
                >
                  {navContent.dropdown.map((dropdownItem) => (
                    <NavDropdown.Item href={dropdownItem.path}>
                      {dropdownItem.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link href={navContent.path}>{navContent.title}</Nav.Link>
              )
            )}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
