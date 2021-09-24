import {Container } from "reactstrap"
import Layout from "../layout/Layout"
import InfoTab  from "../components/InfoTab"
import Seo from "..//components/Seo"


const Home = () =>{
    const styles = {
        container:{
            fontFamily : 'Poppins'
        }
    }
return(
<>
<div>
    <Layout>
        <Seo
        title="Trip tirupati | The Best Travelling Taxi Ever"
        />
        <h1 style={styles.container} className=" text-center display-3">Trip Tirupati</h1>
        <br/>
        <Container>
        <InfoTab/>
        </Container>
    </Layout>
</div>
</>
)
}
export default Home