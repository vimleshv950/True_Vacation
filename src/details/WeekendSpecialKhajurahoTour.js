import React from "react";
import { useNavigate } from "react-router-dom";
import "./details.css";
import khajuraho15 from "./../assets/img/khajuraho-15.jpg";
import khajuraho9 from "./../assets/img/khajuraho-9.jpg";
import khajuraho17 from "./../assets/img/khajuraho-17.jpg";
import khajuraho22 from "./../assets/img/khajuraho-22.jpg";
import khajuraho7 from "./../assets/img/khajuraho-7.jpg";
import { Helmet } from "react-helmet";

const SpecialKhajurahoTour = () => {
  const navigate = useNavigate();
  return (
    <>
 <Helmet>
        <title> Week-end Special Khajuraho Tour</title>

        <meta
          name="description"
          content=" Week-end Special Khajuraho Tour"
        />
      </Helmet>
      <section className="py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">
            Week-end Special Khajuraho Tour
          </h2>
          <p className="text-sm mb-5 text-gray-600">(1 Nights & 02 Days)</p>
          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={khajuraho15}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
            <div className="main_img col-md-6">
              <img
                src={khajuraho9}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className="content col-12 col-md-8">
              <h1> Day 01: Arrival Khajuraho</h1>
              <p>
                Arrival at Khajuraho Railway station around 0900 hrs. Upon
                arrival pick up from Railway station and transfer to hotel.
                After freshen up proceed full day guided tour to world heritage
                monuments of Western, Eastern & Southern group of temples. Enjoy
                light and sound show/folk dance show. Overnight stay at hotel.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho17}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 02: Khajuraho-Departure</h1>
              <p>
                First half of the day is free for leisure. You can opt an early
                morning jungle safari tour of Panna National Park. After lunch
                proceed for an excursion tour to Raneh Fall. Then transfer
                directly to Railway station to catch the train.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho22}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-5">
            <div className="content col-md-8">
              <h4 className="text-gray-600 mb-4">
                Estimated Package Price: Rs. 7500/- per person (based on minimum
                02 pax) Inclusions:
              </h4>
              <ul>
                <li>
                  AC accommodation for 01 night in 3 star equivalent hotels.
                </li>
                <li>All transfers and sight seeing by AC deluxe vehicle.</li>
                <li>01 day guided tour of temples,.</li>
                <li>All parking, toll and driver allowances</li>
                <li>GST</li>
                <br />
                <h5 className="fw-bold fs-4 mb-4">Exclusions:</h5>
                <li>Entrance fees to monuments, national park etc.</li>
                <li>Optional tour cost</li>
                <li>
                  Any extra services, tips, laundry, Camera and video fees
                </li>
                <li>
                  Any other services not specifically mentioned under
                  inclusions.
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <img
                src={khajuraho7}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400, width: 350 }}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row mx-auto ">
            <div className="col-12">
              <button
                type="button"
                onClick={() => navigate("/destination")}
                className="goback mx-auto w-100"
              >
                Go Back
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialKhajurahoTour;
