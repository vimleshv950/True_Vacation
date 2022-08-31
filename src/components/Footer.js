import React from "react";
import "./footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPinterestP,
  FaMailBulk,
  FaHome,
  FaPhoneAlt,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start text-muted">
        <section className="">
          <div className=" container-fluid container-footer text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="footer_company col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company name</h6>
                <p>
                  <span>TV-TOUR</span> TV-Tour is a website that helps travelers find the best places to travel, and provides the best services that make your tour very memorial moment.
                </p>
                <div className="social-media-icons">
                  <a href="" className="me-4 text-reset">
                    <FaFacebook />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <FaTwitter />
                  </a>

                  <a href="" className="me-4 text-reset">
                    <FaInstagram />
                  </a>
                  <a
                    href="https://in.linkedin.com/in/dharmendra-kumar-tiwari-8aaa31144"
                    className="me-4 text-reset"
                  >
                    <FaLinkedin />
                  </a>
                  <a href="" className="me-4 text-reset">
                    <FaPinterestP />
                  </a>
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">EPIC Tour</h6>
                <p>
                  <a href="/" className="active footer-link">
                    Khajuraho
                  </a>
                </p>
                <p>
                  <a href="/" className="footer-link">
                    Orcha
                  </a>
                </p>
                <p>
                  <a href="/" className="footer-link">
                    Maihar
                  </a>
                </p>
                <p>
                  <a href="/" className="footer-link">
                    Bhopal  
                  </a>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                <p>
                  <a href="/" className="active footer-link">
                    Home
                  </a>
                </p>
                <p>
                  <a href="/destination" className="footer-link">
                    Destination
                  </a>
                </p>
                <p>
                  <a href="/contact" className="footer-link">
                    Contact
                  </a>
                </p>
                <p>
                  <a href="/about" className="footer-link">
                    About
                  </a>
                </p>
              </div>

              <div className="footer-icons col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FaHome /> TV-Tour
                </p>
                <p>
                  <FaMailBulk /> info@example.com
                </p>
                <p>
                  <FaPhoneAlt /> + 01 234 567 88
                </p>
                <p>
                  <FaPhoneAlt />+ 01 234 567 89
                </p>
              </div>
            </div>
            <hr />
            <div className="text-center">
          © 2021 Copyright:
          <a className="text-reset" href="/">
            OneWonLabs.in
          </a>
        </div>
          </div>
        </section>

     
      </footer>
    </>
  );
};

export default Footer;
