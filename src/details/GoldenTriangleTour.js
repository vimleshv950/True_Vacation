import React from "react";
import "./details.css";
import { useNavigate } from "react-router-dom";
import amerelephant from "./../assets/img/amer-elephant.jpg";
import jaipur3 from "./../assets/img/jaipur-3.jpg";
import jaipur2 from "./../assets/img/jaipur-2.jpg";

import amer from "./../assets/img/amer.jpg";
import hawamahal1 from "./../assets/img/hawa-mahal-1.jpg";
import fatehpursikri2 from "./../assets/img/fatehpur-sikri-2.jpg";
import taj5 from "./../assets/img/taj-5.jfif";
import img1 from "./../assets/img/img-1.jpg";
import img2 from "./../assets/img/img-2.jpg";
import img55 from "./../assets/img/img-55.jpg";


const GoldenTriangleTour = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="detail_section py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">Golden Triangle Tour 7 Days </h2>
          <p className="text-sm mb-5 text-gray-600">Delhi - Agra - Jaipur</p>
          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={amerelephant}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
            <div className="main_img col-md-6">
              <img
                src={amer}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className="content col-12 col-md-8">
              <h1>Overview</h1>
              <p>
              Planning to experience the breathtaking and magnificent beauty of three Indian cities- Delhi-Agra-Jaipur is a wonderful idea. It will be an unforgettable tour of your life as you will capture the time spent by the Mughals of India. The majestic tombs, palaces, buildings built in the Mughal period bear witness to the precious time spent by the Indian kings. Pack your bags and go for the 7 days Golden Triangle Tour.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={hawamahal1}
                  style={{height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day-1 : Arrive in Delhi</h1>
              <p>
              Arrive in Delhi in the evening where you'll be greeted by our representative. From there, you will be conveyed to your hotel for an overnight stay.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={jaipur3}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day-2 : Delhi</h1>
              <p>
              After having breakfast at your hotel, you will be guided through a magnificent tour of Delhi. In Golden triangle tour 7 days, Delhi's most famous destinations will be visited including the Jama Masjid, Red Fort, Raj Ghat, Humayun's Tomb, QutubMinar and Lotus Temple. Quick glances of India Gate, RashtrapatiBhawan, Parliament House and other beautiful parts of Delhi will also be seen. After a full day of delightful sightseeing around Delhi, you'll be dropped off at the hotel in Delhi for another overnight stay.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={jaipur2}
                  style={{ height: 400, width: 350}}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>


          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day-3 : Delhi–Agra: 205 km (3 hrs) By Yamuna Expressway</h1>
              <p>
              In the third day of this tour, you'll be introduced to Agra's beauty. After having breakfast at the hotel, a 205 km drive will be done to Agra, where you will reach in approximately 3 hours. After reaching Agra, you will be checked in Hotel Itmadualla (also known as Baby Taj), with the help of our representative.
              </p>
              <p>
              Popularly known as 'the city of love,' Agra is host to one of the seven wonders of the world, the magnificent Taj Mahal. After checking in you will have a few hours to relax at the hotel. In the evening, you'll be guided to take a glimpse of Taj Mahal and at its sheer beauty at sunset. The stay will be arranged in the same hotel in Agra.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={taj5}
                  style={{ height: 400, width: 350}}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day-4 : Visit Agra Monuments</h1>
              <p>
              In the morning, at sunrise, a visit will be paid to the most beautiful mausoleum in the world, the Taj Mahal built by Mughal Emperor Shah Jahan as a memorial to his queen Mumtaz Mahal. The white marble epitome of beauty looks stunning in the early morning light. After visiting the Taj Mahal, various other places including Sikandra (Akbar's Tomb), Agra Fort and local factories of Agra willbe visited. After a day of sightseeing, you will be dropped to the hotel to stay there overnight.
              </p>
         
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={img1}
                  style={{ height: 400, width: 350}}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day-5 : Jaipur: 249 kms/150 miles (5 hours) by Car</h1>
              <p>
              After having breakfast, a 5-hour drive to Jaipur will be done; you will visit Fatehpur Sikri. It is a city just west of Agra, founded in the year 1569 by Mughal emperor, Akbar. The city is one of the best-preserved examples of Mughal architecture in India. After reaching Jaipur, you will be checked in a hotel.
              </p>
              <p>After resting a little, the sightseeing will begin in the afternoon starting with JantarMantar, which has a collection of nineteen architectural astronomical instruments, built by the Rajput king Sawai Jai Singh in 1734, and Hawa Mahal (the palace of winds). In the evening, nearby markets famous for jewellery and stalls can be explored.</p>
         
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={img2}
                  style={{ height: 400, width: 350}}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day-6 : Delhi - 272km/170 miles (5 hours)</h1>
              <p>After having breakfast at the hotel, you will be guided to the Amer Fort in Jaipur, built by Maharaja Man Singh in the 16th century. It is famous for its gorgeous Sheesh Mahal. After this, Nahargarh and Jaigarh Fort will be visited. Later, you will be driven back to Delhi where you will stay overnight.</p>
         
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={img55}
                  style={{ height: 400, width: 350}}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day-7 : Back To Delhi</h1>
              <p>After having breakfast at the hotel, you will catch the international flight back to your destination. So your 6 Nights/7 Days Golden Triangle Tour End Here.</p>
         
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={fatehpursikri2}
                  style={{ height: 400, width: 350}}
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

export default GoldenTriangleTour;
