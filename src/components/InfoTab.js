import {
    FaWhatsapp,
    FaCar,
    FaShuttleVan,  
    FaExternalLinkAlt
} from "react-icons/fa"
import { Link } from "react-router-dom"
import {Button} from "reactstrap"

const InfoTab = () =>{
return(
<>
<div class="card-group shadow-lg CA text-center">
    <div class="card">
      <div class="card-body">
        <div className="text-center">
        <FaCar size={80}/>
        <h5 class="card-title"><b>Car</b></h5>
        </div>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>

        
        <div class="btn-group" role="group" aria-label="Basic example">
          <Button color="success">
            <FaWhatsapp size={30}/>
          </Button>
          <Button tag={Link} to="/hatchback" className="btn btn-dark">
            <FaExternalLinkAlt size={30}/>
          </Button>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card-body">
        <div className="text-center">
        <FaCar size={80}/>
        <h5 class="card-title"><b>Sedan</b></h5>
        </div>
        <p class="card-text">
          This card has supporting text below as a natural lead-in to additional
          content.
        </p>

        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-success">
            <FaWhatsapp size={30}/>
          </button>
          <Button tag={Link} to="/sedan" className="btn btn-dark">
            <FaExternalLinkAlt size={30}/>
          </Button>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-body">
      <div className="text-center">
       <FaShuttleVan size={80}/>
        <h5 class="card-title"><b>Suv</b></h5>
        </div>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This card has even longer content than the
          first to show that equal height action.
        </p>

        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-success">
           <FaWhatsapp size={30}/>
          </button>
          <Button tag={Link} to="/suv" className="btn btn-dark">
            <FaExternalLinkAlt size={30}/>
          </Button>
        </div>
      </div>
    </div>
  </div>
</>
)
}
export default InfoTab