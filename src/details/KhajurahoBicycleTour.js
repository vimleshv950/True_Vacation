import React from "react";
import "./details.css";
import { useNavigate } from "react-router-dom";
import bicycle2 from "./../assets/img/bicycle2.jpeg";
import bicycle1 from "./../assets/img/bicycle1.jpeg";

import khajuraho14 from "./../assets/img/khajuraho-14.jpg";
import khajuraho1 from "./../assets/img/khajuraho-1.jpg";
import khajuraho22 from "./../assets/img/khajuraho-22.jpg";

const KhajurahoBicycleTour = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="detail_section py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">Orchha- Khajuraho Tour</h2>
          <p className="text-sm mb-5 text-gray-600">(2 Nights & 03 Days)</p>
          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={bicycle2}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
            <div className="main_img col-md-6">
              <img
                src={khajuraho14}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className="content col-12 col-md-8">
              <p>
                Khajuraho is an ancient city known for magnificent temples and
                its intricate sculptures located in the Chhatarpur district of
                Madhya Pradesh. Built in the medieval century by the Chandela
                Dynasty, the UNESCO site of 'Khajuraho Group of Monuments' is
                famous for its Nagara-Style architecture and graceful sculptures
                of nayikas and deities. The splendour of the intricate statues
                is one of the reasons that makes it a popular site to visit
                among tourists.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={bicycle1}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <p>
                Built between 950-1050 AD by the Chandela Dynasty, these temples
                represent various forms like meditation, spiritual teachings,
                relationship, through stimulating art. The temples are famous
                for its craftsmanship that consist of splendid demonstrations of
                fine sculptures and exceptional architectural skill, making them
                one of the most stunning UNESCO World Heritage Sites in India.
                These temples are divided into three groups: Eastern, Western
                and Southern. Beautiful, detailed and expressive, the sculptures
                of the Khajuraho temples will leave you in awe and wonder.
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
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <p>
                Our Bicycle tour will make you familiar with real roots of the
                old city of khajuraho and give you a true taste of the old and
                new part of the city . During your Bicycle tour you will get to
                ride around the khajuraho group of temple , The Khajuraho
                Temples can be divided into Eastern Group of Temples, Western
                Group of Temples and Southern Group of Temples. Kandariya
                Mahadeo laxman temple . devi jagdamba . chitragupta temple some
                beautiful temple of khajuraho
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho1}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
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

export default KhajurahoBicycleTour;
