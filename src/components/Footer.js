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
              <div className="footer_company col-12 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Company name</h6>
                <p>
                  <span>TRUE VACATION</span> is a website that helps travelers find the best places to travel, and provides the best services that make your tour very memorial moment.
                </p>
                <div className="social-media-icons">
                  <a href="https://www.facebook.com/people/Truevacation-India/100071351372185" className="me-4 text-reset" target="_blank">
                    <FaFacebook />
                  </a>
                  <a href="" className="me-4 text-reset" target="_blank">
                    <FaTwitter />
                  </a>

                  <a href="https://www.instagram.com/tvtour11/" className="me-4 text-reset" target="_blank">
                    <FaInstagram />
                  </a>
                  <a
                    href="https://in.linkedin.com/in/dharmendra-kumar-tiwari-8aaa31144"
                    className="me-4 text-reset" target="_blank"
                  >
                    <FaLinkedin />
                  </a>
                
                </div>
              </div>

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Best Tour</h6>
                <p>
                  <Link to="/goldentringlewithcentralindiagoa" className="active footer-link">
                    Delhi
                  </Link>
                </p>
                <p>
                  <Link to="/gwaliororchhakhajuraho" className="footer-link">
                  Gwalior 
                  </Link>
                </p>
                <p>
                  <Link to="/goldentriangletour" className="footer-link">
                  Jaipur
                  </Link>
                </p>
                <p>
                  <Link to="/weekendspecialkhajurahotour" className="footer-link">
                    Khajuraho  
                  </Link>
                </p>
                <p>
                  <Link to="/divinecentralindiatour" className="footer-link">
                  Chitrakoot
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
                  <FaHome className="mx-2"/> <Link to='/'>TURE VACATION</Link>
                </p>
                <p>
                  <FaMailBulk className="mx-2"/> 
                    <a href="mailto:truevacationkhajuraho@gmail.com">truevacationkhajuraho@gmail.com</a> 
                </p>
                <p>
                  <FaPhoneAlt className="mx-2"/> <a href="tel:+919560644681">+91 9560644681</a>
                </p>
                <p>
                  <FaPhoneAlt className="mx-2"/> <a href="tel:+917566574007">+91 7566574007</a>
                </p>
                <p>
                  <FaPhoneAlt className="mx-2"/> <a href="https://api.whatsapp.com/send?phone=8829974681" target="_blank">+91 8829974681</a>
                </p>
              </div>
            </div>
            <hr />
            <div className="text-center">
            All Right Reserved 
          <a className="text-reset" href="https://onewon.in/">
          @OnewonLabs Pvt. Ltd.
          </a>
        </div>
          </div>
        </section>

     
      </footer>
    </>
  );
};

export default Footer;
