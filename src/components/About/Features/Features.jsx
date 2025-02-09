import Section from "../../Section";
import Heading from "../../Heading";
import { service1, service2, service3, check } from "../../../assets/App";
import { brainwaveServices, brainwaveServicesIcons } from "../../../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../../App/Services/Design/Services";

import Generating from "../../Generating";

const Features = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="My most mermorable moments"
          text="Here are some images of my favourite moments from the past."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 border border-n-1/10  overflow-hidden lg:p-20 xl:h-[46rem]">

            <div className="relative z-1 flex gap-7">
                <div className="flex-1 z-1 rounded-2xl w-[20rem]">
                    <h4 className="h4 mb-4 sm: mt-[-2.5rem]">Placing 2nd on my first hackathon</h4>
                    <p className="body-2 md:mb-[2rem] mb-[3rem] text-n-3">
                        On March 20, 2024, I participated in Bothohacks where my team consisting of 3 other programmers to place 2nd.
                    </p>
                    <ul className="body-2">
                        {brainwaveServices.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-start py-4 border-t border-n-6"
                        >
                            <img width={24} height={24} src={check} />
                            <p className="ml-4">{item}</p>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 z-1 rounded-2xl w-[15rem]">
                    <h4 className="h4 mb-4 sm: mt-[-2.5rem]">Placing 2nd on my first hackathon</h4>
                    <p className="body-2 md:mb-[2rem] mb-[3rem] text-n-3">
                        On March 20, 2024, I participated in Bothohacks where my team consisting of 3 other programmers to place 2nd.
                    </p>
                    <ul className="body-2">
                        {brainwaveServices.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-start py-4 border-t border-n-6"
                        >
                            <img width={24} height={24} src={check} />
                            <p className="ml-4">{item}</p>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 z-1 rounded-2xl w-[15rem]">
                    <h4 className="h4 mb-4 sm: mt-[-2.5rem]">Placing 2nd on my first hackathon</h4>
                    <p className="body-2 md:mb-[2rem] mb-[3rem] text-n-3">
                        On March 20, 2024, I participated in Bothohacks where my team consisting of 3 other programmers to place 2nd.
                    </p>
                    <ul className="body-2">
                        {brainwaveServices.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-start py-4 border-t border-n-6"
                        >
                            <img width={24} height={24} src={check} />
                            <p className="ml-4">{item}</p>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 z-1 rounded-2xl w-[15rem]">
                    <h4 className="h4 mb-4 sm: mt-[-2.5rem]">Placing 2nd on my first hackathon</h4>
                    <p className="body-2 md:mb-[2rem] mb-[3rem] text-n-3">
                        On March 20, 2024, I participated in Bothohacks where my team consisting of 3 other programmers to place 2nd.
                    </p>
                    <ul className="body-2">
                        {brainwaveServices.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-start py-4 border-t border-n-6"
                        >
                            <img width={24} height={24} src={check} />
                            <p className="ml-4">{item}</p>
                        </li>
                        ))}
                    </ul>
                </div>
                
            </div>
        </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10  overflow-hidden">
              <div className="absolute inset-9 mb-[0rem]">
                <img
                  src={service2}
                  className="h-full w-full ml-[0rem] rounded-[2rem]"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Recieving the Legae Academy Sports Standard Award</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Awarded by my high school for winning a Gold Medal in Singles and Silver 
                  Medal in Doubles and at the 2019 ISSSA Tennis Championships.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-9 gap-2 p-6 border border-n-1/10 overflow-hidden">
                <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-1 row-span-1 hover rounded-tl-[1rem]">
                <img
                  src={service2}
                  className="h-full w-full object-cover rounded-tl-[1rem]"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
                </div>
                <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-5 row-span-1">
                <img
                  src={service2}
                  className="h-full w-full object-cover rounded-tr-[1rem]"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
                </div>
                <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-3 row-span-1">
                <img
                  src={service2}
                  className="h-full w-full object-cover rounded-tr-[1rem]"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
                </div>
                <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-2 row-span-2">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
                </div>
                <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-2 row-span-2">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
                </div>
                <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-2 row-span-1">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
                </div>
                <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-2 row-span-3">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
                </div>
                <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-1 row-span-3">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
                </div>
                <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-2 row-span-2">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
                </div>
                <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-4 row-span-4">
                <img
                  src={service2}
                  className="h-full w-full object-cover rounded-bl-[1rem]"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
                />
                </div>
                <div className="transform hover:scale-105 transition duration-300 hover:rounded-[3rem] col-span-5 row-span-3">
                    <img
                  src={service2}
                  className="h-full w-full object-cover rounded-br-[1rem]"
                  width={630}
                  height={750}
                  alt="man serving a tennis ball"
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
