import { pixelguytalking } from "../../../assets/App";
import Section from "../../Section";
import { useRef } from "react";



const Card = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
    >
      <div className="container relative" ref={parallaxRef}>
        <a
          href="#"
          className="h-[30rem] sm: h-full flex flex-col  bg-white border border-bg-n-6 rounded-lg shadow-sm md:flex-row hover:bg-n-6 dark:border-n-6 dark:bg-n-8 dark:hover:bg-n-6"
        >
          <img
            className="object-cover w-[50rem] rounded-t-lg md:h-auto md:w-68 md:rounded-none md:rounded-s-lg"
            src={pixelguytalking}
            alt="Pixel Guy Talking"
          />
          <div className="flex flex-col justify-center p-15">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-900 dark:text-white">
              Noteworthy Project:
            </h5>
            <p className="mb-3 text-gray-700 dark:text-gray-400">
              In July 2025, I built a web scraper that scanned a webpage containing the names of all the universities from around the world.
              I then extracted and stored this data in a database for use in a different project called study-talk.com
            </p>
          </div>
        </a>
      </div>
    </Section>
  );
};

export default Card;