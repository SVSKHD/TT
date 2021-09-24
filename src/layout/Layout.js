import Head from "./head"

const Layout = (props) =>{
return(
<>
<Head/>
<br className="LayoutBreaker"/>
{props.children}
</>
)
}
export default Layout