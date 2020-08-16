import React from "react";
import { useRouter } from "next/router";

const scrollToProject = (event, route) => {
  const projects = document.querySelector(
    event.target.getAttribute("data-scroll")
  );

  if (projects && route === "/") {
    event.preventDefault();

    projects.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
};

const ProjectButton = ({ className, content }) => {
  const router = useRouter();

  return (
    <a
      aria-label={content}
      href="/#projects"
      className={className}
      onClick={(e) => scrollToProject(e, router.pathname)}
      data-scroll="#projects"
    >
      {content}
    </a>
  );
};

export default ProjectButton;
