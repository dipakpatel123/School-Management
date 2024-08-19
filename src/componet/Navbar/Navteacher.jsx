import React from "react";
import "../css/NavTeacher.css"
import TeacherData from "./TeacherApi";
import "../Responsive/Rteacher.css"


const NavTeachers = () => {
    return (
        <>
            <div className="teacher_content">
                <div className="search">
                    <form classNameclass="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
                    </form>
                </div>
                <hr />
                <div className="teacher_data">

                    {
                        TeacherData.map((currElement) => {
                            return (
                                <>
                                 
                                    <div className="teacher_background">
                                        <div className="teacher_img"><img src={currElement.img} alt="" /></div>
                                        <div className="teacher_info">
                                        
                                            <p className="p">name: <span className="span">{currElement.name}</span></p>
                                            <p className="p">subject: <span className="span">{currElement.subject}</span></p>
                                            <p className="p">experience:<span className="span">{currElement.experience}</span></p> 

                                        </div>

                                    </div>
                                   
                                </>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default NavTeachers;