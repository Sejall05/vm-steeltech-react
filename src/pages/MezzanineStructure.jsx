import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import mezzanine1 from "../assets/img/Mezzanine/mezzanine1.jpg";
import mezzanine2 from "../assets/img/Mezzanine/mezzanine2.jpg";
import mezzanine3 from "../assets/img/Mezzanine/mezzanine3.jpg";
import mezzanine4 from "../assets/img/Mezzanine/mezzanine4.jpg";

function MezzanineStructure() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Mezzanine Structure */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-title">Mezzanine Structures</div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="content-section shadow-sm">
          {/* Breadcrumb */}
          <nav className="custom-breadcrumb">
            <Link to="/">Home</Link>
            <span className="breadcrumb-dot"></span>
            <span>Mezzanine Structures</span>
          </nav>
          <h1 className="section-title">Mezzanine Structures</h1>

          <div className="mezzanine-content">
            <div className="small-orange-line"></div>

            <div className="intro-mezzanine">
              <p>
                A mezzanine floor is an intermediate floor between main floors
                of a building, and therefore typically not counted among the
                overall floors of a building. Often, a mezzanine is
                low-ceilinged and projects in the form of a balcony.
              </p>
            </div>
          </div>

          {/* Top Images */}
          <div className="row mb-5">
            <div className="col-md-6">
              <img src={mezzanine1} className="content-img" alt="" />
            </div>

            <div className="col-md-6">
              <img src={mezzanine2} className="content-img" alt="" />
            </div>
          </div>

          {/* Text Section */}
          <h4 className="fw-bold mb-3">Mezzanine Floor Applications</h4>

          <p>
            In industrial applications, mezzanine floor systems are
            semi-permanent floor systems typically installed within buildings,
            built between two permanent original stories. These structures are
            usually free standing and in most cases can be dismantled and
            relocated. Commercially sold mezzanine structures are generally
            constructed of three main materials; steel, aluminium and
            fibreglass. The decking or flooring of a mezzanine will vary by
            application but is generally composed of b-deck underlayment and
            wood product finished floor or a heavy duty steel, aluminium or
            fibreglass grating.
          </p>

          <p>
            The mezzanine is often used in shops and similar spaces for storage
            of tools or materials. The high roof of the shop is ideal for a
            mezzanine, and offices can be put either below or above it.
            Mezzanines are frequently used in industrial operations such as
            warehousing, distribution or manufacturing. These facilities have
            high ceilings, allowing unused space to be utilized within the
            vertical cube. Industrial mezzanine structures are typically either
            structural, roll formed, rack-supported, or shelf supported,
            allowing high density storage within the mezzanine structure.
          </p>

          {/* Second Row */}
          <div className="row mt-5 align-items-center">
            <div className="col-lg-7">
              <h4 className="fw-bold">Common Uses of Mezzanine Floors</h4>

              <p>
                The most common use of a mezzanine floor is for storage. This
                normally means utilising either a combination of short and long
                span shelving below and above the floor. Mezzanines are often
                used in retail to increase the selling space and for the storage
                back of store.
              </p>
              <p>
                Office mezzanines can be built in the warehouse and factory
                environment and by using composite or steel partitions with
                glazing can create the right work environment. All welfare
                facilities such as canteens and toilets can be part of the
                self-contained offices.
              </p>
              <p>
                Other mezzanine uses include increasing space for production,
                packing, sorting etc.
              </p>
            </div>

            <div className="col-lg-5">
              <img src={mezzanine3} className="small-img" alt="" />
            </div>
          </div>

          {/* Third Row */}
          <div className="row mt-5 align-items-center">
            <div className="col-lg-6">
              <img src={mezzanine4} className="small-img" alt="" />
            </div>

            <div className="col-lg-6">
              <h4 className="fw-bold">Important Considerations</h4>
              <p>
                The purchase process requires the following to be considered:
              </p>

              <ul>
                <li>Required height of levels possible</li>
                <li>Planning permission</li>
                <li>Weight Load considerations</li>
                <li>Floor finish decisions</li>
              </ul>

              <p>
                We have years of experience, partnerships and processes in place
                to help you with your mezzanine floor project. This can include
                providing the items that are going above and below the mezzanine
                deck, including shelving, offices, mesh caging and much more.
              </p>
            </div>
          </div>

          <div className="last-line">
            <h3>
              <strong>
                If you require any further information, please contact us !
              </strong>
            </h3>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MezzanineStructure;
