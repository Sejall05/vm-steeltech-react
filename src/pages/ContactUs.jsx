import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ContactUs() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Banner Section */}
      <section className="banner-page">
        <div className="container">
          <div className="banner-content">
            <h4>VM STEELTECH</h4>
            <h1>CONTACT US</h1>
          </div>
        </div>
      </section>

      {/* Contact Intro  */}
      <section className="container-body-content">
        <div className="container">
          <div className="contact-box">
            {/* Breadcrumb  */}
            <nav className="custom-breadcrumb">
              <a href="index.html">Home</a>
              <span className="breadcrumb-dot"></span>
              <span>Contact Us</span>
            </nav>

            <div id="contact-form" className="contact-page">
              <h1>Contact Us</h1>
              <div className="contact-intro">
                <div className="small-orange-line"></div>
                <p>To Contact with VM Steeltech please call or email us.</p>
              </div>

              <form
                className="contact-form"
                method="POST"
                action="form-submission.php"
              >
                <input type="text" name="name" placeholder="Name" />

                <input type="email" name="email" placeholder="Email" />

                <input type="tel" name="phone" placeholder="Phone" />

                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                ></textarea>

                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Banner  */}
      <section className="contact-banner">
        <div className="container-fluid">
          <div className="row text-center align-items-center">
            <div className="col-md-4 mb-4 mb-md-0">
              <i className="bi bi-geo-alt-fill contact-icon"></i>
              <h5>ADDRESS</h5>
              <p>
                Logistics Tower, Sector 12,
                <br />
                Gurgaon-122001 (HR) INDIA
              </p>
            </div>

            <div className="col-md-4 mb-4 mb-md-0">
              <i className="bi bi-telephone-fill contact-icon"></i>
              <h5>TELEPHONE</h5>
              <p>+91-9999499954</p>
            </div>

            <div className="col-md-4">
              <i className="bi bi-envelope-fill contact-icon"></i>
              <h5>EMAIL</h5>
              <p>info@vmsteeltech.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
