import React from "react";
import { MdMedicalServices, MdEmojiPeople,MdLocationOn } from "react-icons/md";
import { FcIdea } from "react-icons/fc";
import { SiKakaotalk, SiMarketo } from "react-icons/si";
import "./services.css";

const Services = () => {
  return (
    <>
      <section className="section services-section" id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>What I Do</h2>
                <p>
                  I design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* <!-- feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <MdMedicalServices />
                </div>
                <div className="feature-content">
                  <h5>Medical Facility</h5>
                  <p>
                    Plan your Health Tour in India with Indian TV-Tour. Health
                    Tour in India is your solution to a highest quality medical
                    treatment within your budget, in India.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <MdEmojiPeople />
                </div>
                <div className="feature-content">
                  <h5>Private Guide</h5>
                  <p>We provide the best Tourist Guide in India. Tour Guide who's responsible for include planning travel itineraries, familiarizing customers with the locality by vehicle or foot.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                  <FcIdea/>
                </div>
                <div className="feature-content">
                  <h5>Trip Ideas</h5>
                  <p>
                  Need a trip idea? Whether you're in the mysterious places, beach bum, adventure junkie, ancient temples or any famous tourist places: yes, there's a trip for that.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                 <SiMarketo/>
                </div>
                <div className="feature-content">
                  <h5>Marketing</h5>
                  <p>
                    Our marketing office is fully equipped to handle any new
                    enquiry and give personalized service to our business
                    partners all over the world.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                <SiKakaotalk/>
                </div>
                <div className="feature-content">
                  <h5>Multilingual Guides / Escorts</h5>
                  <p>
                  Language interpreters at guided tours enhance the experience.TV-Tour provide a multilingual guide that provide the every details to you related to the places that increase your excitement.

                  </p>
                </div>
              </div>
            </div>

            {/* <!-- feaure box --> */}
            <div className="col-sm-6 col-lg-4">
              <div className="feature-box-1">
                <div className="icon">
                <MdLocationOn/>
                </div>
                <div className="feature-content">
                  <h5>Location Manager</h5>
                  <p>
                  Choosing a place to go when you have the opportunity to travel can sometimes be overwhelming. Location manager suggests the best place for travel  according to you, is an important first step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
