import { FaCar, FaShuttleVan } from "react-icons/fa";

const InfoTab = () => {
  return (
    <>
      <div class="card-group shadow-lg CA text-center">
       
        <div class="card cad">
        <a href="/hatchback">
          <div class="card-body">
            <div className="text-center">
              <FaCar size={80} />
              <h5 class="card-title">
                <b>Car</b>
              </h5>
            </div>
            <p class="card-text td">
              Hello There We are here with multiple options and now this option
              is one of them it's hatch back for micro families and we see there
              might be heavy schedule in your itenary but we will help you to
              make your trip memorable within your flexibilities.
            </p>
          </div>
          </a>
        </div>
     
        <div class="card cad">
          <a href="/sedan">
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
          </div>
          </a>
        </div>
        <div class="card cad">
        <a href="/suv">
          <div class="card-body">
            <div className="text-center">
              <FaShuttleVan size={80} />
              <h5 class="card-title">
                <b>Suv</b>
              </h5>
            </div>
            <p class="card-text">
              Hello There We are here with multiple options and now this option
              is one of them it's SUV for micro families and we see there might
              be heavy schedule in your itenary but we will help you to make
              your trip memorable within your flexibilities.
            </p>
          </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default InfoTab;
