import Section from "../Section";
import Heading from "../Heading";
import { service1, service2, service3, check } from "../../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";

import Generating from "../Generating";

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="My most mermorable moments"
          text="Here are some images of my favourite moments from the past."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-[8rem] md:left-[3rem] w-full h-full pointer-events-none md:w-3/5 xl:w-auto hidden md:block lg:block xl:block">
              <img
                className="w-3/5 h-full md:object-right"
                width={800}
                alt="Coding"
                height={730}
                src={service1}
              />
            </div>

            <div className="relative z-1 md: mr-[1.5rem] max-w-[19rem] ml-auto md: mt-[0rem]">
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

            <Generating className="absolute left-4 right-4 bottom-7 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-9 mb-[-3rem]">
                <img
                  src={service2}
                  className="h-1/2 w-full ml-[0rem] rounded-[2rem]"
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
              <PhotoChatMessage />
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[40rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Making my first website</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  On November 2023, I coded a personal Website displaying my achievements and accolades.
                  Tools used: HTML, CSS, and JavaScript. Link to website:
                </p>
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />


                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
