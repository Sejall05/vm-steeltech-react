import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
function Career() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Banner Section */}
      <section className="banner-page">
        <div className="container">
          <div className="banner-content">
            <h4>VM STEELTECH</h4>
            <h1>CAREER</h1>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="contanier-body-content">
        <div className="container">
          <div className="career-box">
            {/* Breadcrumb  */}
            <nav className="custom-breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-dot"></span>
              <span>Career</span>
            </nav>

            <div className="row g-5">
              {/* Left Content */}
              <div className="col-lg-12">
                <h2 className="career-title">Career</h2>

                <p className="career-text">
                  We value diverse ideas, experiences, backgrounds and qualities
                  that enable us to drive and lead a global brand. Our workforce
                  consists of talented professionals who represent the creative
                  energy and entrepreneurial spirit of our corporate culture.
                </p>

                <h2 className="hiring-title">We are Hiring!! Apply Now</h2>

                <div className="job-box">
                  <div className="job-header">
                    <span>For Gurgaon</span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>

                  <div className="job-content">
                    <div className="job-tabs">
                      <button className="active">Send Your Resume</button>
                    </div>

                    <div className="job-info">
                      <p>Send us your updated resume at hr@vmsteeltech.com</p>
                      <p>We will contact you after resume scrutiny</p>
                    </div>
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

export default Career;
