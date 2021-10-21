import React from "react";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import I1 from "../assests/img1.jpg";
import I2 from "../assests/img2.jpg";
import I3 from "../assests/img3.jpg";
import I4 from "../assests/img4.jpg";

const Slider1 = () => {
  return (
    <>
      <Carousel
      axis="vertical"
      showThumbs={false}
      >
        <div>
          <img src={I1} alt="Trip Tirupati intro" />
        </div>
        <div>
          <img src={I2} alt="Trip Tirupati Intro" />
        </div>
        <div>
          <img src={I3} alt="Trip Tirupati Intro" />
        </div>
        <div>
          <img src={I4} alt="Trip Tirupati Intro" />
        </div>
      </Carousel>
    </>
  );
};
export default Slider1;
