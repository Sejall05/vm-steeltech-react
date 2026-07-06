import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import cb1 from "../assets/img/Container Bodies/1.jpg";
import cb2 from "../assets/img/Container Bodies/2.jpg";
import cb3 from "../assets/img/Container Bodies/3.jpg";

function ContainerBodies() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Banner Box */}
      <section className="container-banner">
        <div className="container">
          <div className="banner-box">
            <h1>CONTAINER BODIES</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-body-content">
        <div className="container">
          <div className="cb-box shadow-sm">
            {/* Breadcrumb */}
            <nav className="custom-breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-dot"></span>
              <span>Container Bodies</span>
            </nav>

            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="heading-wrapper">
                  <div className="small-orange-line"></div>
                  <h2>Container Bodies</h2>
                </div>

                <p className="mt-4">
                  We are successfully engaged in providing a wide gamut of
                  Closed Container Body.
                </p>

                <p>
                  We offer Transport Containers Body for the loading of heavy
                  vehicles. The offered range is precision engineered and is
                  manufactured using the finest grade raw material and advanced
                  technology. These are well-known among clients for their
                  robust construction, durability, corrosion resistance and
                  excellent finish. In addition to this, our quality controllers
                  conduct series of tests on various quality parameters to
                  ensure their flawlessness.
                </p>

                <p>
                  Our organization has gained much credibility by manufacturing
                  and supplying Truck Containers Body. With an excellent
                  mechanism it holds non-comparative quality and performance
                  graph. The product is designed using supreme quality material
                  sourced by our vendors, advanced technology and has excellent
                  finish. Our innovative and economic schemes make us one of the
                  leading organizations.
                </p>
              </div>

              <div className="col-lg-4">
                <div className="sidebar">
                  <h5>Container Bodies</h5>

                  <img src={cb1} className="img-fluid mb-4" alt="image" />

                  <img src={cb2} className="img-fluid" alt="image" />
                </div>
              </div>
            </div>

            <div className="mt-5">
              <img src={cb3} className="img-fluid w-100" alt="image" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContainerBodies;
