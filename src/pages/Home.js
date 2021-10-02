import {Container } from "reactstrap"
import Layout from "../layout/Layout"
import InfoTab  from "../components/InfoTab"
import Seo from "..//components/Seo"
import Slider1 from "../components/Carousel"

const Home = () =>{
    const styles = {
        container:{
            fontFamily : 'Poppins'
        }
    }
    const Address = "https://triptirupati.in"
return(
<>
<div>
    <Layout>
        <Seo
        title="Trip tirupati | The Best Travelling Taxi Ever"
        link={Address}
        description="Hello, here is the best taxi Company in Tirupati we have got plenty of vehicles with plenty of options, you can avail of us any time in Tirupati, 
        we hope you enjoy the services of Trip Tirupati,The Best travelling Taxi ever."
        keywords="Tirupati Travels  , Tirupati Tour packages , Tirupati Trip , Tirupati One day Trip , Trip Tirupati"
        keyphrase="Best Taxi Company in Tirupati , low cost car rental, car hire in India,  cab hire, airport car rental in Tirupati, cheap cab for hire in Tirupati, radio taxi cab, 
        radio taxi services , Trip Tirupati"
        />
        <h1 style={styles.container} className=" text-center display-3">Trip Tirupati</h1>
        <br/>
        <Slider1/>
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