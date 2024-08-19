import React from "react";
 import "../componet/css/Home.css"
import {NavLink } from "react-router-dom";
const Headermain = (props)=>{

    return(
        <>
            <div className="main-header">
                <div className="top-header" style={{display:`${props.display}`}}>

                </div>
                <div className="botom-header">
                     <div className="main-nav">
                        <div className="logo">
                            <img src="../src/componet/img/logo.png" alt="logo"  />
                        </div>
                        <div className="navbar">
                            
                                 
                        <NavLink to={"/"}>Home</NavLink>
                        <NavLink  to={"/gallery"}>Gallery</NavLink>      
                        <NavLink  to={"/teacher"}>Teachers</NavLink>      
                        <NavLink  to={"/about"}>About</NavLink>
                        <NavLink  to={"/contact"}>Contact Us</NavLink>                               
                        <NavLink  to={"/blog"}>Blogs</NavLink>
                        <NavLink to={"/login"}>Login</NavLink>
                        <NavLink  to={"/register"}>Register</NavLink> 
                                
                            
                      
                            
                        </div>
                        </div>
                        <div className="header_disc"
                        style={{display:`${props.display}`}}>
                            <h4>{props.title}</h4>
                            <h3 style={{width:"600px", margin: "0 auto",  marginTop:"25px", fontSize:"22px"}}>{props.header_disc} </h3>
                          
                        </div>
                </div>

            </div>
                
        </>
    )
}

 


export default Headermain;