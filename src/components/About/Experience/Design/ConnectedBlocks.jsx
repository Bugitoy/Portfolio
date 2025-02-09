import { StarGazing } from "../../../../assets/About";
import { topText } from "../../../../constants";
import Button from "../../../Button";
import { LeftCurve, RightCurve } from "./Curves";

const ConnectedBlocks = () => {
  return (
    <div className="container lg:flex sm: mt-[2rem] ml-[5rem]">
      <div className="lg:ml-auto xl:w-[38rem] sm: mt-[3rem] md: mt-4 lg: mt-[10rem] xl: mt-4">
        <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-[5rem] lg:w-[22rem] lg:mx-auto">
          {topText}
        </p>

        <div className="relative left-1/2 flex h-[30rem] w-[25rem] aspect-square border rounded-3xl border-n-6 -translate-x-1/2 scale:75 sm: mt-[5rem] md:scale-100 overflow-hidden">
          <div className="flex items-center justify-center w-full h-full rounded-3xl bg-n-8">
            <img src={StarGazing} className="object-cover w-full h-full rounded-3xl" alt="Star Gazing" />
          </div>
          <LeftCurve />
          <RightCurve />
        </div>
        <div className="flex justify-center mt-8"> {/* Center the button and add space above */}
          <Button className="">Read about me</Button>
        </div>
      </div>
    </div>
  );
};

export default ConnectedBlocks;