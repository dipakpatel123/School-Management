import React, { useState } from "react";
import "../css/Login.css";
import "../Responsive/Rlogin.css";
import HowToRegIcon from '@mui/icons-material/HowToReg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordType, setPasswordType] = useState('password');
    const [buttonText, setButtonText] = useState('Show');
    const [errorMessage, setErrorMessage] = useState('');

    const togglePassword = (e) => {
        e.preventDefault();
        setPasswordType(passwordType === 'password' ? 'text' : 'password');
        setButtonText(buttonText === 'Show' ? 'Hide' : 'Show');
    };

    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve the stored registration data from localStorage
        const storedData = JSON.parse(localStorage.getItem('formData'));

        // Check if the input matches the stored data
        if (storedData) {
            if (storedData.email === email && storedData.password === password) {
                alert('Login successful!');
                setErrorMessage('');
            } else {
                setErrorMessage('Invalid email or password.');
            }
        } else {
            setErrorMessage('No registered user found.');
        }
    };

    return (
        <> 
            <div className="register_page">
                <div className="left">
                    <div className="reg_img">
                        <img src="../src/componet/img/registerimg.jpg" alt="reg_img" />
                    </div>
                </div>
                <div className="right">
                    <div className="leftreg_form">
                        <div className="reg_logo">
                            <img src="../src/componet/img/Registerlogo.png" alt="logo" />
                        </div>
                        <div className="Rtitle">
                            <h1>Login Form</h1>
                        </div>

                        <section className="input_filed">
                            <form action="" className="Reg_Form" onSubmit={handleLogin}>
                                <input 
                                    type="email" 
                                    placeholder="Enter Email" 
                                    className="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                /><br/>
                                
                                <div className="LoginPass_show">
                                    <input 
                                        type={passwordType} 
                                        placeholder="Enter your password"  
                                        className="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button onClick={togglePassword} className="show">{buttonText}</button>
                                </div>

                                {errorMessage && <span className="error">{errorMessage}</span>}
                                
                                <div className="reg_btn">
                                    <button type="submit"><HowToRegIcon/>Login</button>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
