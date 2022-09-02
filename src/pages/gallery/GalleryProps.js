import React from "react";
import "./gallery.css";
// import img1 from "./../../assets/img/img-1.jpg";

const GalleryProps = (props) => {
  console.log(props);
  return (
    <> 
   
      <section className="main_container">
        <div className="container">
          <div className="row">
            <div className=" col-md-4 col-sm-6 col-12">
              <div className="item">
                <img src={props.imgsrc} className="img-thumbnail" />
                <h4 className="sub_heading">{props.place}</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryProps;
