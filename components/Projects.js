import React, { useContext, useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";
import { projectsContext } from "../global/projectsContext";
import Link from "next/link";

const Projects = () => {
  const { projects } = useContext(projectsContext);

  return (
    <section>
      <div className="c-projects">
        <div className="o-container">
          <div className="c-projects__wrapper">
            <h1 className="c-projects__title">Some of my public work</h1>
            <Link href="/Projects">
              <a className="c-btn c-btn--tertiary">View More</a>
            </Link>
          </div>
          <div className="o-grid o-grid--cards o-grid--equal-height">
            {projects
              .filter((project) => {
                return project.featured;
              })
              .map((project) => {
                return (
                  <div className="o-grid__col u-4/12@md" key={project.project}>
                    <Zoom bottom key={project.url} triggerOnce>
                      <a
                        className="c-projects__wrapper"
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <div className="c-projects__card">
                          <img src={project.image} alt={project.project} />
                          <div className="c-projects__content">
                            <div className="c-projects__copy">
                              <p className="c-projects__tagline">
                                {project.company}
                              </p>
                              <p className="c-projects__heading">
                                {project.project}
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>
                    </Zoom>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
