import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import gb2 from "../assets/img/Girders&Bridges/2.jpg";
import gb1 from "../assets/img/Girders&Bridges/1.png";
function GirderBridges() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Banner Box */}
      <section className="container-banner">
        <div className="container">
          <div className="banner-box">
            <h1>GIRDERS & BRIDGES</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="container-body-content">
        <div className="container">
          <div className="girder-box shadow-sm">
            {/* Breadcrumb */}
            <nav className="custom-breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-dot"></span>
              <span>Girders & Bridges</span>
            </nav>

            <div className="row align-items-center">
              <div className="col-12 girders">
                <div className="heading-wrapper">
                  <div className="small-orange-line"></div>
                  <h2>Girders & Bridges</h2>
                </div>

                <p>
                  Girder bridges are the simplest bridge type in structure and
                  consist of steel beams shaped to an I-section or box section,
                  called a plate girder bridge or a box girder bridge,
                  respectively. Girder bridges are comprised of deck slabs, on
                  which vehicles and people pass, and of main girders supporting
                  the deck slabs. Deck slabs include RC deck slabs, steel deck
                  slabs, composite deck slabs, and PC deck slabs. Bridges where
                  the deck slabs and the main girders work together to resist
                  loads are called composite girder bridges, and bridges
                  designed to resist loads with the main girders only are called
                  non-composite girder bridges. VM Steeltech has experience in
                  the manufacture and construction of both the types of bridges.
                </p>

                <p>
                  All bridges consist of two main parts: the substructure, and
                  the superstructure. The superstructure is everything from the
                  bearing pads, up – it is what supports the loads and is the
                  most visible part of the bridge. The substructure is the
                  foundation, transfers loads from the superstructure to the
                  ground. Both must work together to create a strong,
                  long-lasting bridge.
                </p>

                <h4>
                  <strong>The superstructure consists of several parts:</strong>
                </h4>
                <ul>
                  <li>
                    The deck is the roadway or walkway surface. In roadway
                    applications it is usually a poured reinforced concrete
                    slab, but can also be steel grid or wood plank. The deck
                    includes any road lanes, medians, sidewalks, parapets or
                    railings, and miscellaneous items like drainage and
                    lighting.
                  </li>
                  <li>
                    The supporting structure consists of the steel or concrete
                    system supporting the deck. This includes the girders
                    themselves, diaphragms or cross-braces, and (if applicable)
                    the truss or arch system. In a girder bridge this would
                    include only the girders and the bracing system. The girders
                    are the primary load support, while the bracing system both
                    allows the girders to act together as a unit, and prevents
                    the beams from toppling.
                  </li>
                  <li>
                    The job of the bearing pads is to allow the superstructure
                    to move somewhat independently of the substructure. All
                    materials naturally expand and contract with temperature –
                    if a bridge were completely rigid, this would cause
                    unnecessary stress on the structure and could lead to
                    failure or damage. By fixing the superstructure at one end,
                    while allowing the other end of a span to move freely in the
                    longitudinal direction, thermal stresses are alleviated and
                    the lifespan of the bridge increased.
                  </li>
                </ul>

                <div className="row mt-5 align-items-start">
                  <div className="col-lg-6 mb-4">
                    <img src={gb2} alt="Image" className="img-fluid" />
                  </div>

                  <div className="col-lg-6">
                    <img src={gb1} alt="Image" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default GirderBridges;
