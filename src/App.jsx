 import React from "react"
 import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
  import Home from "./componet/Home";
 import Footer from "./componet/Footer";
 import Headermain from "./componet/Headermain";
import NavAbout from "./componet/Navbar/NavAbout";
import ContactUs from "./componet/Navbar/ContactUs";
import NavBlog from "./componet/Navbar/NavBlog";
import NavGallery from "./componet/Navbar/NavGallery";
import NavTeachers from "./componet/Navbar/Navteacher";
import { BrowserRouter ,Routes, Route, useParams } from "react-router-dom";
// import { Loginc } from "@mui/icons-material";
import Register from "./componet/Navbar/Register";
import Login from "./componet/Navbar/Login";


//  import Blog from "./componet/Blog";
  


 const App = ()=>{
 
  
   return(
     <>
    
      <BrowserRouter>
        
      
        <Routes>
          <Route  path="/" element={<>
            <Headermain 
            display=""
            title="Home"
            header_disc ="" />
            <Home />
          </>}/>
        <Route  path="/about" element={<>
          <Headermain 
          display=""
            title="About"
            header_disc="" />
            <NavAbout />
        </>}/>
        <Route  path="/contact" element={<>
          <Headermain 
            display=""
            title="Contact Us"
            header_disc ="" />
            <ContactUs />
        </>}/>
        <Route  path="/blog" element={<>
          <Headermain 
            display=""
            title="Blog"
            header_disc ="Our school blog" />
            <NavBlog />
        </>}/>
        <Route path="/gallery" element={<>
        <Headermain 
          display="none"/>
        <NavGallery />
        </>} />
        <Route path="/teacher" element={<>
          <Headermain 
              display=""
              title="Our Best Facultys"
              header_disc="Our best teacher in  teaching with exprience "/>
              <NavTeachers />
        </>} />
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        </Routes>


        <Footer />
      </BrowserRouter>
    </>
  )
 }

 

export default App;
