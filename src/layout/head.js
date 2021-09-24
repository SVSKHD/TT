import React, { useState } from "react";
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
import { FaCar, FaShuttleVan } from "react-icons/fa";

const Head = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <Container fluid>
          <NavbarBrand href="/">Trip Tirupati</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Travel Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <FaCar size={30} />
                  </DropdownItem>
                  <DropdownItem>
                    <FaShuttleVan size={30} />
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav>
              <ButtonGroup>
                <Button color="success" tag={Link} to="/signin">
                  Signin
                </Button>
                <Button color="warning" tag={Link} to="/signup">
                  Signup
                </Button>
              </ButtonGroup>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Head;
