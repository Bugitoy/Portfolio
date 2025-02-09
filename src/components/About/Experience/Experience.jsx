import { curve, heroBackground, pixelguytalking } from "../../../assets/App";
import Button from "../../Button";
import Section from "../../Section";
import { BackgroundCircles, BottomLine } from "../Hero/Design/HeroDesign";
import { useRef } from "react";
import CompanyLogos from "../../App/Hero/CompanyLogos/CompanyLogos";
import RepeatedBlocks from "../Hero/Design/RepeatedBlocks";
import ConnectedBlocks from "./Design/ConnectedBlocks";
import AboutMeTabs from "../Hero/Design/AboutMeTabs";
import Passage from "../Hero/Design/Passage";
import { City, Coast, Railway } from "../../../assets/About";

const Experience = () => {
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
        {/*<div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
          </h1>
          <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            An engineer with a tennis racket and a passion for soccer.
          </p>
        </div>*/}

        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
            <div className="flex flex-col">
                <div className="flex flex-row gap-2">
                    <div className="flex-1 z-1 w-[60rem]">
                        <Passage />
                    </div>
                    <div className="flex-2 z-1 rounded-2xl w-[30rem] text-center ml-[0rem]">
                        <AboutMeTabs />
                    </div>
                </div>
            <div className="flex flex-row">
              <div className="flex-1 z-1 rounded-2xl w-[20rem] ">
                <RepeatedBlocks />
              </div>
              <div className="flex-2 relative z-1 w-[40rem] ">
                <ConnectedBlocks/>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:top-[40%]">
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
              src={heroBackground}
              className="w-full"
              width={1920}
              height={955}
              alt="hero"
            />
          </div>
        </div>
        <BackgroundCircles />
        <div className="flex flex-row gap-7 bg-n-7 space-between">
          <div className="flex-1 z-1 w-[10rem] hover:transform hover:scale-105 transition-transform duration-300">
            <img
              src={City}
              className="w-full rounded-[1rem] h-[50rem]"
              width={1024}
              height={490}
              alt="pixel guy talking"
            />
          </div>
          <div className="flex-1 z-1 w-[10rem] mt-[-2rem] hover:transform hover:scale-105 transition-transform duration-300">
            <img
              src={Coast}
              className="w-full rounded-[1rem] h-[54rem]"
              width={1024}
              height={490}
              alt="pixel guy talking"
            />
          </div>
          <div className="flex-1 z-1 w-[10rem] hover:transform hover:scale-105 transition-transform duration-300">
            <img
              src={Railway}
              className="w-full rounded-[1rem] h-[50rem]"
              width={1024}
              height={490}
              alt="pixel guy talking"
            />
          </div>
        </div>
      </div>
      <BottomLine />
    </Section>
  );
};

export default Experience;