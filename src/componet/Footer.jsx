import React from "react";
import "../componet/css/Footer.css"
import "../componet/Responsive/Rfooter.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { NavLink } from "react-router-dom";

const Footer = ()=>{
    return (
        <>
            <footer className="Top-footer">
                    <div className="innerfooter1">
                    <div className="Foot_logo">
                     <img src="../src/componet/img/logo.png" alt="logo"  />
                        </div>
                        <div className="dic_footer1">
                            <p className="text1">great india school (0266)380060</p>
                            <p className="text2">info@greatindia@gmail.com</p>
                           

                        </div>

                    </div>
                    <div className="innerfooter2">
                        <div className="foot_nav">
                        <h3 className="innerfoot_header">Quick Links</h3>
                        <ul>
                        <NavLink to={"/"}><li>Home</li></NavLink>
                        <NavLink  to={"/gallery"}><li>Gallery</li></NavLink>      
                        <NavLink  to={"/teacher"}><li>Teachers</li></NavLink>      
                        <NavLink  to={"/about"}><li>About</li></NavLink>
                        <NavLink  to={"/contact"}><li>ContactUs</li></NavLink>                               
                        <NavLink  to={"/blog"}><li>Blogs</li></NavLink>
                        </ul>
                            
                    </div>
                        
                    </div>
                    <div className="innerfooter3">
                       
                        <div className="foot_nav">
                        <h3 className="innerfoot_header">Contact</h3>
                            <p>great india school</p>
                            <p>Sampige Main Road, Ahmedabad</p>
                            <p>Ahmedabad- 380060.</p>
                            <p>Phone No: 9313988170</p>
                            <p>Email - info@greatindia@gmail.com</p>


                        </div>

                    </div>
                    <div className="innerfooter4">
                       
                        <div className="Media_icon">
                        <h3 className="innerfoot_header">Media Sosial</h3>
                       <div className="icon">
                        <InstagramIcon className="icon_size" style={{color:"red"}}/> 
                        <FacebookIcon style={{color:"blue"}}/>
                        <XIcon style={{color:"black"}}/>

                       </div>

                        </div>

                    </div>
                     
                </footer>

                <hr></hr>

            <div className="bottom-footer">
                <h4>© 2024 the great india school </h4>
            </div>
        </>
    )
}

export default Footer;