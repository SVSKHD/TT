import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import {FaPhone , FaWhatsapp} from "react-icons/fa"

const ContactTab = () => {
  return (
    <ButtonGroup>
      <Button  color="warning" target="_blank" href="tel:9100400245" ><FaPhone size={30}/></Button>
      <Button color="success" target="_blank" href="https://wa.me/+919100400245?text=We Need your Taxi services"><FaWhatsapp size={30}/></Button>
    </ButtonGroup>
  );
}

export default ContactTab;