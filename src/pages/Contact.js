import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
const Contact = () => {
  return (
    <>
      <section className="py-5 contact_section">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">We are here to help you</h2>
          <p className="text-sm mb-5">
            Please feel free to contact us, our customer service center is
            working for you 24/7.
          </p>
          <div className="row gy-5 mb-5">
            <div className="col-md-4 col-12 block-icon-hover text-center">
              <div className="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3">
                <GoLocation />
              </div>
              <h4 className="text-uppercase mb-3">Address</h4>
              <p className="text-gray-600 text-sm">
                Registered Office:
                <br />
                Rajdhar colony, Rajnagar ByPass
                <br />
                Khajuraho – 471606
                <strong>
                  <br /> Delhi, Bhopal
                </strong>
              </p>
            </div>
            <div className="col-md-4 col-12 block-icon-hover text-center">
              <div className="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3">
                <GoLocation />
              </div>
              <h4 className="text-uppercase mb-3">Call center</h4>
              <p className="text-gray-600 text-sm">
                This number is calling from Ture Vacation otherwise
                we advise you to use the electronic form of communication.
              </p>
              <p className="text-gray-600 text-sm">
                <strong><a href="tel:+919560644681">+91 9560644681</a></strong>
              </p>
              <p className="text-gray-600 text-sm">
                <strong><a href="tel:+917566574007">+91 7566574007</a></strong>
              </p>
              <p className="text-gray-600 text-sm">
                <strong><a href="https://api.whatsapp.com/send?phone=8829974681" target="_blank">+91 8829974681</a></strong>
              </p>
            </div>
            <div className="col-md-4 col-12 block-icon-hover text-center">
              <div className="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3">
                <GoLocation />
              </div>
              <h4 className="text-uppercase mb-3">Electronic support</h4>
              <p className="text-gray-600 text-sm">
                Please feel free to write an email to us or to use our
                electronic ticketing system.
              </p>
              <ul className="list-unstyled text-sm mb-0">
                <li>
                  <strong>
                  <a href="mailto:truevacationkhajuraho@gmail.com">truevacationkhajuraho@gmail.com</a>
                  </strong>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- CONTACT FORM    --> */}
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <h2 className="lined lined-center text-uppercase mb-4">
                Contact form
              </h2> 
              <form action="/">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label" for="firstname">
                      First Name
                    </label>
                    <input className="form-control" id="firstname" type="text" />
                  </div>
                  <div className="col-md-6  col-12 mb-3">
                    <label className="form-label" for="lastname">
                      Last Name
                    </label>
                    <input className="form-control" id="lastname" type="text" />
                  </div>
                  <div className="col-md-6  col-12 mb-3">
                    <label className="form-label" for="emailaddress">
                      Email Address
                    </label>
                    <input
                      className="form-control"
                      id="emailaddress"
                      type="email"
                    />
                  </div>
                  <div className="col-md-6  col-12 mb-3">
                    <label className="form-label" for="subject">
                      Subject
                    </label>
                    <input className="form-control" id="subject" type="text" />
                  </div>
                  <div className="col-md-12  col-12 mb-3">
                    <label className="form-label" for="message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="col-md-12  col-12 text-center">
                    <button className="btn btn-outline-primary" type="submit">
                     Send message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
