import React from "react";
import "../componet/css/SubHeader.css"

const SubHeader = ()=>{
    return(
        <>
            <div className="subheader">
            <div className="inner_subheader">
                <div className="subheader_img">
                     <img src="../src/componet/img/teacher_principal.jpg"  alt="teacher"  />
                </div>

                <div className="subheader_dic">
                    <h1>Our  Principal</h1>
                    <p>Puji dan syukur mari kita panjatkan kehadirat Allah SWT. Yang senantiasa dengan sifat kasih dan sayangnya banyak memberikan nikmat  ...</p>

                   <div style={{display:"flex", justifyContent:"center"}}>
                   {/* <button className="btn btn-primary"></button> */}
                   </div> 
                      

                </div>
                </div>
            </div>
        </>
    )
}

export default SubHeader;