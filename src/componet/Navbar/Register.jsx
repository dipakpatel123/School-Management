import React, { useState } from "react";
import "../css/Register.css";
import "../Responsive/Rregister.css";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NavLink } from "react-router-dom";

const Register = () => {
    const [passwordType, setPasswordType] = useState('password');
    const [buttonText, setButtonText] = useState('Show');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        confirmEmail: '',
        password: '',
        phone: '',
        token: '',
        department: 'department'    
    });
    const [errors, setErrors] = useState({});

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
        setButtonText(buttonText === 'Show' ? 'Hide' : 'Show');
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return passwordRegex.test(password);
    };

    const validateForm = () => {
        let formErrors = {};

        if (!formData.firstName.trim()) formErrors.firstName = "First Name is required";
        if (!formData.lastName.trim()) formErrors.lastName = "Last Name is required";

        if (!formData.email.trim()) {
            formErrors.email = "Email is required";
        } else if (!validateEmail(formData.email)) {
            formErrors.email = "Please enter a valid email address";
        }

        if (!formData.confirmEmail.trim()) {
            formErrors.confirmEmail = "Confirm Email is required";
        } else if (formData.email !== formData.confirmEmail) {
            formErrors.confirmEmail = "Emails do not match";
        }

        if (!formData.password.trim()) {
            formErrors.password = "Password is required";
        } else if (!validatePassword(formData.password)) {
            formErrors.password = "Password must be at least 8 characters, include an uppercase letter, a number, and a special character";
        }

        if (!formData.phone.trim()) formErrors.phone = "Phone Number is required";
        if (formData.phone.length !== 10) formErrors.phone = "Phone Number must be 10 digits";

        if (!formData.token.trim()) formErrors.token = "Token is required";
        if (formData.department === "department") formErrors.department = "Please select a department";

        setErrors(formErrors);
        return Object.keys(formErrors).length === 0;
    };

    const handleRegister = (e) => {
        e.preventDefault();

        if (validateForm()) {
            localStorage.setItem('formData', JSON.stringify(formData));
            alert('Registration data saved successfully!');

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                confirmEmail: '',
                password: '',
                phone: '',
                token: '',
                department: 'department'
            });

            setErrors({});
        }
    };

    return (
        <>
            <div className="register_page">
                <div className="Rleft">
                    <div className="Rreg_img">
                        <img src="../src/componet/img/registerimg.jpg" alt="reg_img" />
                    </div>
                </div>
                <div className="Rright">
                    <div className="leftreg_form">
                        <div className="reg_logo">
                            <img src="../src/componet/img/Registerlogo.png" alt="logo" />
                        </div>
                        <div className="Rtitle">
                            <h1>Registration Form</h1>
                            <p>Already have an account? <span><NavLink style={{color:"orange", fontWeight:"bold", textDecoration:"none"}} to={"/login"}>Login</NavLink></span></p>
                        </div>

                        <section className="input_filed">
                            <form action="" className="Reg_Form">
                                <div className="name_filed">
                                    <input 
                                        type="text" 
                                        placeholder="First Name" 
                                        className="fname" 
                                        name="firstName" 
                                        value={formData.firstName} 
                                        onChange={handleChange} 
                                    />
                                    {errors.firstName && <span className="error">{errors.firstName}</span>}
                                    
                                    <input 
                                        type="text" 
                                        placeholder="Last Name" 
                                        className="lname" 
                                        name="lastName" 
                                        value={formData.lastName} 
                                        onChange={handleChange} 
                                    />
                                    {errors.lastName && <span className="error">{errors.lastName}</span>}
                                </div>

                                <input 
                                    type="email" 
                                    placeholder="Enter Email" 
                                    className="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange} 
                                />
                                {errors.email && <span className="error">{errors.email}</span>}
                                <br/>
                                
                                <input 
                                    type="email" 
                                    placeholder="Confirm Email" 
                                    className="email" 
                                    name="confirmEmail" 
                                    value={formData.confirmEmail} 
                                    onChange={handleChange} 
                                />
                                {errors.confirmEmail && <span className="error">{errors.confirmEmail}</span>}
                                <br/>
                                
                                <div className="password_show">
                                    <input 
                                        type={passwordType} 
                                        placeholder="Enter your password" 
                                        className="password" 
                                        name="password" 
                                        value={formData.password} 
                                        onChange={handleChange} 
                                    />
                                    <button onClick={togglePassword} className="show">{buttonText}</button>
                                </div>
                                {errors.password && <span className="error">{errors.password}</span>}
                                
                                <div className="contact_filed">
                                    <input 
                                        type="tel" 
                                        maxLength={10} 
                                        minLength={10} 
                                        placeholder="Phone Number" 
                                        className="phone" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange} 
                                    />
                                    {errors.phone && <span className="error">{errors.phone}</span>}
                                    
                                    <input 
                                        type="number" 
                                        placeholder="Token" 
                                        className="token" 
                                        name="token" 
                                        value={formData.token} 
                                        onChange={handleChange} 
                                    />
                                    {errors.token && <span className="error">{errors.token}</span>}
                                </div>

                                <div className="gen_dep">
                                    <div className="department">
                                        <select 
                                            className="dep_option" 
                                            name="department" 
                                            value={formData.department} 
                                            onChange={handleChange}
                                        >
                                            <option value="department">department</option>
                                            <option value="CE">CE</option>
                                            <option value="IT">IT</option>
                                            <option value="CEMICAL">CEMICAL</option>
                                            <option value="CIVIL">CIVIL</option>
                                        </select>
                                        {errors.department && <span className="error">{errors.department}</span>}
                                    </div>
                                </div>

                                <div className="reg_btn">
                                    <button onClick={handleRegister}><HowToRegIcon/>Register</button>
                                    <input type="reset" className="reset" />
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;
