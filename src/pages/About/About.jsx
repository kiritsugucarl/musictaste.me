import React from "react";
import {Link } from "react-router-dom";
import "./About.css"; 
import aboutimage from "/about.image.png";
import member1 from "/member1.png";
import member2 from "/member2.png";
import member3 from "/member3.png";
import member4 from "/member4.png";
import member5 from "/member5.png";

const About = () => {
  return (
    <div className="about-page">
      <h1>ABOUT THE WEBSITE</h1>
      <div className="about-image">
        <img src={aboutimage} alt="About Us" />
      </div>
      <div className="about-description">
        <p>
          We know you love music. We know you have favorite artists and songs, genres that you love and hate, 
          and that you listen to over and over again. We also know that sometimes, when it comes to music,
          you don't know how much you like something until someone else tells you how much they do - and we want to help!
        </p>
        </div>
        <hr className="section-divider" /> 
      <div className="the-team-container">
        <h2>MEET THE TEAM</h2>
      </div>
      <div className="desc-team">
        <p>The Architects of Innovation: Meet the Extraordinary Team Behind the App's Development. This app's development team is a dedicated and creative collection of individuals who have collaborated to bring it to reality.</p>
      </div>
      <div className="meet-the-team">
        <div class="team">
          <img src={member1} alt="Team Member 1" />
          <div class="name"> CARL DENNIS  <br class="NLine"></br>     PINEDA </div>
          <div className="role"> Backend Developer</div>
        </div>
        <div class="team">
          <img src={member2} alt="Team Member 2" />
          <div class="name">MICO JOSHUA<br class="NLine"></br> ORTILLO</div>
          <div className="role"> Backend Developer</div>
        </div>
        <div class="team">
          <img src={member3} alt="Team Member 3" />
          <div class="name">SHALOM JAMAICA<br class="NLine"></br> AVE</div>
          <div className="role"> Frontend Developer</div>
        </div>
        <div class="team">
          <img src={member4} alt="Team Member 4" />
          <div class="name">KAYLA CLAUDINE<br class="NLine"></br> DESCALZO</div>
          <div className="role"> Frontend Developer</div>
        </div>
        <div class="team">
          <img src={member5} alt="Team Member 5" />
          <div class="name">DAN EMMANUEL <br class="NLine"></br> MANOSCA</div>
          <div className="role"> Frontend Developer</div>
        </div>
      </div>
    </div>
  );
};

export default About;
