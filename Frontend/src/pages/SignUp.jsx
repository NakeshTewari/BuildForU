import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  // function Signin() {
  //   console.log("SignIN");
  // }

  async function Signup() {
    const data = await axios.post("http://localhost:5000/register", {
      username,
      email,
      phoneNumber,
      password,
      confirmPassword,
    });
    console.log(data);
  }

  return (
    <div class="container">
      <div class="title">Registration</div>
      <div class="content">
        <form action="#" onSubmit={Signup}>
          <div class="user-details">
            <div class="input-box">
              <span class="details">Full Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input
                type="text"
                placeholder="Enter your username"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {/* <div class="input-box">
              <span class="details">Emai</span>
              <input type="text" placeholder="Enter your email" required onChange={(e)=> setUsername(e.target.value)}/>
            </div> */}
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input
                type="text"
                placeholder="Enter your number"
                required
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div class="input-box">
              <span class="details">Password</span>
              <input
                type="text"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div class="input-box">
              <span class="details">Confirm Password</span>
              <input
                type="text"
                placeholder="Confirm your password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>
          <div class="gender-details">
            <input type="radio" name="gender" id="dot-1" />
            <input type="radio" name="gender" id="dot-2" />
            <input type="radio" name="gender" id="dot-3" />
            <span class="gender-title">Gender</span>
            <div class="category">
              <label for="dot-1">
                <span class="dot one"></span>
                <span class="gender">Male</span>
              </label>
              <label for="dot-2">
                <span class="dot two"></span>
                <span class="gender">Female</span>
              </label>
              <label for="dot-3">
                <span class="dot three"></span>
                <span class="gender">Prefer not to say</span>
              </label>
            </div>
          </div>
          <div class="button">
            <input type="submit" value="Register" />
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
