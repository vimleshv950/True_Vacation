import React from "react";
import "./footer.css";
import {Link} from 'react-router-dom'
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
                  <span>TURE VACATION</span> is a website that helps travelers find the best places to travel, and provides the best services that make your tour very memorial moment.
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
                <h6 className="text-uppercase fw-bold mb-4">Best Tour</h6>
                <p>
                  <Link to="/" className="active footer-link">
                    Khajuraho
                  </Link>
                </p>
                <p>
                  <Link to="/" className="footer-link">
                    Orchha
                  </Link>
                </p>
                <p>
                  <Link to="/" className="footer-link">
                  Pachmarhi
                  </Link>
                </p>
                <p>
                  <Link to="/" className="footer-link">
                    Bhopal  
                  </Link>
                </p>
                <p>
                  <Link to="/" className="footer-link">
                    Vanarasi  
                  </Link>
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                <p>
                  <Link to="/" className="active footer-link">
                    Home
                  </Link>
                </p>
                <p>
                  <Link to="/destination" className="footer-link">
                    Destination
                  </Link>
                </p>
                <p>
                  <Link to="/contact" className="footer-link">
                    Contact
                  </Link>
                </p>
                <p>
                  <Link to="/about" className="footer-link">
                    About
                  </Link>
                </p>
                <p>
                  <Link to="/gallery" className="footer-link">
                    Gallery
                  </Link>
                </p>
              </div>

              <div className="footer-icons col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-2">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <FaHome /> <Link to='/'>TURE VACATION</Link>
                </p>
                <p>
                  <FaMailBulk /> truevacationkhajuraho@gmail.com
                </p>
                <p>
                  <FaPhoneAlt /> <a href="tel:+919560644681">+91 9560644681</a>
                </p>
                <p>
                  <FaPhoneAlt /> <a href="tel:+917566574007">+91 7566574007</a>
                </p>
                <p>
                  <FaPhoneAlt /> <a href="https://api.whatsapp.com/send?phone=8829974681" target="_blank">+91 8829974681</a>
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
