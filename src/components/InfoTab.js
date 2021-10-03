import {
  FaWhatsapp,
  FaCar,
  FaShuttleVan,
  FaExternalLinkAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const InfoTab = () => {
  return (
    <>
      <div class="card-group shadow-lg CA text-center">
        <div class="card">
          <div class="card-body">
            <div className="text-center">
              <FaCar size={80} />
              <h5 class="card-title">
                <b>Car</b>
              </h5>
            </div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>

            <div class="btn-group" role="group" aria-label="Basic example">
              <Button
                target="_blank"
                href="https://wa.me/9100400245?text=Hello%20we%20are%20interested%20in%20availing%20your%20taxi%20services%20please%20contact%20me%20soon."
                color="success"
              >
                <FaWhatsapp size={30} />
              </Button>
              <Button  tag={Link} to="/hatchback" className="btn btn-dark">
                <FaExternalLinkAlt size={30} />
              </Button>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <div className="text-center">
              <FaCar size={80} />
              <h5 class="card-title">
                <b>Sedan</b>
              </h5>
            </div>
            <p class="card-text">
              This card has supporting text below as a natural lead-in to
              additional content.
            </p>

            <div class="btn-group" role="group" aria-label="Basic example">
              <Button
                target="_blank"
                href="https://wa.me/9100400245?text=Hello%20we%20are%20interested%20in%20availing%20your%20taxi%20services%20please%20contact%20me%20soon."
                color="success"
              >
                <FaWhatsapp size={30} />
              </Button>
              <Button tag={Link} to="/sedan" className="btn btn-dark">
                <FaExternalLinkAlt size={30} />
              </Button>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <div className="text-center">
              <FaShuttleVan size={80} />
              <h5 class="card-title">
                <b>Suv</b>
              </h5>
            </div>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>

            <div class="btn-group" role="group" aria-label="Basic example">
              <Button
                target="_blank"
                href="https://wa.me/9100400245?text=Hello%20we%20are%20interested%20in%20availing%20your%20taxi%20services%20please%20contact%20me%20soon."
                color="success"
              >
                <FaWhatsapp size={30} />
              </Button>
              <Button tag={Link} to="/suv" className="btn btn-dark">
                <FaExternalLinkAlt size={30} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default InfoTab;
