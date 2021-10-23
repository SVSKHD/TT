import SUV from "../assests/Suv.png";
import Sedan from "../assests/Sedan.png";
import Tempo from "../assests/VAN.png";

const InfoTab = () => {
  return (
    <>
      <div class="card-group shadow-lg CA text-center">
        <div class="card cad">
          <a href="/sedan">
            <div class="card-body">
              <div className="text-center">
                <img
                  className="rotate"
                  height="100"
                  src={Sedan}
                  alt="Trip Tirupati"
                />
                <br className="gap" />
                <h5 class="card-title">
                  <b>Sedan</b>
                </h5>
              </div>
              <p class="card-text td">
                Hello There We are here with multiple options and now this
                option is one of them it's hatch back for micro families and we
                see there might be heavy schedule in your itenary but we will
                help you to make your trip memorable within your flexibilities.
              </p>
            </div>
          </a>
        </div>

        <div class="card cad">
          <a href="/suv">
            <div class="card-body">
              <div className="text-center">
                <img height="100" src={SUV} alt="sedan Images" />
                <br className="gap" />
                <h5 class="card-title">
                  <b>SUV</b>
                </h5>
              </div>
              <p class="card-text">
                Hello There We are here with multiple options and now this
                option is one of them it's SUV for micro families and we see
                there might be heavy schedule in your itenary but we will help
                you to make your trip memorable within your flexibilities.
              </p>
            </div>
          </a>
        </div>
        <div class="card cad">
          <a href="/tempo">
            <div class="card-body">
              <div className="text-center">
                <img
                  className="rotate"
                  height="100"
                  src={Tempo}
                  alt="Trip Tirupati"
                />
                <h5 class="card-title">
                  <b>Tempo</b>
                </h5>
              </div>
              <p class="card-text">
                Hello There We are here with multiple options and now this
                option is one of them it's Tempo for big families and we see
                there might be heavy schedule in your itenary but we will help
                you to make your trip memorable within your flexibilities.
              </p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};
export default InfoTab;
