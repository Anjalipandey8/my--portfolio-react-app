import React from 'react'
import { useState } from 'react';

function Projects  () {
    const [projects] = useState([
       {
        title: "Project 1",
        img: "/projects/1.png",
        gLink: "https://github.com/Anjalipandey8/gymfitness",
        lLink: "https://anjalipandey8.github.io/gymfitness/",
       },
       {
        title: "Project 2",
        img: "/projects/2.png",
        gLink: "https://github.com/Anjalipandey8/bulbswitch",
        lLink: " https://anjalipandey8.github.io/bulbswitch/",
       },
       {
        title: "Project 3",
        img: "/projects/3.png",
        gLink: "https://github.com/Anjalipandey8/caranimation",
        lLink: "https://anjalipandey8.github.io/caranimation/",
       },
       {
        title: "Project 4",
        img: "/projects/4.png",
        gLink: "https://github.com/Anjalipandey8/payment-form",
        lLink: "https://anjalipandey8.github.io/payment-form/",
       },
       {
        title: "Project 5",
        img: "/projects/5.png",
        glink: "https://github.com/Anjalipandey8/snakegame.github.io",
        lLink: "https://anjalipandey8.github.io/snakegame.github.io/",
       },
       
    ]);

    return (
        <section className="projects" id="projects">
          <div className="container">
            <div className="title">
              <h3>Featured Projects</h3>
              <a
                href="https://github.com/Anjalipandey8"
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                View All
              </a>
            </div>
            <div className="projects-wrapper">
              {projects.map((project, i) => (
                <div className="project" key={i}>
                  <div className="img-container">
                    <img src={project.img} alt={project.title} />
                  </div>
                  <div className="description">
                    <h4>{project.title}</h4>
                    <div className="links">
                      <a href={project.gLink} target="_blank" rel="noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                      <a href={project.lLink} target="_blank" rel="noreferrer">
                        <i className="fa fa-globe"></i>
                      </a>
                    </div>
                  </div>
                  <p>
                  This projects is based on html, css and javascript
                  with css we can control the color, font, the size of text, the spacing between elements,
                  different displays for different devices and screen sizes and much more!
                  with javascript we cn create dynamically updating content, control multimedia,
                  animate images, and pretty much everything else
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    }
    

export default Projects;
