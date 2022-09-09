import React from "react";
import "./carousel.css";
import slide1 from './../assets/slide_img/slide-1.webp'
import slide2 from './../assets/slide_img/slide-2.jpg'
import slide3 from './../assets/slide_img/slide-3.jfif'
import slide4 from './../assets/slide_img/slide-4.jfif'
import slide5 from './../assets/slide_img/slide-5.jpg'
import slide6 from './../assets/slide_img/slide-6.jpg'
import slide7 from './../assets/slide_img/slide-7.jpg'
import slide8 from './../assets/slide_img/slide-8.jfif'
import slide9 from './../assets/slide_img/slide-9.jfif'
import slide10 from './../assets/slide_img/slide-10.jfif'






const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
     
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src={slide1} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block img-fluid">
            <h1 className="text-gray-600">Make Travel Awesome</h1>
            <h5>The  world is a book and those who not travel  read only one page.</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={slide2} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src={slide3} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block img-fluid">
            <h1 className="text-gray-600">Plan a road trip</h1>
            <h5>Some beautiful paths can't be discovered without getting lost.</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={slide4} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Stress free vacation</h1>
            <h5>Adventures are the best way to learn.</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={slide5} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={slide6} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={slide7} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={slide8} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={slide9} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src={slide10} class="d-block w-100" alt="..." />
          <div class="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
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
