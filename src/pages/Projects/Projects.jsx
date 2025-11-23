import React from "react";
import Header from "../../components/App/Header/Header";
import Footer from "../../components/App/Footer/Footer";
import ButtonGradient from "../../assets/App/Others/ButtonGradient";
import Hero from "../../components/Projects/Hero/Hero";
import NotableProjects from "../../components/Projects/NotableProjects/NotableProjects";
import Card from "../../components/Projects/Card/Card";

const Projects = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Hero />
          <NotableProjects/>
          <Card/>
          <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default Projects;
