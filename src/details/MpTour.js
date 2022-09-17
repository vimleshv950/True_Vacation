import React from "react";
import "./details.css";
import { useNavigate } from "react-router-dom";

import pic27 from "./../assets/img/pic-27.jpeg";
import pic59 from "./../assets/img/pic-59.jpeg";
import pic60 from "./../assets/img/pic-60.jpeg";
import khajuraho8 from "./../assets/img/khajuraho-8.jpg";
import mandu from "./../assets/img/mandu.jpeg";
import khajuraho10 from "./../assets/img/khajuraho-10.jpg";
import khajuraho20 from "./../assets/img/khajuraho-20.jpg";
import khajuraho6 from "./../assets/img/khajuraho-6.jpg";
import gwalior2 from "./../assets/img/gwalior-2.jpg";
import orchha3 from "./../assets/img/orchha-3.jpg";
import orchha5 from "./../assets/img/orchha-5.jpg";

const MpTour = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="detail_section py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">MP Tour</h2>
          <p className="text-sm mb-5 text-gray-600">(08 Nights & 09 Days )</p>
          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={khajuraho10}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
            <div className="main_img col-md-6">
              <img
                src={pic60}
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
                On Arrival Gwalior Airport / Railway station meet our
                representative after warm Welcome , proceed your Hotel . relax
                than afternoon proceed for the viist Gwalior Fort on of the
                Largest fort india built in 8th century by Mansingh Tomar , The
                fort has been administered by a number of different rulers in
                its history, The present-day fort consists of a defensive
                structure and two main palaces, "Man Mandir" and Gujari Mahal,
                built by Tomar Rajput ruler Man Singh Tomar (reigned 1486–1516
                CE), the latter one for his wife, Queen Mrignayani. After
                exploring Gwalior fort , proceed to visit Vishnu Temple and
                Gurudwara Data bandi Chhor I is the memorial of the 6th Sikh
                Guru Hargobind Saheb . after visit back to Hotel . Overnight
                stay in Gwalior .
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={gwalior2}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 2: Gwalior </h1>
              <p>
                After breakfast proceed to Mitaoli .(38 km 1 h ) from Gwalior .
                visit Mitaoli, Mitaoli is a village where the popular Chausath
                Yogini Temple situated .in Morena district in the Indian state
                of Madhya Pradesh. It is one of the few well-preserved Yogini
                temples in India. The temple is formed by a circular wall with
                65 chambers, apparently for 64 yoginis and the goddess Devi, and
                an open mandapa in the centre of a circular courtyard, sacred to
                Shiva. Then proceed to visit padavali.
              </p>
              <p>
                The notable Padavali fortress was built in the 18th century by
                the Jat Ranas rulers of Dhaulpur. Graciously guarded by a lion
                and lioness, the fort also has a temple that once served as a
                divine place to worship Lord Shiva. Before return to Gwalior
                visit Bateshwa temple . than Back to Gwalior . overNight stay in
                Gwalior.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={pic59}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 3: Gwalior – Datia – Orchha </h1>
              <p>
                Today after having breakfast proceed to Orchha, which lies on
                the Betwa River. On the way visit very beautiful Dhatia Palace
                and Shri Pitambra Peetha. On arrival to Orchha, chek in your
                hotel and in the evening enjoy Light and Sound show.over Night
                Stay at Orchha.
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
              <h1>Day :4 Orchha </h1>
              <p>
                After having breakfast visit the popular temples in Orchha like
                such as the Lakshmi Narayan Temple and Chaturbhuj Temple. The
                ancient temples of Orchha were built in the 16th and 17th
                century by Bundela rulers. Visit Orchha fort. In the evening
                visit very famous Ram Raja Temple and also enjoy Evining Aarti.
                You can spend evening time on the bank of River Betwa.One can
                also enjoy boating. Evening free for leisure. Over Night Stay at
                Hotel.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={orchha5}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day :5 Orchha – Dhubela – khajuraho </h1>
              <p>
                After having Breakfast Proceed to Khajuraho. In route visit
                Dhubela Museum / Maharaja Chhatrasal Museum. Which has
                collection of Jaina images. It also desplays the Garments,
                Weapons and Paintings of Bundela Kings. Enjoy evening with Light
                and Sound show in the front of very beautifull Temples of
                Khajuraho. Back to the hotel.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho20}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day 6: Khajuraho </h1>
              <p>
                After Having Breakfast Proceed to visit khajuraho Group of
                Temples . The Khajuraho group of Monuments are a group of Hindu
                and Jain Temples. They are UNESCO World Heritage Site. Most
                Khajuraho temples were built between 885 AD and 1050 AD by the
                Chadela dynasty. Historical records note that the Khajuraho
                temple site had 85 temples by the 12th century, spread over 20
                square kilometers, only about 25 temples have survived. After
                having lunch visit Panna National which was declared as one of
                the Tiger reserves of India in 1994/95 and placed under the
                protection of Project Tiger. Return to khajuraho . overnight
                stay in khajuraho .
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={khajuraho6}
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
                It’s time now to say goodbye. After Breakfast . you will be
                Dropped at the khajuraho Airport/ Khajuraho Railway Station
                Let’s stay in touch with each other through email, phone,
                WhatsApp, Facebook, Instagram and meet again on yet another
                memorable tour. See you all!!
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

export default MpTour;
