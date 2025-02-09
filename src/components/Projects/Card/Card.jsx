import { curve, heroBackground, pixelguytalking } from "../../../assets/App";
import Button from "../../Button";
import Section from "../../Section";
import { BackgroundCircles, BottomLine } from "../../About/Hero/Design/HeroDesign";
import { useRef } from "react";
import CompanyLogos from "../../App/Hero/CompanyLogos/CompanyLogos";
import RepeatedBlocks from "../../About/Experience/Design/RepeatedBlocks";
import ConnectedBlocks from "../../About/Experience/Design/ConnectedBlocks";
import AboutMeTabs from "../../About/Hero/Design/AboutMeTabs";
import Passage from "../../About/Hero/Design/Passage";
import { City, Coast, Railway } from "../../../assets/About";


const Card = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
    >
      <div className="container relative" ref={parallaxRef}>
        <a
          href="#"
          className="h-[30rem] flex flex-col  bg-white border border-bg-n-6 rounded-lg shadow-sm md:flex-row hover:bg-n-6 dark:border-n-6 dark:bg-n-8 dark:hover:bg-n-6"
        >
          <img
            className="object-cover w-full rounded-t-lg md:h-auto md:w-68 md:rounded-none md:rounded-s-lg"
            src={pixelguytalking}
            alt="Pixel Guy Talking"
          />
          <div className="flex flex-col justify-center p-15">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p className="mb-3 text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
            </p>
          </div>
        </a>
      </div>
    </Section>
  );
};

export default Card;