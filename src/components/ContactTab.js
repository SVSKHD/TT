import React, { useState } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const ContactTab = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Contact Us</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>
          <Button target="_blank" href="https://wa.me/9553419654?text='Hello we are interested in availing your services'" outline color="dark">
            <FaWhatsapp size={30} />
          </Button>
        </DropdownItem>
        <DropdownItem>
          <Button outline color="dark">
            <FaPhone size={30} />
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default ContactTab;
