import React from "react";
import "./details.css";
import { useNavigate } from "react-router-dom";
import khajuraho31 from "./../assets/img/khajuraho-31.jpg";
import bhojpur2 from "./../assets/img/bhojpur-2.jpg";
import mandu from "./../assets/img/mandu.jpeg";
import sanchi2 from "./../assets/img/sanchi-2.jpg";
import img16 from "./../assets/img/img-16.jpg";
import pic27 from "./../assets/img/pic-27.jpeg";
import khajuraho8 from "./../assets/img/khajuraho-8.jpg";
import khajuraho21 from "./../assets/img/khajuraho-21.jpg";
import khajuraho29 from "./../assets/img/khajuraho-29.jpg";
import orchha9 from "./../assets/img/orchha-9.jpg";
import orchha2 from "./../assets/img/orchha-2.jpg";
import orchha1 from "./../assets/img/orchha-1.jpg";



const TureVacationMpTour = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="detail_section py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">
          MP Tour 
          </h2>
          <p className="text-sm mb-5 text-gray-600">(08 Nights & 09 Days )</p>
          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={khajuraho21}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
            <div className="main_img col-md-6">
              <img
                src={orchha9}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className="content col-12 col-md-8">
              <h1>Orchha ,Khajuraho , Bhopal, Indore Tour...</h1>
              
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
              <h1>Day 01</h1>
              <p>
              Arrival Jhansi and transfer to Orchha. Orchha local tour. Overnight stay at Orchha.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={orchha1}
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
              After breakfast check out from hotel and proceed by road to Khajuraho. On arrival check into hotel then half day sightseeing tour of Khajuraho Monuments. Evening enjoy light and sound show at Western Group of temple. Overnight stay at Khajuraho.
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
              <h1>Day 03</h1>
              <p>
              After breakfast enjoy half day  sight seeing of Khajuraho. In afternoon start drive to Bhopal. Arrival Bhopal in late night . Overnight stay at Bhopal.
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
              After breakfast full day city tour of Bhopal. Overnight stay at Bhopal.
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
              <h1>Day 05</h1>
              <p>
              After breakfast  visit Sanchi Stupa, Udaigiri and Bhojpur Shiva Temple. Overnight Stay in Bhopal.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={sanchi2}
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
              After breakfast , check out from hotel drive to Indore.  Bhopal to Indore – Distance 192 kms/ 3.5 hrs. Enjoy
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={img16}
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
              After breakfast  proceed for an excursion tour to Ujjain. Visit to  Mahakaleshwar temple. • Indore to Ujjain – Distance 55 kms/ 1.5 hrs. Return back to Indore in Evening• Overnight stay in Indore.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho8}
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
              After breakfast proceed for an excursion tour to Mandu. (Indore to Mandu : Distance 90 kms/ 3 hrs). Return Back to Indore in Evening. Overnight stay in Indore.
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
              After breakfast departure transfer to Railway station/ Airport. 
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={pic27}
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

export default TureVacationMpTour;
