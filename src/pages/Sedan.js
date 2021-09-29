import React from 'react'
import Slider1 from '../components/Carousel'
import Layout from '../layout/Layout'
import { Container, Row, Col, Card, CardBody } from "reactstrap";


const Sedan = () => {
    return (
        <div>
             <Layout>
        <Container>
          <Row>
            <Col>
              <h1>Sedan</h1>
            </Col>
            <Col>
             <Slider1/>
            </Col>
          </Row>
        </Container>
      </Layout>
        </div>
    )
}
export default Sedan