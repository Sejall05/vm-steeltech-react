import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import insulated1 from "../assets/img/Insulated Panel/insulated1.jpg";
import insulated2 from "../assets/img/Insulated Panel/insulated2.jpg";
import insulated3 from "../assets/img/Insulated Panel/insulated3.jpg";

function InsulatedPanel() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Banner Section */}
      <section className="insulated-banner">
        <div className="container">
          <span className="small-title">WHAT WE DO</span>
          <h1>INSULATED PANELS</h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="conatiner-body-content">
        <div className="container">
          <div className="content-section shadow-sm">
            {/* Breadcrumb */}
            <nav className="custom-breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-dot"></span>
              <span>Insulated panels</span>
            </nav>

            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="heading-wrapper">
                  <div className="small-orange-line"></div>
                  <h2>Insulated panels</h2>
                </div>

                <p>
                  Insulated sandwich panels are fast and easy to install. They
                  are made from lightweight but structurally strong materials,
                  which have the capability to last for years. These panels find
                  application in wall cladding of a building, apart from
                  roofing. The structures are factory built and then assembled
                  for installation on site. Wall panels typically consist of a
                  layer of core material having thermal insulation properties,
                  sandwiched between two galvanised iron sheets. Hence they
                  derive their name as insulated sandwich panels. Wall panels
                  manufactured by VM Steeltech are of four types.
                </p>
              </div>

              <div className="col-lg-4 text-center">
                <img src={insulated1} className="img" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Panel Cards */}
      <section className="panel py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* Card 1 */}
            <div className="col-lg-4 col-md-6">
              <div className="panel-card text-center">
                <div className="card-body">
                  <h4 className="panel-title">
                    PUF PANELS <i className="fa-regular fa-circle-check"></i>
                  </h4>
                  <p>
                    PUF panels are an acronym for Polyurethane foam panels,
                    which are reputed for having good insulation properties.
                    This results into immense energy savings. They are water and
                    vapour resistant, offer flexible design options and come
                    with weatherproof guarantee.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-lg-4 col-md-6">
              <div className="panel-card text-center">
                <div className="card-body">
                  <h4 className="panel-title">
                    EPS PANELS <i className="fa-regular fa-circle-check"></i>
                  </h4>
                  <p>
                    EPS panels stand for Expanded Polystyrene, which form the
                    core layer. Surrounding this are two layers of color coated
                    galvanised iron sheets, which can be either plain or
                    profiled as per requirement. The sheets are fixed with
                    sealants and other fixing accessories. EPS is known for
                    having excellent heat insulation and moisture resistance
                    properties. These panels are reliable and cost effective.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col-lg-4 col-md-6">
              <div className="panel-card text-center">
                <div className="card-body">
                  <h4 className="panel-title">
                    ROCKWOOL PANELS{" "}
                    <i className="fa-regular fa-circle-check"></i>
                  </h4>
                  <p>
                    Rockwool panels, as the name suggests consists of a layer of
                    high density rockwool material as the core layer. This layer
                    is sandwiched between two GI sheets, which are preprinted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="content-section py-5">
        <div className="container">
          <h1>GLASSWOOL PANELS</h1>
          <p>
            Here, the core insulating layer is high density glasswool,
            surrounded by two layers of metal sheets. What differentiates
            glasswool from other insulated panels is its fire resistant
            capability. The material used is non-combustible fibreglass, which
            prevents fire from spreading.
          </p>

          <p>
            We are engaged in offering our clients with an exclusive range of
            Wall Puf Panel. Our offered products are tested on our various
            parameters in order to ensure the quality, strength and durability
            of the product. Our offered products are light weight and have
            distinct uses in Industries and households. We identify the actual
            needs of the customers and then provide the solutions. Clients can
            easily avail these products at affordable prices.
          </p>

          <div className="row mt-5">
            <div className="col-md-6 mb-4">
              <img src={insulated2} className="img" alt="" />
            </div>

            <div className="col-md-6 mb-4">
              <img src={insulated3} className="img" alt="" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default InsulatedPanel;
