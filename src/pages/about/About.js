import React from "react";
import "./about.css";

function About() {
  return (
    <div className="myContact">
      <h1>About Us</h1>

      <div className="myCard" style={{ marginLeft: "0 auto" }}>
        <div className="card mb-6" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img className="cardImg" src="./Images/me.png" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">Full Stack Developer</h5>
                <p className="card-text">
                  Ambitious and motivated software engineer who is comfortable
                  with both front and back end programming. I can develop and
                  design front end web architecture, ensuring the responsiveness
                  of an applications. I have built substantial knowledge in
                  identifying programing errors and troubleshooting them
                  accordingly. I have a solid knowledge on HTML/CSS, React,
                  Handlebars, Bootstrap, Git, JavaScript, jQuery, APIs, AJAX,
                  Node Express servers, Sequel MySQL, Heroku, NoSQL MongoDB,
                  Progressive Web Apps (PWAs), Testing, Error Handling, Computer
                  Science and Portfolios.
                </p>
              </div>
            </div>
          </div>
          <p className="card-text">
            I have a bachelor’s degree in Biology, and minor in Chemistry. I
            worked as a Biology and Chemistry teacher in Senior Secondary
            School, and as a Pedagogical Director of Biology Department. I also
            worked as a salesperson in a gas station, and as a taxi and Uber
            driver. I served as a leader in the Eritrean Eri-Yiakl civic
            organization in Chicago, IL. I have a good communication, teamwork,
            problem solving and leadership skills. I believe in continuous
            education and I strive climbing the ladder of learning every day. As
            everyone ahead of me has done, I want to leave a legacy of
            creativity and build a foundation to satisfy societal need. I bunk
            on my past experience and current education to attain my short- and
            long-term visions of unlocking unbounded potentials. If you want to
            know more about me, you can contact me here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
