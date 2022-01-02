import { Helmet } from "react-helmet";


const Seo = ({
  title,
  description,
  image,
  keywords,
  url,
  name,
  keyphrase,
  type,
  link,
}) => {

  
  const address = "https://triptirupati.in";

  

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <link rel="canonical" href={`${link}`} />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="keyphrase" content={keyphrase} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@user" />
        <meta name="twitter:creator" content="@user" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:alt" content={image} />
        <meta property="og:locale" content="en_IN" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        <script type="application/ld+json">
          {`
{
  "@context": "schema",
  "@type": "Taxi Company",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Alpiri Road",
    "addressRegion": "Tirupati",
    "postalCode": "517101",
    "streetAddress": "AP.HB Colony"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "20"
  },
  "name": ${title},
  "openingHours": [
    "Mo-Sa 7:00-22:30",
  ],
  "priceRange": "INR",
  "telephone": "(408) 714-1489",
  "url": ${address}
}
`}
        </script>
      </Helmet>
    </>
  );
};
export default Seo;
