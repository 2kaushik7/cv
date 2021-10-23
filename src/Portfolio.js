import React from "react";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import EQ from "./components/EQ";
import Contact from "./components/Contact";
import Routers from "./components/Routers";
import "./styles/_styles.scss";

class Portfolio extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <AboutMe />
        <Profile />
        <Experience />
        <Projects />
        <EQ />
        <Contact />
      </div>
    );
  }
}

export default Portfolio;
