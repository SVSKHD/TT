import { Card, CardBody, Container, Row, Col } from "reactstrap";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <div>
        <br />
        <Container fluid>
          <Card className="shadow-lg">
            <CardBody>
              <Row>
                <Col>
                  <h1>Trip Tirupati</h1>
                </Col>
                <Col></Col>
              </Row>
              <hr />
              <h5 className="text-center">Trip Tirupati © {date}</h5>
            </CardBody>
          </Card>
        </Container>
      </div>
      <br />
    </>
  );
};
export default Footer;
