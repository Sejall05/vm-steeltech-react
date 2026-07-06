import { Link } from "react-router-dom";

import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PrivacyPolicy() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Banner Section */}
      <section class="page-banner">
        <div class="container">
          <div class="banner-title">Privacy Policy</div>
        </div>
      </section>

      {/* Privacy Content */}
      <section class="privacy-content">
        <div class="container">
          <div class="privacy-box">
            {/* Breadcrumb  */}
            <nav class="custom-breadcrumb">
              <Link to="/">Home</Link>
              <span class="breadcrumb-dot"></span>
              <span>Privacy Policy</span>
            </nav>

            <p>Privacy Policy for VM Steeltech Private Limited</p>
            <p>Introduction</p>
            <p>
              Welcome to the VM Steeltech Private Limited (“Company”, “we”,
              “our”, “us”) website. Your privacy is important to us, and we are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website, www.vmsteeltech.in, or
              engage with our services. Please read this Privacy Policy
              carefully. By using our website, you agree to the terms of this
              Privacy Policy.
            </p>

            <p>Information We Collect</p>
            <p>Personal Information</p>
            <p>
              We may collect personal information that you voluntarily provide
              to us when you:
            </p>
            <ul>
              <li>Register on our website</li>
              <li>Subscribe to our newsletter</li>
              <li>Fill out a form</li>
              <li>Contact us via email or phone</li>
            </ul>
            <p>The personal information we collect may include:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Company name</li>
              <li>Job title</li>
              <li>Address</li>
            </ul>
            <p>Non-Personal Information</p>
            <p>
              We may also collect non-personal information about you when you
              visit our website. This information does not directly identify you
              and may include:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Pages visited on our website</li>
              <li>Time and date of visit</li>
            </ul>
            <p>How We Use Your Information</p>
            <p>
              We may use the information we collect from you for various
              purposes, including:
            </p>
            <ul>
              <li>To personalize your experience on our website</li>
              <li>To improve our website and services</li>
              <li>To respond to your inquiries and provide customer support</li>
              <li>
                To send periodic emails regarding updates, promotions, or other
                information
              </li>
              <li>To process transactions and manage your orders</li>
              <li>
                To analyze website usage and optimize our marketing strategies
              </li>
            </ul>
            <p>How We Protect Your Information</p>
            <p>
              We implement a variety of security measures to maintain the safety
              of your personal information. These measures include:
            </p>
            <ul>
              <li>Secure server infrastructure</li>
              <li>Encryption of sensitive information</li>
              <li>Regular security audits and updates</li>
              <li>Restricted access to personal information</li>
            </ul>

            <p>
              However, please note that no method of transmission over the
              internet or electronic storage is 100% secure. While we strive to
              use commercially acceptable means to protect your personal
              information, we cannot guarantee its absolute security.
            </p>

            <p>Sharing Your Information</p>
            <p>
              We do not sell, trade, or otherwise transfer your personal
              information to outside parties, except in the following
              circumstances:
            </p>
            <ul>
              <li>With your consent</li>
              <li>
                To trusted third parties who assist us in operating our website,
                conducting our business, or servicing you, provided those
                parties agree to keep this information confidential
              </li>
              <li>When required by law or to comply with legal processes</li>
              <li>
                To protect the rights, property, or safety of VM Steeltech, our
                users, or others
              </li>
            </ul>

            <p>Cookies and Tracking Technologies</p>
            <p>
              Our website may use cookies and other tracking technologies to
              enhance your experience. Cookies are small files that a site or
              its service provider transfers to your computer’s hard drive
              through your web browser (if you allow) that enable the site’s or
              service provider’s systems to recognize your browser and capture
              and remember certain information.
            </p>
            <p>
              You can choose to disable cookies through your individual browser
              options. However, disabling cookies may affect the functionality
              and features of our website.
            </p>

            <p>Third-Party Links</p>
            <p>
              Our website may contain links to third-party websites. These
              third-party sites have separate and independent privacy policies.
              We have no responsibility or liability for the content and
              activities of these linked sites. Nonetheless, we seek to protect
              the integrity of our site and welcome any feedback about these
              sites.
            </p>

            <p>Children’s Privacy</p>
            <p>
              Our website is not intended for use by children under the age of
              13. We do not knowingly collect personal information from children
              under 13. If we become aware that we have inadvertently received
              personal information from a user under the age of 13, we will
              delete such information from our records.
            </p>

            <p>Changes to This Privacy Policy</p>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We will post any changes to this Privacy
              Policy on this page. Your continued use of our website after any
              modifications indicates your acceptance of the updated Privacy
              Policy.
            </p>

            <p>Contact Us</p>
            <p>
              If you have any questions about this Privacy Policy or our
              practices regarding your personal information, please contact us
              at:
            </p>
            <p>
              VM Steeltech Private Limited
              <br />
              Gurgaon, Haryana, India
              <br />
              Email: info@vmsteeltech.in
              <br />
              Phone: +91-9999499954
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default PrivacyPolicy;
