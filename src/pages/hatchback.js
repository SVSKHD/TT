import React from "react";
import Layout from "../layout/Layout";
import Slider1 from "../components/Carousel";
import { Container, Row, Col} from "reactstrap";

const hatchback = () => {
  return (
    <div>
      <Layout>
        <Container>
          <Row>
            <Col>
              <h1>Hatch Back</h1>
            </Col>
            <Col>
             <Slider1/>
            </Col>
          </Row>
        </Container>
      </Layout>
    </div>
  );
};
export default hatchback;
