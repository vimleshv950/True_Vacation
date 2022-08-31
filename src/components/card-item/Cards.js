import React from "react";
import "./Cards.styles.css";
import CardItem from "./CardItem";

import orchha1 from "../../assets/img/orchha-1.jpg";
import khajuraho5 from "../../assets/img/khajuraho-5.jpg";
import gwalior1 from "../../assets/img/gwalior-1.jpg";
import varanasi1 from "../../assets/img/varanasi-1.jpg";

import img1 from "../../assets/img/img-1.jpg";
import img2 from "../../assets/img/img-2.jpg";
import img3 from "../../assets/img/img-3.jpg";
import img5 from "../../assets/img/img-5.jpg";



function Cards() {
  return (
    <div className="cards">
      <div className="post-heading text-center">
        <h3 className="display-4 font-weight-bold">
          Check out these EPIC Destinations!
        </h3>
        <hr className="w-50 mx-auto pb-3" />
      </div>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={khajuraho5}
              text="   Khajuraho Bicycle Tour  "
              label="Khajuraho"
              path="/khajuraho"
            />
            <CardItem
              src={orchha1}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Orcha"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={gwalior1}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Gwalior"
              path="/"
            />
             <CardItem
              src={img1}
              text="Three-days Private Heritage Tour of Khajuraho & Orchha"
              label="Adventure"
              path="/"
            />
            <CardItem
              src={varanasi1}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Varanasi1"
              path="/"
            />
          
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img5}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Bhopal"
              path="/"
            />
             <CardItem
              src={img1}
              text="Three-days Private Heritage Tour of Khajuraho & Orchha"
              label="Adventure"
              path="/"
            />
            <CardItem
              src={img3}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Mandu"
              path="/"
            />
           
          </ul>
          <ul className="cards__items">
            <CardItem
              src={orchha1}
              text="Three-days Private Heritage Tour of Khajuraho & Orchha"
              label="Mystery"
              path="/"
            />
            <CardItem
              src={img1}
              text="Three-days Private Heritage Tour of Khajuraho & Orchha"
              label="Adventure"
              path="/"
            />
             <CardItem
              src={img1}
              text="Three-days Private Heritage Tour of Khajuraho & Orchha"
              label="Adventure"
              path="/"
            />
           
          </ul>
        </div>
        <button className="button w-50 mx-auto mb-5">
          <a href="/destination">Explore More</a>
        </button>
      </div>
    </div>
  );
}

export default Cards;
