import { Link } from "react-router-dom";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import c1 from "../assets/img/carousel/C1.png";
import c2 from "../assets/img/carousel/C2.png";
import c3 from "../assets/img/carousel/C3.png";
import service1 from "../assets/img/Service 1.jpg";
import service2 from "../assets/img/Service 2.jpg";
import service3 from "../assets/img/Service 3.jpg";
import service4 from "../assets/img/Service 4.jpg";
import service5 from "../assets/img/Service 5.jpg";
import service6 from "../assets/img/Service 6.jpg";

function Home() {
  return (
    <>
      <Topbar />
      <Navbar />

      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={c1} className="d-block w-100" alt="" />
          </div>

          <div className="carousel-item">
            <img src={c2} className="d-block w-100" alt="" />
          </div>

          <div className="carousel-item">
            <img src={c3} className="d-block w-100" alt="" />
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>

      <section className="Heading">
        <div className="container">
          <h1>Welcome to VM STEELTECH</h1>
        </div>
      </section>

      <section className="quote">
        <div className="container">
          <div className="subtitle">
            <span>VM STEELTECH</span>
            <div className="line"></div>
          </div>

          <h1>
            You have a NEED, we have the
            <span className="highlight"> SOLUTION </span>
          </h1>
        </div>
      </section>

      {/* Services section */}
      <section id="services" className="services py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100">
                <img
                  src={service1}
                  className="card-img-top"
                  alt="Pre Engineered Buildings"
                />
                <div className="card-body">
                  <h5 className="card-title">Pre Engineered Buildings</h5>

                  <Link to="/pre-engineering" className="read-more-btn">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100">
                <img src={service2} className="card-img-top" alt="Girders" />
                <div className="card-body">
                  <h5 className="card-title">Girders / Bridges</h5>

                  <Link to="/girders" className="read-more-btn">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100">
                <img src={service3} className="card-img-top" alt="Mezzanine" />
                <div className="card-body">
                  <h5 className="card-title">Mezzanine Structures</h5>

                  <Link to="/mezzanine" className="read-more-btn">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100">
                <img
                  src={service4}
                  className="card-img-top"
                  alt="Container Bodies"
                />
                <div className="card-body">
                  <h5 className="card-title">Container Bodies</h5>

                  <Link to="/container-bodies" className="read-more-btn">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100">
                <img
                  src={service5}
                  className="card-img-top"
                  alt="Insulated Panels"
                />
                <div className="card-body">
                  <h5 className="card-title">Insulated Panels</h5>

                  <Link to="/insulated-panel" className="read-more-btn">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6">
              <div className="card border-0 h-100">
                <img
                  src={service6}
                  className="card-img-top"
                  alt="Other Steel Products"
                />
                <div className="card-body">
                  <h5 className="card-title">Other Steel Products</h5>

                  <Link to="/other-products" className="read-more-btn">
                    READ MORE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request section */}

      <section className="Request">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-1 d-none d-lg-block">
              <div className="orange-line"></div>
            </div>

            <div className="col-lg-11">
              <h1>FAST & RELIABLE</h1>

              <h2>
                SHARE YOUR
                <br />
                FABRICATION
                <br />
                REQUIREMENT
                <br />
                WITH US
              </h2>

              <p>
                We are pleased to send you a personalised offer solution without
                obligation tailored as per your requirements. Share your Steel
                Fabrication inquiry with us.
              </p>

              <div className="mt-4">
                <Link to="/contact" className="btn btn-outline-light">
                  Send Request
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About section */}

      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 left-container">
              <h1>WHY CHOOSE US?</h1>

              <ul>
                <li className="feature-item">
                  <i className="bi bi-check-circle"></i>
                  <span>One Stop Total PEB Solution</span>
                </li>

                <li className="feature-item">
                  <i className="bi bi-check-circle"></i>
                  <span>Architectural PEB-Any shape</span>
                </li>

                <li className="feature-item">
                  <i className="bi bi-check-circle"></i>
                  <span>Customized PEB</span>
                </li>

                <li className="feature-item">
                  <i className="bi bi-check-circle"></i>
                  <span>Most Versatile configuration</span>
                </li>

                <li className="feature-item">
                  <i className="bi bi-check-circle"></i>
                  <span>Fast track-Timely Delivered</span>
                </li>

                <li className="feature-item">
                  <i className="bi bi-check-circle"></i>
                  <span>Cost Effective solution</span>
                </li>

                <li className="feature-item">
                  <i className="bi bi-check-circle"></i>
                  <span>International Quality Product</span>
                </li>

                <li className="feature-item">
                  <i className="bi bi-check-circle"></i>
                  <span>Most Durable</span>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 right-container">
              <h1>ABOUT US</h1>

              <h2>
                We are here to give you a solution for all your steel
                Fabrication Requirement VM STEELTECH
              </h2>

              <p>
                VM SteelTech is one of the largest pre-engineered steel building
                companies in India. Its product list consists of pre-engineered
                steel buildings applicable for factories, warehouses, metro
                rails, supermarkets, aircraft hangars, sports stadiums,
                auditoriums etc. Other products include structural steel,
                sandwich panels and multiple storage solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hero section */}
      <section className="hero">
        <div className="bg-text">More</div>

        <div className="hero-content">
          <h1>
            Looking for more?
            <br />
            Here are a few places to explore.
          </h1>

          <div className="links">
            <Link to="/about">About us ›</Link>
            <a href="#services">Services ›</a>
            <Link to="/network">Our Network ›</Link>
            <Link to="/contact">Contact us ›</Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
