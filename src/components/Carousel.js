import React from "react";
import "./carousel.css";
import slide1 from './../assets/slide_img/slide-1.jpg'
import slide2 from './../assets/slide_img/slide-2.jpg'
import slide3 from './../assets/slide_img/slide-3.jpg'
import slide4 from './../assets/slide_img/slide-4.jfif'
import slide5 from './../assets/slide_img/slide-5.jpg'
import slide6 from './../assets/slide_img/slide-6.jpg'
import slide7 from './../assets/slide_img/slide-7.jpg'
import slide8 from './../assets/slide_img/slide-8.jpg'
import slide9 from './../assets/slide_img/slide-9.jpg'
import slide10 from './../assets/slide_img/slide-10.jpg'
import slide11 from './../assets/slide_img/slide-11.jpg'


 



const Carousel = () => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
     
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={slide1} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block img-fluid">
            <h1 className="text-gray-600">Make Travel Awesome</h1>
            <h5>The  world is a book and those who not travel  read only one page.</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slide2} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
       
        <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="2000">
          <img src={slide2} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block img-fluid">
            <h1 className="text-gray-600">Plan a road trip</h1>
            <h5>Some beautiful paths can't be discovered without getting lost.</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slide3} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Stress free vacation</h1>
            <h5>Adventures are the best way to learn.</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slide4} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Make Travel Awesome</h1>
            <h5>The  world is a book and those who not travel  read only one page.</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slide10} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slide5} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Plan a road trip</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slide6} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Stress free vacation</h1>
            <h5>Adventures are the best way to learn.</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slide7} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slide8} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Plan a road trip</h1>
            <h5>Some beautiful paths can't be discovered without getting lost.</h5>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slide9} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Travel well on a budget</h1>
            <h5>The journey of a thousand miles beginns with a single step.</h5>
          </div>
        </div>
       
        <div className="carousel-item" data-bs-interval="2000">
          <img src={slide11} className="d-block w-100" alt="..." />
          <div className="heading-carousel carousel-caption d-none d-md-block">
            <h1 className="text-gray-600">Plan a road trip</h1>
            <h5>Some beautiful paths can't be discovered without getting lost.</h5>
          </div>
        </div>
        
      </div>
        
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
