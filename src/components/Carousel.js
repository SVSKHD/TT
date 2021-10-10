
import {
  UncontrolledCarousel
} from 'reactstrap';
import I1 from "../assests/img1.jpg"
import I2 from "../assests/img2.jpg"
import I3 from "../assests/img3.jpg"
import I4 from "../assests/img4.jpg"



const items = [
    {
      src: I1,
      altText: 'Slide 1',
      key: '1'
    },
    {
      src: I2,
      altText: 'Slide 2',
      key: '2'
    },
    {
      src: I3,
      altText: 'Slide 3',
      key: '3'
    },
    {
      src: I4,
      altText: 'Slide 3',
      key: '3'
    },
  ];
  
  const Slider1 = (props) => {
    return (
     <UncontrolledCarousel items={items}/>
    );
  }
  
  export default Slider1;