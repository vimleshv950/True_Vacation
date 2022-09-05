import React from "react";
import "./contact.css";
import { Link } from "react-router-dom";
import { GoLocation } from "react-icons/go";
const Contact = () => {
  return (
    <>
      {/* <section class="bg-pentagon py-4">
              <div class="container py-3">
                <div class="row d-flex align-items-center gy-4">
                  <div class="col-md-7">
                    <h1 class="h2 mb-0 text-uppercase">About us</h1>
                  </div>
                  <div class="col-md-5">
                 
                    <ol class="text-sm justify-content-start justify-content-lg-end mb-0 breadcrumb undefined">
                      <li class="breadcrumb-item"><a class="text-uppercase" href="index.html">Home</a></li>
                      <li class="breadcrumb-item text-uppercase active">About us      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </section> */}
      <section class="py-5">
        <div class="container py-4">
          <h2 class="text-uppercase lined mb-4">We are here to help you</h2>
          <p class="lead mb-5">
            Are you curious about something? Do you have some kind of problem
            with our products? As am hastily invited settled at limited civilly
            fortune me. Really spring in extent an by. Judge but built gay party
            world..
          </p>
          <p class="text-sm mb-5">
            Please feel free to contact us, our customer service center is
            working for you 24/7.
          </p>
          <div class="row gy-5 mb-5">
            <div class="col-lg-4 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3">
                <GoLocation />
              </div>
              <h4 class="text-uppercase mb-3">Address</h4>
              <p class="text-gray-600 text-sm">
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
            <div class="col-lg-4 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3">
                <GoLocation />
              </div>
              <h4 class="text-uppercase mb-3">Call center</h4>
              <p class="text-gray-600 text-sm">
                This number is calling from Ture Vacation otherwise
                we advise you to use the electronic form of communication.
              </p>
              <p class="text-gray-600 text-sm">
                <strong>+123456789</strong>
              </p>
            </div>
            <div class="col-lg-4 block-icon-hover text-center">
              <div class="icon icon-outlined icon-outlined-primary icon-thin mx-auto mb-3">
                <GoLocation />
              </div>
              <h4 class="text-uppercase mb-3">Electronic support</h4>
              <p class="text-gray-600 text-sm">
                Please feel free to write an email to us or to use our
                electronic ticketing system.
              </p>
              <ul class="list-unstyled text-sm mb-0">
                <li>
                  <strong>
                    <Link to="mailto:">info@Eurostart.com</Link>
                  </strong>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- CONTACT FORM    --> */}
          <div class="row">
            <div class="col-lg-7 mx-auto">
              <h2 class="lined lined-center text-uppercase mb-4">
                Contact form
              </h2>
              <form action="/">
                <div class="row">
                  <div class="col-md-6 mb-3">
                    <label class="form-label" for="firstname">
                      First Name
                    </label>
                    <input class="form-control" id="firstname" type="text" />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label" for="lastname">
                      Last Name
                    </label>
                    <input class="form-control" id="lastname" type="text" />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label" for="emailaddress">
                      Email Address
                    </label>
                    <input
                      class="form-control"
                      id="emailaddress"
                      type="email"
                    />
                  </div>
                  <div class="col-md-6 mb-3">
                    <label class="form-label" for="subject">
                      Subject
                    </label>
                    <input class="form-control" id="subject" type="text" />
                  </div>
                  <div class="col-md-12 mb-3">
                    <label class="form-label" for="message">
                      Message
                    </label>
                    <textarea
                      class="form-control"
                      id="message"
                      rows="4"
                    ></textarea>
                  </div>
                  <div class="col-md-12 text-center">
                    <button class="btn btn-outline-primary" type="submit">
                      <i class="far fa-envelope me-2"></i>Send message
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
