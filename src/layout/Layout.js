import Footer from "./Footer"
import Head from "./head"
import {FaPhone} from "react-icons/fa"
import {Button} from "reactstrap"

const Layout = (props) =>{
return(
<>
<div>
<Head/>
{props.children}
<Button  target="_blank" href="tel:9100400245" className="shadow-lg buttonb">Contact Us  <FaPhone size={25}/></Button>
<Footer/>
</div>
</>
)
}
export default Layout