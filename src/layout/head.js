import React, { useContext, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  ButtonGroup,
  Container,
} from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import LOGO from "../assests/TTNEW.png";

const Head = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(UserContext);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="FontFamilyN">
      <Navbar className="shadow-lg" color="light" light expand="md">
        <Container fluid>
          <NavbarBrand href="/">
            <img src={LOGO} height="100" alt="Tirupati Logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Travel Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/sedan">Sedan</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/suv">Suv</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/tempo">Van</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/contact">Contact</NavLink>
              </NavItem>
            </Nav>
            <Nav>
              {context.user ? (
                <NavItem>
                  <NavLink
                    onClick={() => {
                      context.setUser(null);
                    }}
                    className="btn btn-danger text-white"
                  >
                    <b>Logout</b>
                  </NavLink>
                </NavItem>
              ) : (
                <>
                  <ButtonGroup size="md">
                    <Button color="success" tag={Link} to="/signin">
                      <b>Signin</b>
                    </Button>
                    <Button outline color="dark" tag={Link} to="/signup">
                      <b>Signup</b>
                    </Button>
                  </ButtonGroup>
                </>
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Head;

// uasbles

// <img height="100" alt="Hello Its Trip Tirupati" src={TL}/>
