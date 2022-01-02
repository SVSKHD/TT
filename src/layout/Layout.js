import Footer from "./Footer";
import Head from "./head";
import { FaPhone } from "react-icons/fa";
import { Button } from "reactstrap";

const Layout = (props) => {
  return (
    <>
      <div>
        <Head />
        {props.children}
        <Button
          target="_blank"
          href="tel:9581887055"
          className="shadow-lg buttonb"
        >
          {" "}
          <FaPhone className="ContactIcon" size={20} /> Contact Us{" "}
        </Button>
        <div style={{ marginBottom: "10rem" }} />
        <Footer />
      </div>
    </>
  );
};
export default Layout;
