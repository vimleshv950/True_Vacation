import React from "react";
import "./Cards.styles.css";
import CardItem from "./CardItem";

import orchha1 from "../../assets/img/orchha-1.jpg";
import khajuraho5 from "../../assets/img/khajuraho-5.jpg";
import gwalior1 from "../../assets/img/gwalior-1.jpg";
import varanas1 from "../../assets/img/varanas-1.jpg";

import img1 from "../../assets/img/img-1.jpg";
import jaipur2 from "../../assets/img/jaipur-2.jpg";
import agra1 from "../../assets/img/agra-1.jpg";
import mandu from "../../assets/img/mandu.jpeg";

import orchha3 from "../../assets/img/orchha-3.jpg";
import img19 from "../../assets/img/img-19.jpg";
import mumbai1 from "../../assets/img/mumbai-1.jpg";
import img58 from "../../assets/img/img-58.jpeg";
import bhojpur2 from "../../assets/img/bhojpur-2.jpg";
import badhwgah from "../../assets/img/badhwgah.jpg";
import sadhu2 from "../../assets/img/sadhu-2.jpg";
import img24 from "../../assets/img/img-24.jpg";
import img13 from "../../assets/img/img-13.jpg";
// import bhojpur2 from "../../assets/img/bhojpur-2.jpg";
import img35 from "../../assets/img/img-35.jpg";

import taj6 from "../../assets/img/taj-6.jpg";

function Cards() {
  return (
    <section class="py-5">
      <div class="container py-4">
        <div className="cards">
          <div className="post-heading text-center">
            <h2 className="text-uppercase mb-4 font-weight-bold">
              Check out these <span> EPIC </span> Destinations!
            </h2>

            <hr className="w-50 mx-auto pb-3" />
          </div>

          <div className="cards__container">
            <div className="cards__wrapper">
              <ul className="cards__items">
                <CardItem
                  src={khajuraho5}
                  text="The Khajuraho Group of Monuments are a group of Hindu and Jain temples..."
                  label="KHAJURAHO"
                  path="/weekendspecialkhajurahotour"
                />
                <CardItem
                  src={orchha1}
                  text="The historic town of Orchha, nestled on the banks of river Betwa, was founded in the 16th century..."
                  label="ORCHHA"
                  path="/OrchhaKhajurahoTour"
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src={gwalior1}
                  text="Gwalior holds an important place in the heart of incredible India... "
                  label="GWALIOR"
                  path="/gwaliororchhakhajuraho"
                />
                <CardItem
                  src={jaipur2}
                  text="India's famous Golden Triangle, a popular tourist circuit..."
                  label="JAIPUR"
                  path="/goldentriangletour"
                />
                <CardItem
                  src={varanas1}
                  text="Varanasi is one of the oldest living cities in the world..."
                  label="VARANASI"
                  path="/goldentringlewithcentralindiagoa"
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src={agra1}
                  text="Agra is a city on the banks of the river Yamuna in northern..."
                  label="AGRA"
                  path="/goldentriangletour"
                />
                <CardItem
                  src={img1}
                  text="Delhi has great historical place as it was home to powerful people, Pandavas... "
                  label="DELHI"
                  path="/goldentriangletour"
                />
                <CardItem
                  src={mandu}
                  text="Parmara kings like Munja and Bhoja also had a great influence in Mandu and Munja Tal... "
                  label="MANDU"
                  path="/turevacationmptour"
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src={orchha3}
                  text="Thr"
                  label="JHANSI"
                  path="/orchhakhajurahotour"
                />
                <CardItem
                  src={img19}
                  text="Thre"
                  label="CHITRAKOOT"
                  path="/divinecentralindiatour"
                />
                <CardItem
                  src={mumbai1}
                  text="Thre"
                  label="MUMBAI"
                  path="/goldentringlewithcentralindiagoa"
                />
              </ul>
              <ul className="cards__items">
                <CardItem
                  src={img58}
                  text="Three-days Private Heritage Tour of Khajuraho & Orchha"
                  label="GOA"
                  path="/goldentringlewithcentralindiagoa"
                />
                <CardItem
                  src={bhojpur2}
                  text="Three-days Private Heritage Tour of Khajuraho & Orchha"
                  label="BHOPAL"
                  path="/turevacationmptour"
                />
                <CardItem
                  src={badhwgah}
                  text="Three-days Private Heritage Tour of Khajuraho & Orchha"
                  label="BANDHAVGARH"
                  path="/medievalculturewithwildlifetour"
                />
              </ul>
              <ul className="cards__items">
              <CardItem
                src={sadhu2}
                text="Three-days Private Heritage Tour of Khajuraho & Orchha"
                label="SARNATH "
                path="/divinecentralindiatour"
              />
              <CardItem
                src={img24}
                text="Three-days Private Heritage Tour of Khajuraho & Orchha"
                label="PRAYAGRAJ "
                path="/divinecentralindiatour"
              />

              <CardItem
                src={img13}
                text="Three-days Private Heritage Tour of Khajuraho & Orchha"
                label="SANCHI "
                path="/turevacationmptour"
              />
              </ul>
              <ul className="cards__items">
              <CardItem
                src={bhojpur2}
                text="Three-days Private Heritage Tour of Khajuraho & Orchha"
                label="BHOJPUR "
                path="/turevacationmptour"
              />
              <CardItem
                src={img35}
                text="Three-days Private Heritage Tour of Khajuraho & Orchha"
                label="INDORE "
                path="/turevacationmptour"
              />
              <CardItem
                src={taj6}
                text="Experience Football on Top of the Himilayan Mountains"
                label="AGRA"
                path="/goldentringlewithcentralindiagoa"
              />
              </ul>
            </div>
            <button className="button w-50 mx-auto mb-5">
              <a href="/destination">Explore More</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
