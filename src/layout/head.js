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

import { FaCar, FaShuttleVan } from "react-icons/fa";
import { UserContext } from "../Context/UserContext";

const Head = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(UserContext);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="warning" dark expand="md">
        <Container fluid>
          <NavbarBrand href="/"> Trip Tirupati</NavbarBrand>
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
                    <Button color="light" tag={Link} to="/signup">
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
