import React from "react";
import { useNavigate } from "react-router-dom";
import "./details.css";

import lion from "./../assets/img/lion.jpg";
import khajuraho29 from "./../assets/img/khajuraho-29.jpg";
import orchha9 from "./../assets/img/orchha-9.jpg";
import orchha4 from "./../assets/img/orchha-4.jpg";
import orchha8 from "./../assets/img/orchha-8.jpg";
import bhedaghat from "./../assets/img/bhedaghat.jpg";

import khajuraho25 from "./../assets/img/khajuraho-25.jpg";
import khajuraho14 from "./../assets/img/khajuraho-14.jpg";

const MedievalCultureWithWildlifeTour = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="detail_section py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">
            Medieval Culture With Wildlife Tour{" "}
          </h2>
          <p className="text-sm mb-5 text-gray-600">(4 Nights & 05 Days)</p>
          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={orchha9}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
            <div className="main_img col-md-6">
              <img
                src={khajuraho25}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className="content col-12 col-md-8">
              <h1>Day 01: Arrival Jhansi–Orchha </h1>
              <p>
                Arrival Jhansi Railway station in morning. Upon arrival pick up
                from Railway station and proceed by road to Orchha. Upon arrival
                check into hotel. Later full day orchha tour including visit Ram
                Raja temple, Chaturbhuj temple and Jahangir Mahal. Overnight
                stay at Orchha.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho14}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 02: Khajuraho</h1>
              <p>
                Today after breakfast proceed by road to Khajuraho. Upon arrival
                check into hotel and then guided tour of word hertoage monuments
                of Khajuraho including Western & Eastern group of temples. In
                evening enjoy light and sound show at Western Group of temples.
                Overnight stay at hotel..
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={lion}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 03: Khajuraho–Bandhavgarh</h1>
              <p>
                First half of the day is free for leisure. You can opt an early
                morning jungle safari tour of Panna National Park. Around 1100
                hrs check out the hotel and start drive to Bandhavgarh. Arrival
                Bandhawgarh in evening. Check into your resort for overnight
                stay.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={orchha4}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 04: Bandhavgarh</h1>
              <p>
                Enjoy an early morning Jungle Safari in Bandhavgarh national
                park to cite the Tiger and other wild animals. Return back to
                resort in afternoon. Evening at leisure. Overnight stay at
                hotel.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={bhedaghat}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 05: Bandhavgarh – Jabalpur - Departure</h1>
              <p>
                After breakfast start drive to Jabalpur. En-route visit to
                famous Dhuandhar water fall Bhedaghat. Then transfer to railway
                station/Airport to continue your return journey to your
                respective destination.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={orchha8}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>

            <div className="row mx-auto mb-4">
              <div className="content col-md-8">
                <h4 className="text-gray-600 mb-4">
                  Estimated Package Price: Rs. 22000 ./- per person (based on
                  minimum 02 pax) Inclusions:
                </h4>
                <ul>
                  <li>AC accommodation in 3 star equivalent hotels. </li>
                  <li>All transfers and sight seeing by AC deluxe vehicle.</li>
                  <li>01 day guided tour of temples at Khajuraho.</li>
                  <li>01 day guided tour of Orchha monuments.</li>
                  <li>All parking, toll and driver allowances</li>
                  <li>GST</li>
                  <br />
                  <h5 className="fw-bold fs-4 mb-2">Exclusions:</h5>
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
                  src={khajuraho29}
                  className="img-fluid"
                  alt="khajuraho"
                  style={{ height: 400, width: 350 }}
                />
              </div>
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

export default MedievalCultureWithWildlifeTour;
