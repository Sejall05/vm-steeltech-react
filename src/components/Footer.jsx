import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer-section">
      {/* Top Navigation */}
      <div className="container">
        <div className="col-12 d-flex align-items-center border-bottom border-secondary py-3">
          <div className="d-flex flex-wrap gap-4 footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/network">Our Network</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/career">Career</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/contact">Contact Us</Link>
          </div>

          <div className="social-icons ms-auto">
            <a
              href="https://www.facebook.com/vmsteeltech1/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-facebook"></i>
            </a>

            <a href="#">
              <i className="bi bi-twitter"></i>
            </a>

            <a
              href="https://in.linkedin.com/company/vm-steeltech-private-limited"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container py-5">
        <div className="row g-5">
          {/* Company */}
          <div className="col-lg-3">
            <h1 className="vm-logo">VM</h1>
            <h2 className="company-name">SteelTech</h2>

            <div className="address">
              <p>Logistics Tower, 2nd Floor,</p>
              <p>Bus Stand Road, Sector 12A,</p>
              <p>Gurgaon-122001 (HR) INDIA</p>
            </div>

            <a
              href="https://maps.google.com/?q=Logistics+Tower+Sector+12A+Gurgaon"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-location"
            >
              GET LOCATION
            </a>
          </div>

          {/* Services */}
          <div className="col-lg-3">
            <h5 className="footer-title">Our Services</h5>

            <ul className="services-list mt-4">
              <li>
                <Link to="/pre-engineering">Pre engineered buildings</Link>
              </li>

              <li>
                <Link to="/mezzanine">Mezzanine structures</Link>
              </li>

              <li>
                <Link to="/insulated-panel">Insulated panels</Link>
              </li>

              <li>
                <Link to="/container-bodies">Container bodies</Link>
              </li>

              <li>
                <Link to="/girders">Girders & Bridges</Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="col-lg-6">
            <h5 className="footer-title">Subscribe</h5>

            <p className="subscribe-text mt-4">
              Don't miss VM Steeltech latest news and events. Subscribe to our
              newsletter channel and be informed.
            </p>

            <div className="newsletter-group">
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
              />

              <button className="btn-subscribe">SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="d-flex justify-content-between flex-wrap">
            <span>© 2022 VM SteelTech</span>
            <span>Essence Web Technology</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
