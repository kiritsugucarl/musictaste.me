import React from "react";
import { Link } from "react-router-dom";
import "./About.css";
import member1 from "/PINEDA.png";
import member2 from "/ORTILLO.png";
import member3 from "/MANOSCA.png";
import member4 from "/AVE.png";
import member5 from "/DESCALZO.png";

const About = () => {
  return (
    <div className="about-page">
      <h1>
        <span className="about-the__title">About the </span>{" "}
        <span className="website__mustard">website</span>
      </h1>

      <div className="about-description">
        <p>
          We know you love music. We know you have favorite artists and songs,
          genres that you love and hate, and that you listen to over and over
          again. We also know that sometimes, when it comes to music, you don't
          know how much you like something until someone else tells you how much
          they do - and we want to help!
        </p>
      </div>
      <hr className="section-divider" />
      <div className="the-team-container">
        <h3>
          <span className="meet-the__title">Meet the</span>{" "}
          <span className="team__title">team</span>
        </h3>
      </div>
      <div className="desc-team">
        <p>
          The Architects of Innovation: Meet the Extraordinary Team Behind the
          App's Development. This app's development team is a dedicated and
          creative collection of individuals who have collaborated to bring it
          to reality.
        </p>
      </div>
      <div className="meet-the-team">
        <div className="team">
          <div className="image-container">
            <img src={member1} alt="Team Member 1" className="team-member-img" />
          </div>
          <div className="name">
            CARL DENNIS <br className="NLine" />
            PINEDA
          </div>
          <div className="role">Fullstack, Leader</div>
        </div>
        <div className="team">
          <div className="image-container">
            <img src={member2} alt="Team Member 2" className="team-member-img" />
          </div>
          <div className="name">
            MICO JOSHUA <br className="NLine" />
            ORTILLO
          </div>
          <div className="role">Backend Developer</div>
        </div>
        <div className="team">
          <div className="image-container">
            <img src={member3} alt="Team Member 3" className="team-member-img" />
          </div>
          <div className="name">
            DAN EMMANUEL <br className="NLine" />
            MANOSCA
          </div>
          <div className="role">Documentation</div>
        </div>
        <div className="team">
          <div className="image-container">
            <img src={member4} alt="Team Member 4" className="team-member-img" />
          </div>
          <div className="name">
            SHALOM JAMAICA <br className="NLine" />
            AVE
          </div>
          <div className="role">Frontend Developer, UI/UX</div>
        </div>
        <div className="team">
          <div className="image-container">
            <img src={member5} alt="Team Member 5" className="team-member-img" />
          </div>
          <div className="name">
            KAYLA CLAUDINE <br className="NLine" />
            DESCALZO
          </div>
          <div className="role">Frontend Developer, Graphic Designer</div>
        </div>
      </div>
    </div>
  );
};

export default About;
