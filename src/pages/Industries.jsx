import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import automobile from "../assets/img/Industries/Automobile.jpg";
import healthcare from "../assets/img/Industries/Healthcare.jpg";
import engineering from "../assets/img/Industries/Engineering.jpg";
import electronics from "../assets/img/Industries/Electronics.jpg";
import lifestyle from "../assets/img/Industries/Lifestyle.jpg";
import b2b from "../assets/img/Industries/B2B.png";

function Industries() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Banner Section */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-title">INDUSTRIES</div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="industries-section py-5">
        <div className="container">
          {/* Breadcrumb */}
          <nav className="custom-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-dot"></span>
            <span>Industries</span>
          </nav>

          <div className="row g-5 justify-content-center">
            <div className="col-md-4 col-sm-6">
              <div className="industry-card text-center">
                <img src={automobile} alt="Automobile" className="img-fluid" />
                <h3>Automobile</h3>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="industry-card text-center">
                <img src={healthcare} alt="Healthcare" className="img-fluid" />
                <h3>Healthcare</h3>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="industry-card text-center">
                <img
                  src={engineering}
                  alt="Engineering"
                  className="img-fluid"
                />
                <h3>Engineering</h3>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="industry-card text-center">
                <img
                  src={electronics}
                  alt="Electronics"
                  className="img-fluid"
                />
                <h3>Electronics</h3>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="industry-card text-center">
                <img src={lifestyle} alt="Lifestyle" className="img-fluid" />
                <h3>Lifestyle</h3>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="industry-card text-center">
                <img src={b2b} alt="B2B" className="img-fluid" />
                <h3>B2B</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Industries;
