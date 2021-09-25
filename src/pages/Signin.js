import { useContext, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Input,
  InputGroup,
  InputGroupAddon,
  Button,
} from "reactstrap";
import firebase from "firebase/app"
import "firebase/auth"
import { FaStar, FaUsers } from "react-icons/fa";
import Layout from "../layout/Layout";
import { toast } from "react-toastify";
import { UserContext } from "../Context/UserContext";
import { Redirect } from "react-router";


const Signup = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading , setLoading] = useState(false)
    
  const handleSignUp = () => {

    try {
        firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((res) => {
          setLoading(true)
          console.log(res);
          context.setUser({ email: res.user.email, uid: res.user.uid }); 
      })
      setLoading(false)  
    } catch (error) {
        console.log(error);
        toast(error.message, {
          type: "error",
        }); 
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }
  return (
    <>
      <div>
        <Layout>
          <Container>
            <Card>
              <CardBody>
                <div className="text-center">
                  <Row>
                    <Col>
                      <FaUsers size={100} />
                    </Col>
                    <Col>
                      <h2 className="display-3">Signin</h2>
                    </Col>
                  </Row>
                </div>
                <hr />
                <br />
                <Row>
                  <Col>
                  <Card
                      body
                      inverse
                      style={{ backgroundColor: "#333", borderColor: "#333" }}
                    >
                      <CardBody>
                        <h3>Signin</h3>
                        <hr />
                        <form onSubmit={handleSubmit}>
                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <Button outline color="light">
                                <FaUsers size={30} />
                              </Button>
                            </InputGroupAddon>
                            <Input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Place your Registered Email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            />
                          </InputGroup>

                          <br />

                          <InputGroup>
                            <InputGroupAddon addonType="prepend">
                              <Button outline color="light">
                                <FaStar size={30} />
                              </Button>
                            </InputGroupAddon>
                            <Input
                              type="password"
                              name="password"
                              id="password"
                              placeholder="Your password here"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                          </InputGroup>

                          <br />
                          <Button color="success">Signin</Button>
                        </form>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col>
                   {loading ? <h1 className="text-center">Wait While We Make you a RoadMap</h1> : <h1 className="text-center">Please Signin</h1>}
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Container>
        </Layout>
      </div>
    </>
  );
};
export default Signup;
