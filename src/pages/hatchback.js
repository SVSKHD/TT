import Layout from "../layout/Layout";
import Slider1 from "../components/Carousel";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
} from "reactstrap";
import ContactTab from "../components/ContactTab";


const hatchback = () => {

  return (
    <div>
      <Layout>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <Card>
                <CardBody>
                  <div className="text-center">
                    <h1>Hatch Back</h1>

                    <br />
                     <ContactTab/>
                 
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
export default hatchback;
