import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import peb1 from "../assets/img/Services/PEB1.jpg";
import img1 from "../assets/img/Services/1.jpg";
import img2 from "../assets/img/Services/2.jpg";
import img3 from "../assets/img/Services/3.jpg";
import img4 from "../assets/img/Services/4.jpg";
import img5 from "../assets/img/Services/5.jpg";
import img6 from "../assets/img/Services/6.jpg";
import img7 from "../assets/img/Services/7.jpg";
import img8 from "../assets/img/Services/8.jpg";
import img9 from "../assets/img/Services/9.jpg";
import img10 from "../assets/img/Services/10.jpg";
import img11 from "../assets/img/Services/11.jpg";
import img12 from "../assets/img/Services/12.jpg";
import img13 from "../assets/img/Services/13.jpg";
import img14 from "../assets/img/Services/14.jpg";
import img15 from "../assets/img/Services/15.jpg";

function PreEngineering() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Pre-engineered buildings */}
      <div className="pre-engineering">
        <div className="container-fluid">
          <h4>WHAT WE DO</h4>
          <h1>Pre engineered buildings</h1>
        </div>
      </div>

      {/* Main Content Box */}
      <section className="conatiner-body-content">
        <div className="container">
          <div className="peb-box">
            {/* Breadcrumb */}
            <nav className="custom-breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-dot"></span>
              <span>Pre engineered buildings</span>
            </nav>

            <div className="heading-area">
              <h1>PRE ENGINEERED BUILDINGS</h1>
              <span className="sub-title">is a new manufacturing concept.</span>
            </div>

            <div className="content-grid">
              {/* Left Content */}
              <div className="left-content">
                <p>
                  There has been a substantial rise in Pre Engineered Buildings
                  in recent years in India due to rapid construction
                  developments and an increase in the need for quick-track
                  construction. PEBs is seen as a breakthrough in the
                  construction industry, resulting in less construction time,
                  cost-effectiveness, high quality, low maintenance, and
                  consistent span. Pre-engineered buildings meet one of
                  industry’s most critical criteria: wide, column-free areas. In
                  addition to being economically efficient, pre-engineered
                  buildings are environment-friendly ways to counter global
                  warming.
                </p>

                <h3>Know About Pre Engineered Buildings:</h3>

                <h4>Primary Framing:</h4>

                <p>
                  Following are some of the very commonly used and economically
                  planned Primary Structural framing configurations. Many more
                  framing conditions and combinations can be offered to suit
                  your exact requirements of larger clear spans, curved roofs,
                  heavy crane mounted structural systems for up to 100 M.T.
                  lifting capacity E.O.T. cranes and high-rise multi-story floor
                  systems as well. VM Steeltech offers the most versatile range
                  of Pre-Engineered Buildings available to you.
                </p>
              </div>

              {/* Right Content */}
              <div className="right-content">
                <div className="building-images">
                  <img src={peb1} alt="" />
                </div>

                <div className="info-box">
                  <h4>Secondary Framing:</h4>
                  <p>
                    Structural members are the Purlins, Girts, Eave Struts and
                    diagonal/frame/angle bracings. Purlins support the roofing
                    while Girts support the side wall cladding. Purlins and
                    Girts also help in resisting part of longitudinal forces
                    generated due to wind or earthquake loads and provide
                    lateral bracing to the compression flanges of the main frame
                    members, thereby improving strength.
                  </p>
                </div>
              </div>
            </div>

            <section className="peb-types">
              <div className="peb-card">
                <img src={img1} alt="" />
              </div>

              <div className="peb-card">
                <img src={img2} alt="" />
              </div>

              <div className="peb-card">
                <img src={img3} alt="" />
              </div>

              <div className="peb-card">
                <img src={img4} alt="" />
              </div>

              <div className="peb-card">
                <img src={img5} alt="" />
              </div>

              <div className="peb-card">
                <img src={img6} alt="" />
              </div>

              <div className="peb-card">
                <img src={img7} alt="" />
              </div>

              <div className="peb-card">
                <img src={img8} alt="" />
              </div>

              <div className="peb-card">
                <img src={img9} alt="" />
              </div>

              <div className="peb-card">
                <img src={img10} alt="" />
              </div>

              <div className="peb-card">
                <img src={img11} alt="" />
              </div>

              <div className="peb-card">
                <img src={img12} alt="" />
              </div>

              <div className="peb-card">
                <img src={img13} alt="" />
              </div>

              <div className="peb-card">
                <img src={img14} alt="" />
              </div>

              <div className="peb-card">
                <img src={img15} alt="" />
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Roof and Wall Panel */}
      <section className="panel-section">
        <div className="container">
          <div className="roof-heading">
            <h3>Roof and Wall Panels</h3>

            <div className="panel-content">
              {/* Left Content  */}
              <div className="left-content col-lg-4">
                <h4>Advantages of PEB:</h4>
                <ul>
                  <li>Energy efficient</li>
                  <li>Weather resistant</li>
                  <li>Wind & Earthquake Safe</li>
                  <li>Green Building concept</li>
                  <li>Customized solution</li>
                  <li>Robust structural system</li>
                  <li>Delivered fast- India & Abroad</li>
                  <li>Customer satisfaction</li>
                </ul>
              </div>

              {/* Right Content */}
              <div className="right-content">
                <p>
                  This group typically includes tin shades and curtain walls
                  crafted from glass and rolled steel sheets. The structural
                  frame transfers wind forces and other loads safely to the
                  foundation, helping reduce their impact on the building.
                  Additional options, such as specialized roofing sheets, can
                  improve energy efficiency, particularly in colder regions.
                </p>

                <p>
                  With benefits such as reduced construction time, lower
                  material and operational costs, improved energy efficiency,
                  and enhanced sustainability through modular design,
                  Pre-Engineered Buildings (PEBs) are becoming the future of
                  construction and manufacturing worldwide.
                </p>

                <h4>Types of Sheeting by VM STEELTECH</h4>
                <ul>
                  <li>Horizontal roof cladding</li>
                  <li>Vertical wall cladding</li>
                  <li>Standing seam roofing</li>
                </ul>

                <h4>Applicability:</h4>
                <ul>
                  <li>Warehouse</li>
                  <li>Crane Mounted factory</li>
                  <li>Cold storage</li>
                  <li>Shopping Malls</li>
                  <li>Multistory Building</li>
                  <li>Bonded Warehouse</li>
                  <li>Large Residential</li>
                  <li>Power plant</li>
                  <li>Sports Stadia-Large Span</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PreEngineering;
