import Footer from "./Footer"
import Head from "./head"
import {FaPhone} from "react-icons/fa"

const Layout = (props) =>{
return(
<>
<Head/>
{props.children}
<button className="shadow-lg buttonb">Contact Us  <FaPhone size={25}/></button>
<Footer/>
</>
)
}
export default Layout