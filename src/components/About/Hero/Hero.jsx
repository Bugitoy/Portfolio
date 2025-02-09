import { curve, heroBackground, pixelguytalking } from "../../../assets/App";
import Button from "../../Button";
import Section from "../../Section";
import { BackgroundCircles, BottomLine } from "./Design/HeroDesign";
import { useRef } from "react";
import CompanyLogos from "../../App/Hero/CompanyLogos/CompanyLogos";
import RenderRepeatedBlocks from "../Experience/Design/RepeatedBlocks";
import AboutMeTabs from "./Design/AboutMeTabs";
import Passage from "./Design/Passage";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:top-[-50%]">
          <div
            className="relative w-full h-full"
            style={{
              maskImage: `
                linear-gradient(to top, rgba(0,0,0,0) 20%, rgba(0,0,0,1) 40%)`,
              WebkitMaskImage: `
                linear-gradient(to top, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 20%),
                linear-gradient(to bottom, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 40%),
                linear-gradient(to left, rgba(0,0,0,0) 5%, rgba(0,0,0,1) 60%),
                linear-gradient(to right, rgba(0,0,0,0) 1%, rgba(0,0,0,1) 50%)`,
              maskComposite: "intersect",
              WebkitMaskComposite: "destination-in",
            }}
          >
            <img
              src={pixelguytalking}
              className="w-full"
              width={1920}
              height={955}
              alt="hero"
            />
          </div>
        </div>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-20">
            My{` `}
            <span className="inline-block relative">
              Story{" "}
              <img
                src={curve}
                className="absolute top-full left-0 w-full xl:-mt-2"
                width={624}
                height={28}
                alt="Curve"
              />
            </span>
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            An engineer with a tennis racket and a passion for soccer.
          </p>
        </div>
          {/*<CompanyLogos className="hidden relative z-10 mt-20 lg:block" />*/}
      </div>
   
    </Section>
  );
};

export default Hero;