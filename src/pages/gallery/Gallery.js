import React from "react";
import { GalleryData } from "./GalleryData";
import GalleryProps from "./GalleryProps";
import "./gallery.css";

const Gallery = () => {
  return (
    <>
      <div>
        <div className="container">
          <div className="post-heading text-center">
            <h3 className="display-4 font-weight-bold">Memories</h3>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <hr className="w-50 mx-auto pb-5" />
          </div>
        </div>
        <div  className="main_container">
          {GalleryData.map((val, index) => {
            return (
              <GalleryProps
             
                key={index}
                imgsrc={val.imgsrc}
                place={val.place}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Gallery;
