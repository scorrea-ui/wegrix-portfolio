import React, { Component } from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Projects from "../components/Projects";

class Home extends Component {
  state = {
    classes: "c-hero c-hero--home",
    title: "Santiago Correa",
    copy:
      "A showcase of the websites I've worked on and skills acquired. Ranging from small to big projects.",
    buttons: true,
    titleClass: "c-hero__title c-hero__title--home",
  };

  render() {
    const { classes, title, copy, buttons, titleClass } = this.state;
    return (
      <Layout>
        <Hero
          className={classes}
          title={title}
          copy={copy}
          buttons={buttons}
          titleClass={titleClass}
        />
        <Skills />
        <Projects />
        <Testimonials />
      </Layout>
    );
  }
}

export default Home;
