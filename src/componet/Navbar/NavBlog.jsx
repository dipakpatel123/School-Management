import React from "react";
import "../css/NavBlog.css";
import "../Responsive/Rblog.css"


const NavBlog = () => {
     return (
          <>
               <section className="blog_sec">
                    <div className="blog_t">
                         <h1 style={{ marginTop: "30px", textAlign: "center", marginBottom: "15px", fontSize: "40px" }}>Blog</h1>
                    </div>
                    <div className="blog_card">
                         <div className="bcard">
                              <div className="card_img">
                                   <img src="../src/componet/img/library-1147815_1280.jpg" alt="" />
                              </div>
                              <div className="card_dic">
                                   <h4>Kegiatan Belajar Mengajar di Rumah 2020</h4>
                                   <p>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span style={{ color: "blue" }}>Read More...</span></p>
                              </div>
                         </div>
                         <div className="bcard">
                              <div className="card_img">
                                   <img src="../src/componet/img/football-3715881_1280.jpg" alt="" />
                              </div>
                              <div className="card_dic">
                                   <h4>Kegiatan Belajar Mengajar di Rumah 2020</h4>
                                   <p>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span style={{ color: "blue" }}>Read More...</span></p>
                              </div>
                         </div>
                         <div className="bcard">
                              <div className="card_img">
                                   <img src="../src/componet/img/library-1147815_1280.jpg" alt="" />
                              </div>
                              <div className="card_dic">
                                   <h4>Kegiatan Belajar Mengajar di Rumah 2020</h4>
                                   <p>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span style={{ color: "blue" }}>Read More...</span></p>
                              </div>
                         </div>
                    </div>

                    <div className="secblog_card">
                         <div className="secblog_img">
                              <img src="../src/componet/img/children-876543_1280.jpg" alt=""/>
                         </div>
                         <div className="secblog_dic">
                              <h4>Kegiatan Belajar Mengajar dirumah</h4>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quis lobortis lorem. Quisque mattis felis augue. Quisque sed elit eget ante faucibus blandit facilisis ac nibh. </p>
                             <div style={{display:"flex", justifyContent:"center"}}> <button className="btn btn-primary">Read more</button></div>
                         </div>
                    </div>



                    <div className="thirdblog_card">

                         <div className="blog_card">
                              <div className="bcard">
                                   <div className="card_img">
                                        <img src="../src/componet/img/library-1147815_1280.jpg" alt="" />
                                   </div>
                                   <div className="card_dic">
                                        <h4>Kegiatan Belajar Mengajar di Rumah 2020</h4>
                                        <p>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span style={{ color: "blue", cursor: "pointer" }}>Read More...</span></p>
                                   </div>
                              </div>
                              <div className="bcard">
                                   <div className="card_img">
                                        <img src="../src/componet/img/football-3715881_1280.jpg" alt="" />
                                   </div>
                                   <div className="card_dic">
                                        <h4>Kegiatan Belajar Mengajar di Rumah 2020</h4>
                                        <p>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span style={{ color: "blue" }}>Read More...</span></p>
                                   </div>
                              </div>
                              <div className="bcard">
                                   <div className="card_img">
                                        <img src="../src/componet/img/Gallerynav3.png" alt="" />
                                   </div>
                                   <div className="card_dic">
                                        <h4>Kegiatan Belajar Mengajar di Rumah 2020</h4>
                                        <p>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span style={{ color: "blue" }}>Read More...</span></p>
                                   </div>
                              </div>
                              <div className="bcard">
                                   <div className="card_img">
                                        <img src="../src/componet/img/school-417612_1280.jpg" alt="" />
                                   </div>
                                   <div className="card_dic">
                                        <h4>Kegiatan Belajar Mengajar di Rumah 2020</h4>
                                        <p>Lorem ipsum dolor sit amet adipcing ipsum dolor sit amet adipcing aqua lorem <span style={{ color: "blue" }}>Read More...</span></p>
                                   </div>
                              </div>
                         </div>
                    </div>


                    <div className="post">
                    <div className="post_t">
                         <h2>Resent Post</h2>
                         </div>
                         <div className="required">
                              <p>React js developer required</p>
                              <p>PHP developer required</p>
                              <p>Fultter developer required</p>
                              <p>HTML&CSS&JavaScript developer required</p>
                              <p>Java developer required</p>
                         </div>
                    </div>

               </section>
 
          </>
     )
}

export default NavBlog;