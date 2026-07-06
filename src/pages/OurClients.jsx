import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import client1 from "../assets/img/Our Clients/1.png";
import client2 from "../assets/img/Our Clients/2.jpg";
import client3 from "../assets/img/Our Clients/3.jpg";
import client4 from "../assets/img/Our Clients/4.jpg";
import client5 from "../assets/img/Our Clients/5.png";
import client6 from "../assets/img/Our Clients/6.png";
import client7 from "../assets/img/Our Clients/7.png";
import client8 from "../assets/img/Our Clients/8.png";
import client9 from "../assets/img/Our Clients/9.jpg";
import client10 from "../assets/img/Our Clients/10.png";

function OurClients() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Banner Section */}
      <section className="page-banner">
        <div className="container">
          <div className="banner-title">OUR CLIENTS</div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="container-body-content">
        <div className="container">
          <div className="clients-box">
            {/* Breadcrumb  */}
            <nav className="custom-breadcrumb">
              <Link to="/">Home</Link>
              <span className="breadcrumb-dot"></span>
              <span>Our Clients</span>
            </nav>

            <div className="section-header mb-5">
              <span className="text-small">VM Steeltech</span>
              <h2 className="fw-bold">Clients</h2>
            </div>

            <div className="clients-grid">
              <div className="client-item">
                <img src={client1} alt="Luminous" />
              </div>
              <div className="client-item">
                <img src={client2} alt="Maruti Suzuki" />
              </div>
              <div className="client-item">
                <img src={client3} alt="Honda" />
              </div>
              <div className="client-item">
                <img src={client4} alt="Bisleri" />
              </div>
              <div className="client-item">
                <img src={client5} alt="Hindustan Unilover Limited" />
              </div>

              <div className="client-item">
                <img src={client6} alt="Philips" />
              </div>
              <div className="client-item">
                <img src={client7} alt="Perfetti" />
              </div>
              <div className="client-item">
                <img src={client8} alt="MiniSO" />
              </div>
              <div className="client-item">
                <img src={client9} alt="Expeditors" />
              </div>
              <div className="client-item">
                <img
                  src={client10}
                  alt="Yuantai International Supply Chain Management"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default OurClients;
