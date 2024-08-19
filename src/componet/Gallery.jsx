import React from "react";
import "../componet/css/Gallery.css"


const Gallery = ()=>{
    return(
        <>

    <div className="main_gallery">
        <h1 className="heading_gallery">Gallery</h1>
        <div className="gallery_card">
             <img src="../src/componet/img/Gallery1.png" alt=""/>
             <img src="../src/componet/img/Gallery2.png" alt="" />
             <img src="../src/componet/img/Gallery3.png" alt="" />
             <img src="../src/componet/img/Gallery4.png" alt="" />
             <img src="../src/componet/img/Gallery5.png" alt="" />
             <img src="../src/componet/img/Gallery6.png" alt="" />
        </div>
        <div className="btn_gallery">
        {/* <button className="btn btn-primary">Contact us</button> */}
        </div>
    </div>
        </>
    )
}

export default Gallery;