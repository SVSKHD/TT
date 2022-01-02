import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const ContactTab = () => {
  return (
    <ButtonGroup>
      <Button color="warning" target="_blank" href="tel:9492121963">
        <FaPhone className="ContactIcon" size={30} />
      </Button>
      <Button
        color="success"
        target="_blank"
        href="https://wa.me/+919492121963?text=We Need your Taxi services"
      >
        <FaWhatsapp size={30} />
      </Button>
    </ButtonGroup>
  );
};

export default ContactTab;
