import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import GoogleButton from 'react-google-button';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../services/firebase";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) => {
        alert("You are logged in");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlegoogleclick = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        alert("You are logged in");
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-container mt-4"style={{boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",padding:"50px 20px",textAlign:"center",width:"50%",margin:"auto"}}>
      <form className="login-form" onSubmit={(e) => handlesubmit(e)}>
        <h2>Login</h2>
        <p>Welcome back! Please login to your account.</p>
        <input
        style={{padding:"10px 30px"}}
          type="email"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter Your Email"
        /><br /><br />
        <div className="password-container">
          <input
          style={{padding:"10px 30px"}}
            type={showPassword ? "text" : "password"}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Enter Your Password"
          />
          
        </div>
        <div className="google-btn " style={{marginTop:"20px"}}>
          <GoogleButton style={{margin:"auto"}} onClick={(e) => handlegoogleclick(e)} />
        </div><br />
        <input type="submit"  className="submit-btn" />
        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
