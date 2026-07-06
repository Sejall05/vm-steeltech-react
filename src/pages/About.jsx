import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import aboutBanner from "../assets/img/about-us.png";
import pushkar from "../assets/img/Pushkar Mangla.png";
import anuj from "../assets/img/Anuj Mangla.png";

function About() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Slider */}
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={aboutBanner}
              className="d-block w-100 slider-img"
              alt="About Us"
            />
            
            <div className="slider-content">
              <p>WHO WE ARE</p>
              <h1>ABOUT US</h1>
            </div>
          </div>
        </div>
      </div>

      {/* History & Mission */}
      <section className="pt-5 box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-8 history">
              <h1>
                Quality Product and Latest
                <br />
                Engineering.
              </h1>

              <div className="history-heading">
                <div className="small-orange-line"></div>
                <h2>History</h2>
              </div>

              <p>
                VM SteelTech is one of the largest pre-engineered steel building
              (PEB) companies in India. In 2003, Director of VM STEELTECH Mr.
              Vinay Mangla built the first logistics warehouse in the state of
              Haryana. Since then VM STEELLTECH has built its self owned 1
              million sqft area along with several buildings for its clients all
              around India. VM Steeltech is a sister concern of one of the
              biggest Transportation company in Gurgaon Haryana ,India Known as
              Baroda Freight Carrier. VM SteelTech has a total of 2
              manufacturing facilities located in Gurgaon, India, with a total
              capacity of about 100,000 MT per annum supported by over 100
              employees. The company operates 7 sales offices located across
              India. VM SteelTech has more than 30 certified builders for
              providing erection of steel buildings along with other trades up
              to turnkey projects. With the vision of growing and building India
              , VM Steeltech now plans to expand its roots nationally and
              internationally in the future. We believe that quality steel
              buildings conforming to Indian Standards and international codes
              of Practices sold at a fair price, with special emphasis on sound
              structural engineering, durability, quality fabrication, beautiful
              detailing and quick timely delivery suiting fast track projects,
              would ensure widespread customer acceptance.
              </p>
            </div>

            <div className="col-lg-3 right-content">
              <h3>
                Mission & <span className="highlight">Vision</span>
              </h3>

              <p>
                <strong>Mission :</strong> To provide precision engineering and
              technical products and solutions that are responsive to our
              client’s needs in an innovative and cost-effective manner.
              </p>

              <p>
                <strong>Vision :</strong> To be recognized as the global leader
              for the design, manufacturing, supply and erection of
              Pre-Engineered Steel Buildings (PEB) and Structures.
              </p>

              <h4>Our Strength</h4>

              <p>
                Storage Space
                <br />
                Operating cost
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pt-0 pb-5 container-fluid">
        <div className="row align-items-start">
          <div className="col-lg-3 values">
            <div className="values-heading">
              <div className="small-orange-line"></div>
              <h4>Our Values</h4>
            </div>

            <ul>
              <li>Inclusion and Collaboration</li>
              <li>Customer Centric and Growth Oriented</li>
              <li>Teamwork</li>
              <li>People Empowerment</li>
              <li>Employees as core assets</li>
              <li>Pride and Ownership</li>
              <li>Engineering Excellence</li>
            </ul>
          </div>

          {/* Directors */}
          <div className="col-lg-8 director">
            <div className="director-heading">
              <div className="small-orange-line"></div>
              <h4>Directors</h4>
            </div>

            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 mb-4">
                <div className="card director-card">
                  <img
                    src={pushkar}
                    className="card-img-top"
                    alt="Pushkar Mangla"
                  />

                  <div className="card-body">
                    <h5 className="card-title">Pushkar Mangla</h5>

                    <p className="designation">Director</p>

                    <p className="email">
                      Email: pushkar.mangla@vmsteeltech.in
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-5 col-md-6 mb-4">
                <div className="card director-card">
                  <img src={anuj} className="card-img-top" alt="Anuj Mangla" />

                  <div className="card-body">
                    <h5 className="card-title">Anuj Mangla</h5>

                    <p className="designation">Director</p>

                    <p className="email">Email: anuj.mangla@vmsteeltech.in</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="stats-section">
        <div className="container-fluid">
          <div className="heading">
            <span className="big-number">123K.</span>

            <h2>
              VM SteelTech
              <br />
              in numbers
            </h2>
          </div>

          <div className="stats-row">
            <div className="stat-box">
              <h3>7</h3>
              <p>Own Regional offices</p>
            </div>

            <div className="stat-box">
              <h3>500+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-box">
              <h3>200+</h3>
              <p>Clients</p>
            </div>

            <div className="stat-box">
              <h3>100+</h3>
              <p>Employees</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
