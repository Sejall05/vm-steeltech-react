import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" height="70" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item dropdown">
              {/* <a
                href="/#"
                className="nav-link dropdown-toggle fw-bold"
                data-bs-toggle="dropdown"
              >
                Services
              </a> */}

              <button
                className="nav-link dropdown-toggle fw-bold border-0 bg-transparent"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Services
              </button>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/pre-engineering">
                    Pre Engineered Buildings
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/mezzanine">
                    Mezzanine Structures
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/insulated-panel">
                    Insulated Panels
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/container-bodies">
                    Container Bodies
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/girders">
                    Girders & Bridges
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/network">
                Our Network
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/clients">
                Our Clients
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-bold" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
