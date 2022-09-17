import React from "react";
import "./details.css";
import { useNavigate } from "react-router-dom";

import bhojpur2 from "./../assets/img/bhojpur-2.jpg";
import khajuraho29 from "./../assets/img/khajuraho-29.jpg";
import brahaspatikund from "./../assets/img/brahaspati-kund.jpg";
import mandu from "./../assets/img/mandu.jpeg";
import bhojpur1 from "./../assets/img/bhojpur-1.jpg";
import unesco from "./../assets/img/unesco.jpg";
import img35 from "./../assets/img/img-35.jpg";
import khajuraho22 from "./../assets/img/khajuraho-22.jpg";
import orchha2 from "./../assets/img/orchha-2.jpg";
import car4 from "./../assets/img/car-4.jpeg";
import khajuraho16 from "./../assets/img/khajuraho-16.jpg";


const TrueVacationTourTravel = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="detail_section py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">MP Tour</h2>
          <p className="text-sm mb-5 text-gray-600"> 09 Days </p>
          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={brahaspatikund}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
            <div className="main_img col-md-6">
              <img
                src={unesco}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 01</h1>
              <p>
                arrival at Jhansi railway station . transfer to hotel of orchha.
                afternoon free for relax. evening overnight night stay in
                orchha.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={img35}
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
                after Breackfast visit Orchha fort , Jahangir Mahal. Raja Mahal.
                chaturbhuj temple, Royal Chhatris, Khanchan Ghat, afternonn free
                for rest. in evening visit light& sound show of orchha fort.
              </p>
              <p>Overnight stay in orchha</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={orchha2}
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
                Morning check outand Drive to Khajuraho. check in at Hotel.
                after lunch visit khajuraho western group of temple. in evening
                visit light & soundshow of khajuraho temple.
                <p>Overnight stay in khajuraho</p>
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho29}
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
                morning check out. visit khajuraho eastern & southern group of
                temple. after Lunch drive to khajuraho Railway station- Arrival
                at night in Bhopal. Overnight stay in Bhopal
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
              <h1>Day 05</h1>
              <p>
                Visit sanchi Stupa and Udaigiri caves. Or Bhojpur shiv temple
                and Back to city.
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
              <h1>Day 06</h1>
              <p>
                Morning check out and visit bhopal city and drive to indore
                Check in at hotel evening visit indore. Overnight at indore
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={car4}
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
                  src={bhojpur1}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 08</h1>
              <p>morning excursion to mandu evening back to city.</p>
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
                if time permits visit indore and departure transfer to airport
                or station.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho16}
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

export default TrueVacationTourTravel;
