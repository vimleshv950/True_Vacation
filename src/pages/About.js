import React from "react";
import "./about.css";
import vishwanath from "./../assets/img/vishwanath.jpg";
import img2 from "./../assets/img/img-2.jpg";
import { Helmet } from "react-helmet";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>

        <meta
          name="description"
          content="About True Vacation"
        />
      </Helmet>
      {/* <!-- ABOUT SECTION--> */}

      <section className="py-5">
        <div className="container py-4">
          <header className="mb-5">
            <h2 className="text-uppercase lined mb-4">About TURE VACATION</h2>
            <p className="lead">
              True Vacation Tour & Travel offers unique and authentic travel
              experience with range of services to cater the needs of all types
              of tourists in the Indian Subcontinent.
            </p>
          </header>
          <div className="row gy-4">
            <div className="col-lg-12">
              <div className="accordion mb-5" id="aboutAccordion">
                <div className="accordion-item mb-2">
                  <h5
                    className="accordion-header"
                    id="aboutAccordion-headingOne"
                  >
                    <button
                      className="accordion-button text-uppercase fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutAccordion-collapseOne"
                      aria-expanded="true"
                      aria-controls="aboutAccordion-collapseOne"
                    >
                      Introduction
                    </button>
                  </h5>
                  <div
                    className="accordion-collapse collapse show"
                    id="aboutAccordion-collapseOne"
                    aria-labelledby="aboutAccordion-collapseOne"
                    data-bs-parent="#aboutAccordion"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-md-4">
                          <img
                            className="img-fluid"
                            src={vishwanath}
                            alt="..."
                          />
                        </div>
                        <div className="col-md-8">
                          <p>
                            True Vacation Tour & Travel offers unique and
                            authentic travel experience with range of services
                            to cater the needs of all types of tourists in the
                            Indian Subcontinent. As reflected in our tagline
                            “True In All Sense” we at True Vacation Tour &
                            Travel are committed to deliver the tours that are
                            true in the sense of spending quality holidays and
                            family tours with best price as desired by our
                            domestic as well as inbound travellers.
                          </p>
                          <p>
                            Located in the very heart of India (Madhya Pradesh)
                            True Vacation Tour & Travel has also marked its
                            presence in all major tourist destinations across
                            India through its associated patterns.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h5
                    className="accordion-header"
                    id="aboutAccordion-headingTwo"
                  >
                    <button
                      className="accordion-button text-uppercase fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutAccordion-collapseTwo"
                      aria-expanded="false"
                      aria-controls="aboutAccordion-collapseTwo"
                    >
                      Know About Us
                    </button>
                  </h5>
                  <div
                    className="accordion-collapse collapse"
                    id="aboutAccordion-collapseTwo"
                    aria-labelledby="aboutAccordion-collapseTwo"
                    data-bs-parent="#aboutAccordion"
                  >
                    <div className="accordion-body">
                      <div className="row">
                        <div className="col-md-4">
                          <img className="img-fluid" src={img2} alt="..." />
                        </div>
                        <div className="col-md-8">
                          <p>
                            Based on the travelling experience for more than ten
                            years in Indian Subcontinent, our well experienced
                            team has crafted holiday tour packages such a way
                            that will definitely help you to make your dream
                            come true to visit your desired Indian destinations
                            at very affordable pricing.
                          </p>
                          <p>
                            We not just offer hotel bookings, travel
                            arrangements, transport services but we believe in
                            creating lasting memories with our collection of
                            well crafted tour itineraries. Apart from the
                            regular tours we do offers the customizable tour
                            packages to India to showcase inimitable travel
                            experiences unravelling the myriad cultural
                            traditions, deep-grained spirituality and diverse
                            landscape.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5
                    className="accordion-header"
                    id="aboutAccordion-headingThree"
                  >
                    <button
                      className="accordion-button text-uppercase fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#aboutAccordion-collapseThree"
                      aria-expanded="false"
                      aria-controls="aboutAccordion-collapseThree"
                    >
                      Some Small Details
                    </button>
                  </h5>
                  <div
                    className="accordion-collapse collapse"
                    id="aboutAccordion-collapseThree"
                    aria-labelledby="aboutAccordion-collapseThree"
                    data-bs-parent="#aboutAccordion"
                  >
                    <div className="accordion-body">
                      So be ready and pack your luggage to let your dream of
                      exploring diversity of Indian Subcontinent come true with
                      True Vacation Tour & Travel and experience the true spirit
                      of India as reflects in one of the Vedic Chant “Vasudhaiva
                      Kutumbakam” which means that entire world is a family.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4">
              <div className="ratio ratio-4x3">
                <img className="embed-responsive-item" src={img1} />
                <img className="embed-responsive-item" src={img2} />
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!-- END--> */}
      {/* <!-- BLOCKS SECTION--> */}
      <section className="pb-5">
        <div className="container pb-4">
          <div className="row gy-3">
            <div className="col-lg-4">
              <h2 className="lined text-uppercase mb-4">Services</h2>
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar">
                  Hotels
                </div>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar">
                  Car rentals
                </div>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar">
                  Hotel Bookings
                </div>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar">
                  Wedding & Events
                </div>
              </div>
              <div className="progress mb-3">
                <div className="progress-bar" role="progressbar">
                  Itinerary Planning (Customized Tours)
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h2 className="lined text-uppercase mb-4">Packages</h2>
              <ul className="list-unstyled">
                <p className="text-sm mb-0">
                  <ul>
                    <li>Week-end gateways</li>
                    <ul>
                      <li>From Delhi</li>
                      <li>From Ahmedabad</li>
                    </ul>
                    <li>Pilgrimage Tour</li>
                    <li>Cultural Tour</li>
                    <li>Wild life Tour</li>
                    <li>Yoga and wellness Tour</li>
                  </ul>
                </p>
              </ul>
            </div>
            <div className="col-lg-4">
              <h2 className="lined text-uppercase mb-4">Destinations</h2>
              <ul className="list-unstyled">
                <p className="text-sm mb-0">
                  <ul>
                    <li>Kashmir & Leh Laddakh</li>
                    <li>Delhi</li>
                    <li>Rajasthan</li>
                    <li>Gujarat</li>
                    <li>Madhya Pradesh</li>
                    <li>Kerala</li>
                    <li>Uttar Pradesh</li>
                    <li>North East</li>
                    <li>Orissa</li>
                    <li>Tamil Nadu</li>
                    <li>Orissa</li>
                    <li>Karnatka</li>
                  </ul>
                </p>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- END--> */}
    </>
  );
};

export default About;
