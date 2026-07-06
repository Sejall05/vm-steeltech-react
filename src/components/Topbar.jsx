import { Link } from "react-router-dom";

function Topbar() {
  return (
    <div className="topbar py-2">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-9 col-lg-9">
            <div className="d-flex flex-wrap gap-4 text-white">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                Logistics Tower, Sector 12A, Gurgaon
              </span>

              <span>
                <i className="bi bi-telephone-fill"></i>
                +91-9999499954
              </span>

              <span>
                <i className="fa-solid fa-envelope-open"></i>
                info@vmsteeltech.in
              </span>
            </div>
          </div>

          <div className="col-md-3 col-lg-3 text-md-end text-lg-end mt-2 mt-lg-0 mt-md-0">
            <Link to="/contact" className="btn btn-light">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
