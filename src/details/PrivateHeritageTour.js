import React from "react";
import "./details.css";
import { useNavigate } from "react-router-dom";
import khajuraho18 from "./../assets/img/khajuraho-18.jpg";
import orchha5 from "./../assets/img/orchha-5.jpg";
import khajuraho4 from "./../assets/img/khajuraho-4.jpg";
import khajuraho9 from "./../assets/img/khajuraho-9.jpg";
import laxman from "./../assets/img/laxman.jpg";
import ranehfall from "./../assets/img/ranehfall.jpg";
import khajuraho30 from "./../assets/img/khajuraho-30.jpg";
import { Helmet } from "react-helmet";

const PrivateHeritageTour = () => {
  const navigate = useNavigate();
  return (
    <>
 <Helmet>
        <title>Private Heritage Tour of Khajuraho & Orchha</title>

        <meta name="description" content="  Private Heritage Tour of Khajuraho & Orchha" />
      </Helmet>
      <section className="detail_section py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">
            Private Heritage Tour of Khajuraho & Orchha
          </h2>
          <p className="text-sm mb-5 text-gray-600">03-Days</p>
          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={khajuraho18}
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
          <div className="row mx-auto mb-4">
            <div className="content col-12 col-md-8">
              <h1>Day 01: Arrival Khajuraho</h1>
              <p>
                Khajuraho Group of Monuments' is famous for its Nagara-Style
                architecture and graceful sculptures of nayikas and deities. The
                splendour of the intricate statues is one of the reasons that
                makes it a popular site to visit among tourists.
              </p>
              <p>
                Built between 950-1050 AD by the Chandela Dynasty, these temples
                represent various forms like meditation, spiritual teachings,
                relationship, through stimulating art. The temples are famous
                for its craftsmanship that consist of splendid demonstrations of
                fine sculptures and exceptional architectural skill, making them
                one of the most stunning UNESCO World Heritage Sites in India.
                These temples are divided into three groups: Eastern, Western
                and Southern
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho4}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 01: Arrive Khajuraho </h1>
              <p>
                Arrive Khajuraho Rly Station/Airport. On arrival transfer to
                hotel. Today visit Western group of temples and Eastern group of
                temples which are renowned as world Heritage site by UNESCO and
                worldwide famous for its erotic sculptures and architecture. .
                In evening enjoy light and sound show to be organised by MPSTDC
                at Western group Temple.
              </p>
              <p>Night stay at hotel. </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho9}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 02: Khajuraho- Orchha</h1>
              <p>
                After breakfast an excursion tour of Ranehfall l. After lunch
                drive to Orchha (170 Kms/3. 5 hrs drive). On arrival at hotel.
                In evening you may visit local temple to attend evening Arti.
              </p>
              <p> Night stay at Orchha.</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={ranehfall}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 03: Orchha - Jhansi - Departure</h1>
              <p>
                In the morning walking tour across the River Betwa. After B/F
                proceed to visit Jahangir Fort, riverside cenotaphs of Bundela
                Kings and temples like Ram Raja Temple, Laxminarayan Temple,
                Chaturbhuj Temple etc. Late afternoon transfer to Jhansi Rlw
                station to board the train toward your next destination.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={laxman}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className="content col-md-8">
              <h4 className="text-gray-600 mb-4">Included :-</h4>
              <ul>
                <li>Sightseeing by air conditioned vehicle </li>
                <li>
                  Services of local English / Italian / Spanish/ German /
                  Russian Speaking Guide.
                </li>
                <li>Monument Fee to the places as per the itinerary. </li>
                <li>Presently Applicable Taxes.</li>

                <li>01 bottle water per person per day </li>

                <br />
                <h4 className="text-gray-600 mb-4">Not Included :-</h4>
                <li>
                  Personal expenses such as table drinks telephone calls or tip
                  etc.
                </li>
                <li>
                  Any additional expenses caused by disturbance in program due
                  to weather conditions, sickness, natural disasters, riots etc.
                </li>

                <li>
                  Liability for or insurance against injury, loss of life,
                  accidents or loss of goods.
                </li>

                <li>Camera Fees.</li>
              </ul>
            </div>
            <div className="col-md-4">
              <img
                src={khajuraho30}
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

export default PrivateHeritageTour;
