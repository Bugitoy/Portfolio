import { brainwaveWhiteSymbol, gradient, play, whitecrown } from "../../../../assets/App";
import ChatBubbleWing from "../../../../assets/App/Others/ChatBubbleWing";

export const Gradient = () => {
  return (
    <div className="absolute top-0 -left-[10rem] w-[56.625rem] h-[56.625rem] opacity-50 mix-blend-color-dodge pointer-events-none">
      <img
        className="absolute top-1/2 left-1/2 w-[79.5625rem] max-w-[79.5625rem] h-[88.5625rem] -translate-x-1/2 -translate-y-1/2"
        src={gradient}
        width={1417}
        height={1417}
        alt="Gradient"
      />
    </div>
  );
};

export const PhotoChatMessage = () => {
  return (
    <div className="absolute sm: text-xs md: max-w-[11.5rem]  lg: max-w-[11.5rem]  xl: max-w-[11.5rem] py-2 px-5 bg-n-5 rounded-t-xl rounded-bl-xl font-code text-base  sm: top-[9.1rem] sm: max-w-[9rem] sm: left-[2rem] md:left-[3rem] md: max-w-[27rem] md:top-[13rem] lg:top-[23rem] lg:left-[3.5rem] lg:right-[18rem] lg:max-w-[17.5rem]">
      Didn't know you were this good.
      <ChatBubbleWing 
      className="absolute left-[8rem] md:left-[8.5rem] lg:left-[5rem] xl:left-[15rem] lg:max-h-[2rem] bottom-0" 
      pathClassName="fill-n-5"/>
    </div>
  );
};

export const VideoChatMessage = () => {
  return (
    <div className="absolute left-[18.125rem] top-14 sm: top-[5rem] sm: left-[5.9rem]  sm: max-h-[3rem] sm: max-w-[10rem] md:top-[10rem] md:left-[27rem] w-full max-w-[14rem] lg:top-[12rem] lg:left-[22.5rem] pt-2.5 pr-2.5 pb-7 pl-5 bg-n-6 rounded-t-xl rounded-br-xl font-code text-base md:max-w-[13.5rem]">
      Looks good!
      <div className="absolute left-5 -bottom-[1.125rem] flex items-center justify-center w-[2.25rem] h-[2.25rem] bg-color-1 rounded-[0.75rem] sm: max-w-[2rem] sm: max-h-[2rem]">
        <img
          src={whitecrown}
          width={26}
          height={26}
          alt="Brainwave"
        />
      </div>
      <p className="tagline absolute right-2.5 bottom-1 text-[0.5rem] text-n-3 uppercase">
        just now
      </p>
      <ChatBubbleWing
        className="absolute bottom-0 -scale-x-100 left-[-1rem] md:left-[-1rem] lg:left-[-1.5rem]"
        pathClassName="fill-n-6"
      />
    </div>
  );
};

export const VideoBar = () => {
  return (
    <div className="absolute left-0 bottom-0 w-full flex items-center p-6">
      <img
        src={play}
        width={24}
        height={24}
        alt="Play"
        className="object-contain mr-3"
      />

      <div className="flex-1 bg-[#D9D9D9]">
        <div className="w-1/2 h-0.5 bg-color-1"></div>
      </div>
    </div>
  );
};
