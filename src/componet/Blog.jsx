import React from "react";
import "../componet/css/Blog.css"


const Blog = ()=>{
    return(
        <>

        <h3 className="title">Blogs</h3>
            <div className="blog_div">
           
            <div className="blog_card">
                <div className="blog_card1">
                    <div className="card_info">
                  <img src="../src/componet/img/blog1.png"  alt="" style={{height:"84.48px", width:"84.48px",borderRadius:"100px"}}/>
                  <h4>Fasilitas</h4>
                  <p>Lorem ipsum dolor sit amet adipcingaqua lorem ipsum.</p>
                  </div>
                </div>
                
                <div className="blog_card2">
                <div className="card_info">
                  <img src="../src/componet/img/blog2.png" alt="" style={{height:"84.48px", width:"84.48px",borderRadius:"100px"}}/>
                  <h4>Fasilitas</h4>
                  <p>Lorem ipsum dolor sit amet adipcingaqua lorem ipsum.</p>
                  </div>
                </div>

                <div className="blog_card3">
                <div className="card_info">
                  <img src="../src/componet/img/blog3.png"  alt="" style={{height:"84.48px", width:"84.48px",borderRadius:"100px"}}/>
                  <h4>Fasilitas</h4>
                  <p>Lorem ipsum dolor sit amet adipcingaqua lorem ipsum.</p>
                  </div>
                </div>
                </div>
                </div>
        </>
    )
}

export default Blog;