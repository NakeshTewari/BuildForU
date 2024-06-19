import React from "react";
import styled from "styled-components";
import user from "../images/user.png";

export default function Profile() {
  return (
    <Container>
      <div className="header">
        <div className="user-profile">
          <h2>User Profile</h2>
        </div>
        <div className="user-container">
          <div className="user">
            <div className="user-image">
              <img src={user} alt="User" />
            </div>
            <div className="user-details">
              <h3>Nakesh Tewari</h3>
              <h4>Contractor</h4>
              <h4>Eastern European Time (EET), Cairo UTC +3</h4>
            </div>
          </div>
          <div className="buttons">
            <button className="upload">Upload New Photo</button>
            <button>Delete</button>
          </div>
        </div>
      </div>

      <div className="details">
        <h2>Personal Details</h2>
        <div className="input-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
        </div>
        <div className="input-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>
        <div className="input-group">
          <label htmlFor="user-name">User Name</label>
          <input type="text" id="user-name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" />
        </div>
        <div className="input-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="text" id="phone-number" />
        </div>
      </div>

      <div className="section">
        <h2>Company Information</h2>
        <div className="input-group">
          <label htmlFor="company-name">Company Name</label>
          <input type="text" id="company-name" />
        </div>
        <div className="input-group">
          <label htmlFor="contact-number">Contact Number</label>
          <input type="text" id="contact-number" />
        </div>
        <div className="input-group">
          <label htmlFor="company-email">Company Email</label>
          <input type="email" id="company-email" />
        </div>
        <div className="input-group">
          <label htmlFor="physical-address">Physical Address</label>
          <input type="text" id="physical-address" />
        </div>
      </div>

      <div className="section">
        <h2>Professional Information</h2>
        <div className="input-group">
          <label htmlFor="license-number">License Number</label>
          <input type="text" id="license-number" />
        </div>
        <div className="input-group">
          <label htmlFor="insurance-info">Insurance Information</label>
          <input type="text" id="insurance-info" />
        </div>
        <div className="input-group">
          <label htmlFor="experience">Years of Experience</label>
          <input type="text" id="experience" />
        </div>
        <div className="input-group">
          <label htmlFor="expertise">Area of Expertise</label>
          <input type="text" id="expertise" />
        </div>
      </div>

      <div className="section">
        <h2>Qualifications and Certifications</h2>
        <div className="input-group">
          <label htmlFor="certifications">Certifications</label>
          <input type="text" id="certifications" />
        </div>
        <div className="input-group">
          <label htmlFor="education">Education Background</label>
          <input type="text" id="education" />
        </div>
      </div>

      <div className="section">
        <h2>Service Details</h2>
        <div className="input-group">
          <label htmlFor="service-areas">Service Areas</label>
          <input type="text" id="service-areas" />
        </div>
        <div className="input-group">
          <label htmlFor="availability">Availability</label>
          <input type="text" id="availability" />
        </div>
        <div className="input-group">
          <label htmlFor="emergency-services">Emergency Services</label>
          <input type="text" id="emergency-services" />
        </div>
      </div>

      <div className="section">
        <h2>Previous Work</h2>
        <div className="input-group">
          <label htmlFor="portfolio">Portfolio</label>
          <input type="text" id="portfolio" />
        </div>
        <div className="input-group">
          <label htmlFor="testimonials">Testimonials</label>
          <input type="text" id="testimonials" />
        </div>
        <div className="input-group">
          <label htmlFor="case-studies">Case Studies</label>
          <input type="text" id="case-studies" />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: #f0f0f0;
  font-family: "Montserrat", sans-serif;
  padding: 2rem;

  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    .user-profile {
      margin-bottom: 1rem;
    }

    .user-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      .user {
        display: flex;
        align-items: center;

        .user-image {
          img {
            width: 6rem;
            height: 6rem;
            border-radius: 50%;
            object-fit: cover;
          }
        }

        .user-details {
          margin-left: 1.5rem;
        }
      }

      .buttons {
        display: flex;
        align-items: center;

        button {
          padding: 1rem 2rem;
          margin-right: 1rem;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          font-family: "Montserrat", sans-serif;
          transition: background-color 0.3s ease;

          &:hover {
            background-color: #0056b3;
          }
        }

        button:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .section {
    margin-top: 2rem;

    h2 {
      margin-bottom: 1rem;
      font-size: 1.5rem;
      color: #007bff;
    }

    .input-group {
      margin-bottom: 1.5rem;

      label {
        display: block;
        font-weight: bold;
        margin-bottom: 0.5rem;
        color: #333;
      }

      input {
        padding: 1rem;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 10px;
        font-size: 1rem;
        transition: border-color 0.3s ease;

        &:focus {
          outline: none;
          border-color: #007bff;
        }
      }
    }
  }
`;
