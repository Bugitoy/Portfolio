import { ReactLenis } from "lenis/dist/lenis-react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
import { SiSpacex } from "react-icons/si";
import { FiArrowRight, FiMapPin } from "react-icons/fi";
import { useRef } from "react";

export const SmoothScrollHero = () => {
  return (
    <div className="bg-n-8">
      <ReactLenis
        root
        options={{
          // Learn more -> https://github.com/darkroomengineering/lenis?tab=readme-ov-file#instance-settings
          lerp: 0.05,
          //   infinite: true,
          //   syncTouch: true,
        }}
      >
        <Schedule />
      </ReactLenis>
    </div>
  );
};

const SECTION_HEIGHT = 1500;

const Schedule = () => {
  return (
    <section
      id="launch-schedule"
      className="mx-auto max-w-5xl px-4 py-10 text-white"
    >
      <motion.h1
        initial={{ y: 48, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.75 }}
        className="mb-20 text-4xl font-black uppercase text-zinc-50 mt-[200px]"
      >
        Launch Schedule
      </motion.h1>
      <ScheduleItem title="Completed the 3rd & 4th pages then added some finishing touches on the website" date="Feb 9th" location="Ohio" />
      <ScheduleItem title="Finished the 2nd page of my first website" date="Jan 17th" location="Ohio" />
      <ScheduleItem title="Studying my degree takes most of my time away from personal projects" date="" location="Ohio" />
      <ScheduleItem title="Made a tiktok video based on the second website" date="Jan 15th" location="Ohio" />
      <ScheduleItem title="School began" date="Jan 13th" location="Ohio" />
      <ScheduleItem title="Went on to code a different website" date="Jan 7th" location="Ohio" />
      <ScheduleItem title="Finished making the About Me page" date="Jan 17th" location="Ohio" />
      <ScheduleItem title="Made initial sketches of the Projects, Blog and Roadmap pages" date="Jan 25th" location="Ohio" />
      <ScheduleItem title="Made the Projects page" date="Feb 7th" location="Ohio" />
      <ScheduleItem title="Made the Blog and Roadmap pages" date="Feb 8th" location="Ohio" />
      <ScheduleItem title="Fixed a lot of bugs and deployed the website on vercel" date="Feb 9th" location="Ohio" />
    </section>
  );
};

const ScheduleItem = ({ title, date, location }) => {
  return (
    <motion.div
      initial={{ y: 48, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="mb-9 flex items-center justify-between border-b border-zinc-800 px-3 pb-9"
    >
      <div>
        <p className="mb-1.5 text-xl text-zinc-50">{title}</p>
        <p className="text-sm uppercase text-zinc-500">{date}</p>
      </div>
      <div className="flex items-center gap-1.5 text-end text-sm uppercase text-zinc-500">
        <p>{location}</p>
        <FiMapPin />
      </div>
    </motion.div>
  );
};