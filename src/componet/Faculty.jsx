import React from "react";
import "../componet/css/Faculty.css"
// import "./custom.js";
import Slider from "react-slick";
 
 

//  import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
const Faculty = ()=>{
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
      };
    return(
        <>
        <div className="faculty_div">
        <div className="heading_faculty"> Our Best facultys</div>

       
        
        {/* <div className='multiple-items'>
        <img src="../src/componet/img/faculty1.png" alt="" className="aditing_img" />
        <img src="../src/componet/img/faculty2.png" alt="" className="aditing_img"/>
        <img src="../src/componet/img/faculty3.png" alt="" className="aditing_img"/>
        <img src="../src/componet/img/faculty4.png" alt="" className="aditing_img"/>
        <img src="../src/componet/img/faculty5.png" alt="" className="aditing_img"/>
        <img src="../src/componet/img/faculty5.png" alt="" className="aditing_img"/>
        <img src="../src/componet/img/faculty5.png" alt="" className="aditing_img"/>
      </div> */}

    
    <Slider {...settings}>
      <div className="inner_div" style={{width:"80%"}}>
      <img src="../src/componet/img/faculty1.png" alt="" className="aditing_img" />
      </div>
      <div style={{width: "200px"}}>
      <img src="../src/componet/img/faculty2.png" alt="" className="aditing_img"/>
      </div>
      <div style={{width: "200px"}}>
      <img src="../src/componet/img/faculty1.png" alt="" className="aditing_img"/>
      </div>
      <div style={{width: "200px"}}>
      <img src="../src/componet/img/faculty4.png" alt="" className="aditing_img"/>
      </div>
      <div style={{width: "200px"}}>
      <img src="../src/componet/img/faculty5.png" alt="" className="aditing_img"/>
      </div>
      <div >
      <img src="../src/componet/img/faculty2.png" alt="" className="aditing_img"/>
      </div>
    </Slider>

      
      

        </div>


    
        </>
    )
}

export default Faculty;