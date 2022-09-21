import React from "react";
import "./details.css";
import { useNavigate } from "react-router-dom";
import mumbai1 from "./../assets/img/mumbai-1.jpg";
import gwalior3 from "./../assets/img/gwalior-3.jpg";
import orchha8 from "./../assets/img/orchha-8.jpg";
import gwalior4 from "./../assets/img/gwalior-4.jpg";
import jayvishalpalace1 from "./../assets/img/jayvishal-palace-1.jpg";
import betwa from "./../assets/img/betwa.jpg";
import khajuraho20 from "./../assets/img/khajuraho-20.jpg";
import khajuraho29 from "./../assets/img/khajuraho-29.jpg";
import img9 from "./../assets/img/img-9.jpg";

const GwaliorOrchhaKhajuraho = () => {
  const navigate = useNavigate();
  return (
    <>
      <section className="detail_section py-5">
        <div className="container py-4">
          <h2 className="text-uppercase lined mb-4">
            Mumbai - gwalior - khajuraho tour
          </h2>
          <p className="text-sm mb-5 text-gray-600"> 06 - 07 days </p>
          <div className="row mx-auto mb-5">
            <div className="main_img col-12 col-md-6">
              <img
                src={mumbai1}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
            <div className="main_img col-md-6">
              <img
                src={gwalior3}
                className="img-fluid"
                alt="khajuraho"
                style={{ height: 400 }}
              />
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className="content col-12 col-md-8">
              <h1>Day-1</h1>
              <p>
                Mumbai - Gwalior (2N) On arrival at Gwalior airport / railway
                station, meet our representative who will be there for your
                welcome, will transfer you to the hotel. Gwalior is one of the
                most incredible and Historical cities of India located in Madhya
                Pradesh state of India. It is founded by the chieftain Surajpal.
                Evening free for leisure. Stay at Hotel. (D){" "}
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={gwalior4}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day-2</h1>
              <p>
                Gwalior City Tour We will start our day tour by visiting the
                Gwalior fort, one of the largest forts in India. Build in the
                8thcentury by Man Singh Tomar, this hill fort comprises of two
                main palaces, a defensive structure, Man Mandir and Gurjari
                Mahal. After exploring Gwalior's beautiful hill fort, we will
                proceed to visit the famous Vishnu temple and Gurudwara Data
                Bandi Chhor is the memorial of the 6th Sikh Guru Hargobind
                Saheb. Afternoon Visit Sun Temple, which is one of the
                spectacular shrines and an architectural wonder of Gwalior.
                Evening proceed to very beautiful "Jai Vilas Palace". Mejor part
                of the palace now the SCINDIA MUSEUM. Back to the hotel. (B&D)
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={jayvishalpalace1}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>
          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day-3</h1>
              <p>
                Gwalior - Orchha (2N) Today after having breakfast proceed to
                Orchha, which lies on the Betwa River. On the way visit very
                beautiful Dhatia Palace and Shri Pitambra Peetha. On arrival to
                Orchha, chek in your hotel and in the evening enjoy Light and
                Sound show. Stay at Orchha. (B&D) MINI MADHY PRADESH (Gwalior -
                Orchha - Khajuraho)
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
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day-4</h1>
              <p>
                Orchha City Tour (2N) After having breakfast visit the popular
                temples in Orchha like such as the Lakshmi Narayan Temple and
                Chaturbhuj Temple. The ancient temples of Orchha were built in
                the 16th and 17th century by Bundela rulers. Visit Orchha fort.
                In the evening visit very famous Ram Raja Temple and also enjoy
                Evining Aarti. You can spend evening time on the bank of River
                Betwa.One can also enjoy boating. Evening free for leisure. Stay
                at Hotel. (D)
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={betwa}
                  style={{ height: 400, width: 350 }}
                  alt="khajuraho"
                />
              </div>
            </div>
          </div>

          <div className="row mx-auto mb-4">
            <div className=" content col-12 col-md-8">
              <h1>Day-5</h1>
              <p>
                Orchha - Khajuraho Proceed to Khajuraho. On the way visit
                Dhubela Museum / Maharaja Chhatrasal Museum. Which has
                collection of Jaina images. It also desplays the Garments,
                Weapons and Paintings of Bundela Kings. Enjoy evening with Light
                and Sound show in the front of very beautifull Temples of
                Khajuraho. Back to the hotel. (B&D)
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
              <h1>Day-6</h1>
              <p>
                Khajuraho Sightseeing (2N) The Khajuraho group of Monuments are
                a group of Hindu and Jain Temples. They are UNESCO World
                Heritage Site. Most Khajuraho temples were built between 885 AD
                and 1050 AD by the Chadela dynasty. Historical records note that
                the Khajuraho temple site had 85 temples by the 12th century,
                spread over 20 square kilometers, only about 25 temples have
                survived. After having lunch visit Panna National which was
                declared as one of the Tiger reserves of India in 1994/95 and
                placed under the protection of Project Tiger.
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
              <h1>Day-7</h1>
              <p>Departure It’s time now to say goodbye.</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="sub_img">
                <img
                  src={img9}
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

export default GwaliorOrchhaKhajuraho;
