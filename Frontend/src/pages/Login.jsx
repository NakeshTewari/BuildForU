import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  async function Signin() {
    const data = await axios.post("http://localhost:5000/login", {
      username,
      email,
      password,
    });
    if (data.status == 200) {
      navigate("/projects");
    }
    console.log(data);
  }

  //   async function Signup() {
  //     const data = await axios.post("http://localhost:5000/register", {
  //       username,
  //       email,
  //       phoneNumber,
  //       password,
  //       confirmPassword,
  //     });
  //     console.log(data);
  //   }

  return (
    <div class="container">
      <div class="title">Login</div>
      <div class="content">
        <form action="#" onSubmit={Signin}>
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

            <div class="input-box">
              <span class="details">Password</span>
              <input
                type="text"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div class="button">
            <input type="submit" value="Login" />
          </div>
          <div>
            <Link to="/signup">SignUp</Link>
            <Link to="/projects">Dashboard</Link>
          </div>
        </form>
      </div>
    </div>
  );
}
