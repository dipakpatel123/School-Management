
import React from "react";
import "../css/NavGallery.css"
import gallerydata from "./GalleryApi";
import "../Responsive/Rgallery.css"


const NavGallery = () => {
  return (
    <>

      <div className="nav_gallery">
        <h2 className="gheader">Gallery</h2>
        <div className="navgallery_card">

          {
            gallerydata.map((currtElement) => {
              return (
                <>
                  <div className="nanGallery_card">
                    <img src={`${currtElement.img}.png`} alt="" />

                  </div>
                </>
              )
            })
          }
        </div>

      </div>

    </>
  )
}


export default NavGallery;