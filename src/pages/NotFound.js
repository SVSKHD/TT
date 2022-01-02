import { Container, Card, CardBody, Button } from "reactstrap";
import Layout from "../layout/Layout";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div>
        <Layout>
          <br />
          <Container>
            <Card>
              <CardBody className="text-center">
                <h1>Requested Page Not Found</h1>
                <Button outline color="dark" tag={Link} to="/">
                  <FaHome size={40} />
                </Button>
              </CardBody>
            </Card>
          </Container>
        </Layout>
      </div>
    </>
  );
};
export default NotFound;
