import React from "react";
import "./gallery.css";
import img1 from './../assets/img/img-1.jpg'
import img2 from './../assets/img/img-2.jpg'
import img3 from './../assets/img/img-3.jpg'
import img4 from './../assets/img/img-4.jpg'
import img5 from './../assets/img/img-5.jpg'
import img6 from './../assets/img/img-6.jpg'
import img7 from './../assets/img/img-7.jpg'
import img8 from './../assets/img/img-8.jpg'
import img9 from './../assets/img/img-9.jpg'
import img10 from './../assets/img/img-10.jpg'
import img11 from './../assets/img/img-11.jpg'
import img12 from './../assets/img/img-12.jpg'
import img13 from './../assets/img/img-13.jpg'
import img14 from './../assets/img/img-14.jpg'
import img15 from './../assets/img/img-15.jpg'
import img16 from './../assets/img/img-16.jpg'
import img17 from './../assets/img/img-17.jpg'
import img18 from './../assets/img/img-18.jpg'

const Gallery = () => {
  return (
    <>
      <div className="py-5 ">
      <div className="container py-4">
          <h2 class="text-uppercase lined mb-4">Memories</h2>
         
          {/* <hr className="w-50 mx-auto" /> */}
        

          
        <div className="row  gx-5">
          <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img1} alt="" className="img-fluid gallery_img"/>
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img2} alt="" className="img-fluid gallery_img "/>
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img3} alt="" className="img-fluid gallery_img "/>
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img4} alt="" className="img-fluid gallery_img "/>
            </figure>
          </div>
          {/* <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img5} alt="" className="img-fluid"/>
            </figure>
          </div> */}
          <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img6} alt="" className="img-fluid gallery_img gallery_img"/>
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img7} alt="" className="img-fluid gallery_img gallery_img"/>
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img8} alt="" className="img-fluid gallery_img gallery_img"/>
            </figure>
          </div>
          {/* <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img9} alt="" className="img-fluid"/>
            </figure>
          </div> */}
          <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img10} alt="" className="img-fluid gallery_img"/>
            </figure>
          </div>
          <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img11} alt="" className="img-fluid gallery_img"/>
            </figure>
          </div>
          {/* <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img12} alt="" className="img-fluid"/>
            </figure>
          </div> */}
          <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img13} alt="" className="img-fluid gallery_img"/>
            </figure>
          </div>
          {/* <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img14} alt="" className="img-fluid"/>
            </figure>
          </div> */}
          {/* <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img15} alt="" className="img-fluid"/>
            </figure>
          </div> */}
          <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img16} alt="" className="img-fluid gallery_img"/>
            </figure>
          </div>
          {/* <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img17} alt="" className="img-fluid"/>
            </figure>
          </div> */}
          {/* <div className="col-md-4 col-10 mx-auto">
            <figure>
              <img src={img18} alt="" className="img-fluid"/>
            </figure>
          </div> */}
        </div>
      </div>
      </div>
    </>
  );
};

export default Gallery;
