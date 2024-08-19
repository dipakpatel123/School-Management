import React from "react";
import Blog from "./Blog";
import Faculty from "./Faculty";
import Gallery from "./Gallery";
import "../componet/Responsive/Rhome.css"
 
 
import SubHeader from "./SubHeader";

const Home = ()=>{

    return(
        <>
           
            <SubHeader /> 
            <Blog />
            <Faculty />
            <Gallery />
        </>
    )
    
}

export default Home;