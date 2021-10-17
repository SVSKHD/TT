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
          <Button target="_blank" href="https://wa.me/9100400245?text=Hello%20we%20are%20interested%20in%20availing%20your%20taxi%20services%20please%20contact%20me%20soon." outline color="dark">
            <FaWhatsapp size={30} />
          </Button>
        </DropdownItem>
        <DropdownItem>
          <Button target="_blank" href="tel:+919100400245" outline color="dark">
            <FaPhone size={30} />
          </Button>
        </DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
};

export default ContactTab;
