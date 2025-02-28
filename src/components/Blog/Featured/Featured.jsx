import React from "react";
import Section from "../../Section";
import { useRef } from "react";
import { StreetCrossing, TennisMan, twospaceman, Vibing} from "../../../assets/Blog";

const Featured = () => {
    const parallaxRef = useRef(null);
  return (
    <Section 
    className="pt-[6rem] -mt-[5.25rem]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero">
    <div className="container relative" ref={parallaxRef}>
        <div className="absolute -top-[54%] left-1/2 w-[100%] -translate-x-1/2 md:-top-[46%] md:w-[120%] lg:top-[-30%]">
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
              src={twospaceman}
              className="w-full"
              width={1920}
              height={955}
              alt="hero"
            />
          </div>
        </div>
        <h1 className="text-[96px] sm: text-[70px] z-1 font-light md:text-[45px] lg:text-[48px] lg:mt-[3rem] xl:text-[36px] leading-[4rem]">
            - Discover my stories and creative ideas -
        </h1>
        <div className=" mt-[60px] lg:mb-[100px] xl:mb-[100px] flex items-center gap-[25px] flex-col lg:flex-row xl:flex-row">
            <div className="relative flex-1">
                <img
                    src={StreetCrossing}
                    className="h-[350px] w-full rounded-[2rem] object-cover"
                    width={630}
                    height={750}
                    alt="Man crossing the street"
                    />
            </div>
            <div className="z-1 flex flex-1 flex-col gap-[20px] sm: items-center sm: text-center">
                <h1 className="text-[20px]">Lorem ipsum dolor sit amet alim consectetur adipisicing elit.</h1>
                <p className="text-[15px] font-light text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Cupiditate, quam nisi magni ea laborum inventore voluptatum
                    laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
                    quisquam! Harum unde sit culpa debitis.
                </p>
                <button className="px-5 py-4 rounded-md w-max bg-purple-500 text-white hover:bg-purple-800 transition-all">
                    Read More
                </button>
            </div>
        </div>
    </div>
    </Section>
  );
};

export default Featured;
