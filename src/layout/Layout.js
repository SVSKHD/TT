import Footer from "./Footer"
import Head from "./head"


const Layout = (props) =>{
return(
<>
<Head/>
<br className="LayoutBreaker"/>
{props.children}
<Footer/>
</>
)
}
export default Layout