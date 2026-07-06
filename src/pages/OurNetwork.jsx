import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import indiaMap from "../assets/img/IndiaMap.jpg";

function OurNetwork() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Banner Section */}
      <section className="banner-page">
        <div className="container">
          <div className="banner-content">
            <h4>VM STEELTECH</h4>
            <h1>OUR NETWORK</h1>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container-body-content">
        <div className="container">
          <div className="network-box">
            {/* Breadcrumb */}
            <nav className="custom-breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-dot"></span>
              <span>Our Network</span>
            </nav>

            <div className="row">
              {/* Left Content */}
              <div className="col-lg-8">
                <h2 className="section-title">Get In Touch</h2>

                <div className="intro-box">
                  <div className="small-orange-line"></div>
                  <p>
                    To get in touch with us, please call or send an email for
                    site-specific contact details, please refer below.
                  </p>
                </div>

                <h5 className="location-heading">LOCATIONS</h5>

                <div className="location-card">
                  <img src={indiaMap} alt="India Map" />

                  <div className="location-content">
                    <h4>VM SteelTech</h4>

                    <h5>Corporate Address</h5>
                    <p>
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ color: "rgb(251, 117, 2)" }}
                      ></i>
                      Logistics Tower, Sector 12A, Gurgaon, Haryana-122016
                    </p>

                    <h5>Plant Address</h5>
                    <p>
                      <i
                        className="fa-solid fa-location-dot"
                        style={{ color: "rgb(251, 117, 2)" }}
                      ></i>
                      VM Steeltech, Village Muradpuri, NH-8 Rewari, Haryana
                    </p>
                  </div>
                </div>

                {/* Contact Form */}
                <form
                  className="contact-form"
                  method="POST"
                  action="form-submission.php"
                >
                  <input type="text" name="name" placeholder="Name" />

                  <input type="email" name="email" placeholder="Email" />

                  <input type="tel" name="phone" placeholder="Phone" />

                  <textarea
                    // type="text"
                    name="message"
                    placeholder="Message"
                    className="form-control"
                    rows="5"
                  ></textarea>

                  <button type="submit">Send</button>
                </form>
              </div>

              {/* Sidebar */}
              <div className="col-lg-4">
                <div className="contact-sidebar">
                  <h4>SOCIAL LINKS</h4>

                  <div className="social-icons">
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a
                      href="https://www.facebook.com/vmsteeltech1/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href="https://in.linkedin.com/company/vm-steeltech-private-limited"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>

                  <h4>HEAD OFFICE</h4>
                  <p>
                    VM SteelTech
                    <br />
                    Logistics Tower, 2nd Floor,
                    <br />
                    Bus Stand Road,
                    <br />
                    Prem Nagar-II, Sector 12A,
                    <br />
                    Gurgaon-122001 (HR) INDIA
                  </p>

                  <h4>PHONE</h4>
                  <p>+91-9999499954</p>

                  <h4>EMAIL</h4>
                  <p>info@vmsteeltech.in</p>
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

export default OurNetwork;
