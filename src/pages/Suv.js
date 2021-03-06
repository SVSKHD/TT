import React from "react";
import Layout from "../layout/Layout";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Slider1 from "../components/Carousel";
import ContactTab from "../components/ContactTab";
import Seo from "../components/Seo";
import SUVI from "../assests/Suv.png";

const SUV = () => {
  return (
    <div>
      <Seo
        title="Trip-Tirupati | Avail Our SuV Services"
        description="hello there, we are here with our Suv cars for micro families and you can choose your locations with packages to your flexibility | Trip Tirupati packages"
        keywords="Trip Tirupati packages , Hatchback taxi in Tirupati , Tirupati travelling services , Tirumala travelling services, Cab hire in Tirupati , Best taxi company in Tirupati "
        keyphrase="Trip Tirupati packages , Hatchback taxi in Tirupati , Tirupati travelling services , Tirumala travelling services, Cab hire in Tirupati , Best taxi company in Tirupati"
      />
      <Layout>
        <br />
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <Card className="shadow-lg">
                <CardBody>
                  <div className="text-center">
                    <h1 style={{ fontFamily: "Poppins" }}>SUV</h1>
                    <hr />
                    <img
                      src={SUVI}
                      alt="Trip Tirupati SUV Images"
                      className="img-fluid shadow-lg img-thumbnail rotate"
                    />

                    <br />
                    <hr />
                    <p className="text-dark">
                      Hello There We are here with multiple options and now this
                      option is one of them it's SUV for micro families and we
                      see there might be heavy schedule in your itenary but we
                      will help you to make your trip memorable within your
                      flexibilities.
                    </p>
                    <br />

                    <ContactTab />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} xs={12}>
              <div className="mb-2" />
              <Slider1 />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};
export default SUV;
