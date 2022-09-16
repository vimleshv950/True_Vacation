import React from "react";
import "./details.css";
import { useNavigate } from "react-router-dom";
import yoga1 from "./../assets/img/yoga-1.jpeg";
import yoga4 from "./../assets/img/yoga-4.jpg";
import yoga9 from "./../assets/img/yoga-9.jpeg";
import yoga3 from "./../assets/img/yoga-3.jpeg";

import yoga11 from "./../assets/img/yoga-11.jpeg";


const ExploreMajesticKhajurahoWithYoga = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="detail_section py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">
            EXPLORE MAJESTIC KHAJURAHO WITH YOGA
          </h2>

          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={yoga1}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
            <div className="main_img col-md-6">
              <img
                src={yoga4}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className="content col-12 col-md-8">
              <h1>* First day of yoga class</h1>
              <p>
                <ul>
                  <li>Series of few exercise for opening the joints of body</li>
                  <li>
                    Series of Asana
                    <ul>
                      <li>Tadasana ( palm tree pose )</li>
                      <li> Kati chakrasana ( Twisting pose )</li>
                      <li> Natrajasana ( lord shiva's dance pose ) </li>
                      <li>Titali asana ( half & full butterfly pose )</li>
                      <li> Marjari asana ( Cat stretch pose )</li>
                      <li> Shashankasana ( Moon pose )</li>
                      <li>Bhujangasana ( cobra pose )</li>
                    </ul>
                  </li>
                  <li>
                    Series of Pranayama
                    <ul>
                      <li>Nadi shodhna ( psychic network purification )</li>
                      <li> Kapal bhati</li>
                      <li>Bhramary </li>
                      <li> pranava with meditation</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={yoga3}
                  style={{ height: 500, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>* Second days</h1>
              <p>
                <ul>
                  <li>Series of few exercise for opening the joints of body</li>
                  <li>
                    Series of Asana
                    <ul>
                      <li>Tadasana ( palm tree pose )</li>
                      <li> Samakonasana ( right angle pose )</li>
                      <li> Dwikonasana ( double angle pose ) </li>
                      <li>Utthita lolasana ( swinging while standing pose )</li>
                      <li> Titali asana ( half & full butterfly pose )</li>
                      <li> Gomukhasana ( Cow's face pose )</li>
                      <li>. Chakki chalanasana (churning the mill)</li>
                    </ul>
                  </li>
                  <li>
                    Series of Pranayama
                    <ul>
                      <li> Nadi shodhana </li>
                      <li> Kapal bhati</li>
                      <li> Bhramari </li>
                      <li> Pranav with meditation</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={yoga9}
                  style={{ height: 500, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>* Third days</h1>
              <p>
                <ul>
                  <li>
                    {" "}
                    Series of few exercise for opening the joints of body
                  </li>
                  <li>
                    Series of Asana
                    <ul>
                      <li> Tadasana ( palm tree pose )</li>
                      <li> Dolasana ( pendulum pose )</li>
                      <li> Surya namaskara (salutations of the sun ) </li>
                      <li>Titali asana ( half & full butterfly pose )</li>
                      <li> Ardha Matsyendrasana ( half spinal twist )</li>
                      <li> Ushtrasana ( camel pose )</li>
                      <li>
                        Supta udarakarshanasana ( sleeping abdominal stretch
                        pose )
                      </li>
                    </ul>
                  </li>
                  <li>
                    Series of Pranayama
                    <ul>
                      <li> Nadi shodhana </li>
                      <li> Kapal bhati</li>
                      <li> Bhramari </li>
                      <li> Pranav with meditation</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={yoga11}
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

export default ExploreMajesticKhajurahoWithYoga;
