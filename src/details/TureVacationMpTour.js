import React from "react";

import "./details.css";

import laxman from "./../assets/img/laxman.jpg";
import khajuraho4 from "./../assets/img/khajuraho-4.jpg";
import khajuraho31 from "./../assets/img/khajuraho-31.jpg";
import img15 from "./../assets/img/img-15.jpg";
import jahagirmahal from "./../assets/img/jahagir-mahal.jpg";
import orchha3 from "./../assets/img/orchha-3.jpg";
import sanchi1 from "./../assets/img/sanchi-1.jpg";
import bhojpur2 from "./../assets/img/bhojpur-2.jpg";
import sadhu2 from "./../assets/img/sadhu-2.jpg";
import mandu from "./../assets/img/mandu.jpeg";



const TureVacationMpTour = () => {
  return (
    <>
      <section className="detail_section py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">
            Ture Vacation - MP Tour
          </h2>
          <p className="text-sm mb-5 text-gray-600">(08 night - 09 day tour)</p>
          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={khajuraho4}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
            <div className="main_img col-md-6">
              <img
                src={laxman}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
          </div>
          <div className="row mb-4">
            <div className="content col-12 col-md-8">
              <h1>Day 01</h1>
              <p>
                arrival at Jhansi railway station . transfer to hotel of orchha.
                . afternoon free for relax . evening Visit Shri Ramraja temple
                Arti . overnight night stay in orchha ,
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
              <h1>Day 02</h1>
              <p>
                after Breackfast visit Orchha fort , Jahangir Mahal . Raja Mahal
                . chaturbhuj temple . Royal Chhatris. Khanchan Ghat . afternonn
                free for rest . in evening visit light& sound show of orchha
                fort , Overnight stay in orchha
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={jahagirmahal}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 03</h1>
              <p>
                Morning check out after lunch visit khajuraho western group of
                temple . in evening visit light & soundshow of khajuraho temple
                , Overnight stay in khajuraho
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho31}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 04</h1>
              <p>
                morning check out . visit khajuraho eastern & southern group of
                temple . after Lunch drive to khajuraho Railway station
                ,-Arrival at night in Bhopal. Overnight stay in Bhopal.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={img15}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 05</h1>
              <p>
                Visit sanchi Stupa and Udaigiri caves. Or Bhojpur shiv temple
                and Back to city.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={sanchi1}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 06</h1>
              <p>
                Morning check out and visit bhopal city and drive to Indore.
                Check in at hotel evening visit indore. Overnight at indore.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={bhojpur2}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 07</h1>
              <p>
                morning breakfast and drive to ujjain visit all temple and back
                to indore.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={sadhu2}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 08</h1>
              <p>
               Morning excursion to Mandu and evening back to city.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={mandu}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 09</h1>
              <p>
              If time permits visit indore and departure transfer to airport or station.
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
        </div>
      </section>
    </>
  );
};

export default TureVacationMpTour;
