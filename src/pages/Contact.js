import React from "react";
import Layout from "../layout/Layout";
import Seo from "../components/Seo";
import { Card, CardBody, Button, ButtonGroup, Container } from "reactstrap";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <Seo title="Trip-Tirupati | Contact Us " />
      <Layout>
        <div className="text-center">
          <br />
          <Container>
            <Card
              body
              inverse
              style={{ backgroundColor: "#333", borderColor: "#333" }}
            >
              <h1>Contact Us Through</h1>
              <CardBody>
                <ButtonGroup className="mb-3">
                  <Button color="warning" target="_blank" href="tel:9100400245">
                    <FaPhone size={30} />
                  </Button>
                  <Button
                    color="success"
                    target="_blank"
                    href="https://wa.me/9581887055?text=We Need your Taxi services"
                  >
                    <FaWhatsapp size={30} />
                  </Button>
                </ButtonGroup>
                <br />
                <Button target="_blank" href="tel:9581887055" color="light">
                  Book Your Ride
                </Button>
              </CardBody>
            </Card>
          </Container>
        </div>
      </Layout>
    </div>
  );
};
export default Contact;

// "G-TBQLQPF0J8"
