import React from "react";
import "./Projects.css";
import projects from "./projects.json";
function Projects() {
  return (
    <div>
      <section className="section-1">
        <h2 className="section-title-1">Projects</h2>

        <div className="cocktails-center-1">
          {projects.map((project) => {
            const { id, title, url, github, description, image } = project;
            return (
              <div className="cocktail-1" key={id}>
                <h3
                  style={{
                    color: "rgb(6, 62, 87",
                    margin: "10px",
                    textAlign: "center",
                  }}
                >
                  {title}
                </h3>

                <div className="img-container-1">
                  <img src={image} alt="" />
                </div>
                <div className="cocktail-footer-1">
                  <p>{description}</p>
                  <div className="myBtn">
                    <a href={github} className="btn btn-primary btn-details">
                      github
                    </a>
                    <a href={url} className="btn btn-primary btn-details-1">
                      URL
                    </a>
                  </div>{" "}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default Projects;
