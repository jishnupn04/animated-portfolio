import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div className="about">
      <div className="row">
        <div className="col-md-6 education">
          <h2>Education</h2>
          <div className="container">
            <div className="row my-3">
              <div className="col-md-12">
                <div className="time">2022-2027</div>
                <div className="course">
                  Integrated M.Sc in Computer Science with Specialisation in
                  AI&ML
                </div>
                <div className="clg">
                  Nehru Arts & Science College,
                  <br />
                  Kanhangad
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 experience">
          <h2>Experience</h2>
          <div className="container">
            <div className="row my-3">
              <div className="col-md-4">
                <div className="time">2024 April - November</div>
                <div className="role">Software Developer Engineer Intern</div>
                <div className="company">
                  <a href="https://hexmos.com/">Hexmos Tech</a>
                </div>
              </div>
              <div className="col-md-8">
                <ul>
                  <li>
                    Built a dynamic pricing page from scratch(on React with
                    Typescript and NodeJS) ,which shows the pricing cards with
                    respect to the app name you give in the params.Integrated
                    razorpay for payment and used Shadcn for UI.
                  </li>
                  <li>
                    Contributed on the frontend (On React.js ) and Backend(On
                    Golang,Python ) of a product "Feedback By Hexmos".
                  </li>
                  <li>
                    Contributed on a tool called Ansika ,which makes onboarding
                    new engineers easy.
                  </li>
                  <li>
                    Gained valuable Teamwork skills by reviewing MRs and
                    collaborating with cross-functional teams.
                  </li>
                  <li>
                    Got an understanding how an app is built,from planning to
                    deployment
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12 skills">
          <h2>Skills</h2>
        </div>
      </div>
    </div>
  );
};

export default About;
