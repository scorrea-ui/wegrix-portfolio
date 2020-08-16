import React, { Component } from "react";

import Layout from "../components/Layout";
import Me from "../components/Me";

class About extends Component {
  render() {
    return (
      <Layout
        title='Santiago Correa | Front End Developer | About Me'
        description='I build and maintain websites, I love being in constant contact with clients/people of interest keeping them updated on progress , milestones, issues that come up and more based on what is happening at the moment'
        url='https://wegrix.com/about'
        image='https://cdn2.hubspot.net/hubfs/7562645/Portfolio/projects/about.png'
      >
        <Me />
      </Layout>
    );
  }
}

export default About;
