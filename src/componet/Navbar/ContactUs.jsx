import React from "react";
import "../css/ContactUs.css"
import "../Responsive/RContactus.css"

const ContactUs = ()=>{
    return(
        <>
        <div className="blank_divc">
        <div className="form">
    <div class="row">
  <div className="name_Email_filed" >
  <div class="col">
  <label form="">Name</label>
    <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
  <label form="">Email</label>
    <input type="email" className="form-control" placeholder="diapa3000@gmail.com" aria-label="Last name"/>
  </div>
  </div>
  <br></br>
  <div class="col1">
  <label form="">To Help</label>
    <input type="email" className="form-control" placeholder="help..." aria-label="Last name"/>
  </div>
  <br></br>
  <div class="textarea">
  <label for="rr">Messeage</label>
    <textarea className="form-control" placeholder="...messeage" id="rr"/>
  </div>
  <br></br>
  <div className="btn">
  <button class="btn btn-primary" style={{width:"200px",outline:"none"}}>ContactUs</button>
  </div>
  
</div>
</div>
      <div className="map">
     
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.389546924463!2d72.49382797477193!3d23.082831614077794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ce9f8b3c00f%3A0xd4e681d1f2ca76ab!2sSal%20Engineering%20And%20Technical%20Institute.%20Class%20Room%2C%20Sola%2C%20Ahmedabad%2C%20Gujarat%20380060!5e0!3m2!1sen!2sin!4v1715769939882!5m2!1sen!2sin" width="700" height="550" ></iframe>
      </div>
 
</div>
        </>
    )
}




export default ContactUs;