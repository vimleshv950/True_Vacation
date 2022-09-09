import React from "react";
import "./details.css";
import orchha5 from "./../assets/img/orchha-5.jpg";
import lion from "./../assets/img/lion.jpg";
import orchha3 from "./../assets/img/orchha-3.jpg";
import khajuraho12 from "./../assets/img/khajuraho-12.jpg";
import khajuraho1 from "./../assets/img/khajuraho-1.jpg";
import khajuraho13 from "./../assets/img/khajuraho-13.jpg";

const OrchhaKhajurahoTour = () => {
  return (
    <>
      <section className="detail_section py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">Orchha- Khajuraho Tour</h2>
          <p className="text-sm mb-5 text-gray-600">(2 Nights & 03 Days)</p>
          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={lion}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
            <div className="main_img col-md-6">
              <img
                src={orchha5}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="content col-12 col-md-8">
              <h1>Day 01: Arrival Jhansi–Orchha-Khajuraho</h1>
              <p>
                Arrival Jhansi Railway station in morning. Upon arrival pick up
                from Railway station and procced by road to Orchha. Visit Ram
                Raja temple, Chaturbhuj temple and Jahangir Mahal. In late
                afternoon continue drive to Khajuraho. On arrival check into
                hotel. Overnight stay at hotel.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho12}
                  style={{height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 02: Khajuraho</h1>
              <p>
                Today after breakfast proceed to full day guided tour of word
                heritage monuments of Khajuraho including Western, Eastern and
                Southern group of temples. In evening enjoy light and sound show
                at Western Group of temples. Overnight stay at hotel.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={orchha3}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 03: Khajuraho–Jhansi-Departure</h1>
              <p>
                First half of the day is free for leisure. You can opt an early
                morning jungle safari tour of Panna National Park. Around 1100
                hrs check out the hotel and start drive to Jhansi. Drop at
                Jhansi Railway station to catch your return scheduled train.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho1}
                  style={{ height: 400, width: 350}}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className="content col-md-8">
              <h4 className="text-gray-600 mb-4">
                Estimated Package Price: 8000 /- per person (based on minimum 09
                pax) Inclusions:
              </h4>
              <ul>
                <li>
                AC accommodation in 3 star equivalent hotels.                </li>
                <li>All transfers and sight seeing by AC deluxe vehicle.</li>
                <li>01 day guided tour of temples,.</li>
                <li>Half day guided tour of Orchha monuments</li>
                <li>All parking, toll and driver allowances
</li>
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
                src={khajuraho13}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400, width: 350 }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrchhaKhajurahoTour;
