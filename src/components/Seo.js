import {Helmet} from "react-helmet"
const Seo = ({title , description , image , keywords , url , name}) =>{
    return(
      <>
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title}/>
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords}/>
        <meta name="description" content="Find all the best quality           products your pet may need" />        
        <meta name="twitter:card" content="summary_large_image" />        
        <meta name="twitter:site" content="@user" />        
        <meta name="twitter:creator" content="@user" />        
        <meta name="twitter:title" content="Pets - Products" />        
        <meta name="twitter:description" content="Best Products for your pet" />        
        <meta name="twitter:image" content="url_to_image"/>        
        <meta property="og:title" content={title} />        
        <meta property="og:description" content={description} />        
        <meta property="og:image" content={image}/>
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={name} />
        <meta property="og:locale" content="en_US" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      </>
    )
}
export default Seo