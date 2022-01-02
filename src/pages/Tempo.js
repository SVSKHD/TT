import React from "react";
import Slider1 from "../components/Carousel";
import Layout from "../layout/Layout";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import ContactTab from "../components/ContactTab";
import Seo from "../components/Seo";
import TempoI from "../assests/VAN.png";

const Tempo = () => {
  return (
    <div>
      <Seo
        title="Trip-Tirupati | Avail our Sedan Services"
        description="hello there, we are here with our Sedan cars for micro families and you can choose your locations with packages to your flexibility | Trip Tirupati packages"
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
                    <Row>
                      <h1 style={{ fontFamily: "Poppins" }}>Tempo or Van</h1>
                      <hr/>
                      <img
                        src={TempoI}
                        alt="Trip Tirupati Tempo Images"
                        className="img-fluid shadow-lg img-thumbnail rotate"
                      />
                    </Row>
                        <br />
                        <hr/>
                        <p className="text-dark">
                          Hello There We are here with multiple options and now
                          this option is one of them it's Sedan for medium sized
                          families and we see there might be heavy schedule in
                          your itenary but we will help you to make your trip
                          memorable within your flexibilities & Budget.
                        </p>
                        <br />
                      
                  
                    <ContactTab />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md={6} xs={12}>
              <Slider1 />
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};
export default Tempo;
