import React from "react";
import "./carousel.css";
import mumbai1 from "./../assets/img/mumbai-1.jpg";
import orchha3 from "./../assets/img/orchha-2.jpg";
import gwalior4 from "./../assets/img/gwalior-4.jpg";
import gwalior3 from "./../assets/img/gwalior-3.jpg";


const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
     
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src={mumbai1} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block img-fluid">
            <h1>Make Travel Awesome</h1>
            <h5>The  world is a book and those who not travel  read only one page.</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={orchha3} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block">
            <h1>Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src={gwalior4} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block img-fluid">
            <h1>Plan a road trip</h1>
            <h5>Some beautiful paths can't be discovered without getting lost.</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={gwalior3} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block">
            <h1>Stress free vacation</h1>
            <h5>Adventures are the best way to learn.</h5>
          </div>
        </div>
        
      </div>
        
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
