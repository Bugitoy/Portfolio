import React from 'react';
import Section from "../../Section";
import Heading from "../../Heading";
import {check} from "../../../assets/App";
import { AfricanCoder, deskKid, BadCity, CityTop, Atlantis ,DesertVillage, Jupiter, Forest, OfficeCoder, pinkTerrain, PixelArtClassroom, SadRobot, StarWarsWalker, StreetWalk} from "../../../assets/About";
import { programmingHub, microsoftLearn, freeCodeCamp, codingX } from "../../../constants";
import { Gradient } from "../../App/Services/Design/Services";

const AchievementCard = ({ title, description, services }) => (
  <div className="flex-1 z-1 rounded-2xl w-[18rem]">
    <h4 className="h4 mb-4">{title}</h4>
    <p className="body-2 md:mb-[2rem] mb-[3rem] text-n-3">{description}</p>
    <ul className="body-2">
      {services.map((item, index) => (
        <li key={index} className="flex items-start py-4 border-t border-n-6">
          <img width={24} height={24} src={check} />
          <p className="ml-4">{item}</p>
        </li>
      ))}
    </ul>
  </div>
);

const Features = () => {
  const achievements = [
    {
      title: "Programming hub",
      description: `Joined an online coding platform called Programming hub which
                    taught me how to further improve my computer science skills by
                    learning new programming languages. I earned 7 certificates which include:`,
      services: programmingHub,
    },
    {
      title: "Coding X",
      description: `Joined an online code learning platform called Coding X
                    which taught me about cybersecurity and the importance of it in
                    our modern world. Learned many different topics including: MAC address, IP address,
                    Bash programming, Kali Linux operating system, IP scripting, Man
                    in the middle Attacks and many more. Below are some of my certificates from this platform.`,
      services: codingX,
    },
    {
      title: "Microsoft Learn",
      description: `Joined Microsoft’s online platform where I learned how to program
                    in C#. I also created a game inspired by the
                    movie 'Black Panther’ where players assume the role of Shuri, with
                    Okoye and the tech genius Riri Williams, as loyal allies. The
                    objective was to defeat Namor five times, and
                    you emerge as the triumphant champion, advancing to the next
                    thrilling round.`,
      services: microsoftLearn,
    },
    {
      title: "FreeCodeCamp",
      description: `Online code learning website which taught me responsive web
                    design. This platform is responsible for kick starting my web
                    development journey and my interest in programming.`,
      services: freeCodeCamp,
    },
  ];

  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Other computer related achievements"
          text="Minor awards and achievements I have received in the past."
        />

        <div className="relative">
          <div className="relative z-1 flex sm: flex-col lg:flex-row items-center mb-[2rem] sm: py-[2rem] sm: h-full md: h-[40rem] lg: h-[40rem] xl: h-[40rem] border border-n-1/10 overflow-hidden lg:p-10 xl:h-[40rem]">
            <div className="relative z-1 flex sm: flex-col lg:flex-row gap-4">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={index}
                  title={achievement.title}
                  description={achievement.description}
                  services={achievement.services}
                />
              ))}
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 overflow-hidden">
              <div className="absolute inset-5 mb-[0rem]">
                <img
                  src={deskKid}
                  className="h-full w-full ml-[0rem] rounded-[2rem]"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-[3rem] bg-gradient-to-b from-n-8/0 to-n-8/90">
                <h4 className="h4 ml-[1rem] mb-4 lg: w-full sm: text-[1.55rem]">Senior Member of the Advocates for Red Cross Committee</h4>
                <ul className="pl-3 text-white sm: text-sm">
                  <li className="mb-2">
                    This committe has done many charitable activities such as:
                  </li>
                  <li className="mb-2">
                    Painted the Tlamelong Rehabilitation Centre for disabled people in Tlokweng
                  </li>
                  <li className="mb-2">
                    Hosted an esports tournament whereby each person was charged $3 to participate and giving the money raised to the Cheshire foundation.
                  </li>
                  <li className="mb-2">
                    Hosted a school bake sale during Valentine’s Day and used the total money raised to  buy food for the disabled people.
                  </li>
                  <li className="mb-5">
                    Collected clothing and donations in monetary form from Legae Academy students and donated it to the Botswana Red Cross Society.
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-9 gap-2 p-6 border border-n-1/10 overflow-hidden">
              <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-1 row-span-1 hover rounded-tl-[1rem]">
                <img
                  src={Forest}
                  className="h-full w-full object-cover rounded-tl-[1rem]"
                  width={630}
                  height={750}
                  alt="Night coding"
                />
              </div>
              <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-5 row-span-1">
                <img
                  src={SadRobot}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Office coder"
                />
              </div>
              <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-3 row-span-1">
                <img
                  src={pinkTerrain}
                  className="h-full w-full object-cover rounded-tr-[1rem]"
                  width={630}
                  height={750}
                  alt="Pink terrain"
                />
              </div>
              <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-2 row-span-2">
                <img
                  src={AfricanCoder}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Pixel art classroom with student focused on study"
                />
              </div>
              <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-2 row-span-2">
                <img
                  src={BadCity}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Bad City"
                />
              </div>
              <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-2 row-span-1">
                <img
                  src={CityTop}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="City top view"
                />
              </div>
              <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-2 row-span-3">
                <img
                  src={DesertVillage}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Desert Village"
                />
              </div>
              <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-1 row-span-3">
                <img
                  src={OfficeCoder}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Jupiter"
                />
              </div>
              <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-2 row-span-2">
                <img
                  src={Jupiter}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="Sad robot"
                />
              </div>
              <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-4 row-span-4">
                <img
                  src={PixelArtClassroom}
                  className="h-full w-full object-cover rounded-bl-[1rem]"
                  width={630}
                  height={750}
                  alt="Star Wars Walker"
                />
              </div>
              <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-5 row-span-3">
                <img
                  src={Atlantis}
                  className="h-full w-full object-cover rounded-br-[1rem]"
                  width={630}
                  height={750}
                  alt="Man walking in the street"
                />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Features;