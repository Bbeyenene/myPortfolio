import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "../projects/projects.json";
import "./home.css";

function Home() {
  const [people] = useState(data);
  const [index, setIndex] = React.useState(0);

  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > people.length - 1) {
        index = 0;
      }
      return index;
    });
  };
  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = people.length - 1;
      }
      return index;
    });
  };

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > people.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index, people]);

  return (
    <>
      <div className="mainInfo">
        <section className="title1">
          <div className="title">
            <h2>
              <span>/ </span>Aplications
            </h2>
          </div>
        </section>

        <section className="section ">
          <div className="section-center">
            {people.map((person, personIndex) => {
              const { id, title, url, github, description, image } = person;

              let position = "nextSlide";
              if (personIndex === index) {
                position = "activeSlide";
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = "lastSlide";
              }

              return (
                <article className={position} key={id}>
                  <p className="title name-t">{title}</p>
                  <img className="myImg" src={image} alt="" />
                  <p className="text text-p">{description} </p>
                  <div
                    className="myBtn"
                    style={{
                      height: "50px",
                    }}
                  >
                    <a href={github} className="btn btn-primary btn-details">
                      github
                    </a>
                    <a href="/projects" style={{ marginBottom: "100px" }}>
                      <FaQuoteRight className="icon" />
                    </a>
                    <a href={url} className="btn btn-primary btn-details-1">
                      URL
                    </a>
                  </div>
                </article>
              );
            })}

            <button className="prev" onClick={prevSlide}>
              <FiChevronLeft />
            </button>
            <button className="next" onClick={nextSlide}>
              <FiChevronRight />
            </button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
