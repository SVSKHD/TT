import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import {FaPhone , FaWhatsapp} from "react-icons/fa"

const ContactTab = () => {
  return (
    <ButtonGroup>
      <Button  color="warning" target="_blank" href="tel:+6494461709" ><FaPhone size={30}/></Button>
      <Button color="success" target="_blank" href="https://wa.me/9553419654"><FaWhatsapp size={30}/></Button>
    </ButtonGroup>
  );
}

export default ContactTab;