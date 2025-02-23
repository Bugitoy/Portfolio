import React from "react";
import { TopGradient, BottomGradient } from "../../Hero/Design/HeroDesign";
import { ScrollParallax } from "react-just-parallax";
import { heroIcons } from "../../../../constants";
import Generating from "../../Hero/Design/Generating";
import Notification from "./Notification";
import { Coding, MarioCoding, Studying, Walking } from "../../../../assets/About";
import Draggable from "react-draggable";

const RenderRepeatedBlocks = () => {
  const leftOffsets = ["12%", "-10%", "5%"];
  const images = [Coding, MarioCoding, Walking];

  return (
    <>
      {Array.from({ length: 3 }).map((_, index) => (
        <Draggable key={index}>
          <div className="p-[2rem] relative top-[2rem] md:w-[33rem]" style={{ left: leftOffsets[index] }}>
            <TopGradient />
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="aspect-[43/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[988/490] lg:aspect-[710/390] rounded-t-[0.9rem] bg-conic-gradient">
                <img
                  src={images[index]}
                  className="w-[19rem] h-[13.8rem] ml-2 scale-[1.7] translate-y-[8%] md: w-full md:ml-0 md:h-[16rem] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[0%] rounded-[0.9rem]"
                  width={630}
                  height={490}
                  alt="draggable Images"
                />
                <Generating className="absolute lg:h-[2rem] lg:w-[12rem] left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2 z-2" />
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute left-[-6.5rem] h-[3rem] bottom-[0.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex z-2">
                    {heroIcons.map((icon, index) => (
                      <li className="p-3" key={index}>
                        <img src={icon} width={15} height={15} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>
                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden z=2 absolute -right-[7rem] bottom-[5rem] h-[3rem] w-[15rem] xl:flex z-3"
                    title="Notifications"
                  />
                </ScrollParallax>
              </div>
            </div>
            <BottomGradient className="z=0" />
          </div>
        </Draggable>
      ))}
    </>
  );
};

export default RenderRepeatedBlocks;
