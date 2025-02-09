import React from "react";
import Header from "../components/App/Header/Header";
import Footer from "../components/App/Footer/Footer";
import ButtonGradient from "../assets/App/Others/ButtonGradient";
import Timeline from "../components/Roadmap/Timeline/Timeline";

const Roadmap = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
          <Header />
          <Timeline />
          <Footer/>
      </div>
      <ButtonGradient />
    </>
  );
};

export default Roadmap;