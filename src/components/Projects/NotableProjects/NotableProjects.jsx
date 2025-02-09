import { curve, heroBackground, pixelguytalking } from "../../../assets/App";
import Button from "../../Button";
import Section from "../../Section";
import { BackgroundCircles, BottomLine } from "../../About/Hero/Design/HeroDesign";
import { useRef } from "react";
import CompanyLogos from "../../App/Hero/CompanyLogos/CompanyLogos";
import RepeatedBlocks from "../../About/Experience/Design/RepeatedBlocks";
import ConnectedBlocks from "../../About/Experience/Design/ConnectedBlocks";
import AboutMeTabs from "../../About/Hero/Design/AboutMeTabs";
import Tabs from "./ProjectTab/Tabs";
import Passage from "../../About/Hero/Design/Passage";
import { City, Coast, Railway } from "../../../assets/About";


const NotableProjects = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[6.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
        <div className="container relative" ref={parallaxRef}>

            <Tabs />
            
            <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:top-[40%]">
                <div className="relative w-full h-full" style={{
                    maskImage: `
                    linear-gradient(to top, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 40%)`,
                    WebkitMaskImage: `
                    linear-gradient(to top, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 20%),
                    linear-gradient(to bottom, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 40%),
                    linear-gradient(to left, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 60%),
                    linear-gradient(to right, rgba(0,0,0,0) 1%, rgba(0,0,0,1) 50%)`,
                    maskComposite: "intersect",
                    WebkitMaskComposite: "destination-in",
                    }}>
                    <img
                    src={heroBackground}
                    className="w-full"
                    width={1920}
                    height={955}
                    alt="hero"/>
                </div>
            </div>

            <BackgroundCircles />

        </div>
        <BottomLine />
    </Section>
  );
};

export default NotableProjects;