import {Container , Row , Col  , Card , CardBody} from "reactstrap"
import {FaUsers} from "react-icons/fa"
import { useState } from "react"
import Layout from "../layout/Layout"


const Signin = () =>{
    return(
     <>
     <div>
         <Layout>
         <Container>
             <Card>
                 <CardBody>
                     <div className="text-center">
                     <Row>
                     <Col>
                     <FaUsers size={100}/>
                     </Col>
                     <Col>
                     <h2 className="display-3">Signin</h2>
                     </Col>
                     </Row>
                     </div>
                     <hr/>
                     <br/>
                     <Row>
                         <Col>
                         
                          </Col>
                          <Col>

                          </Col>
                     </Row>
                 </CardBody>
             </Card>
         </Container>
         </Layout>
     </div>
     </>
    )
}
export default Signin