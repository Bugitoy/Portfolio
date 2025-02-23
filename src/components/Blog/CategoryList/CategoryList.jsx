import { StreetCrossing, TennisMan, twospaceman, Vibing} from "../../../assets/Blog";
import Section from "../../Section";
import { BottomLine } from "./Design/CategoryDesign";
import { useRef } from "react";

const CategoryList = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[9rem] -mt-[6.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
        
      <div className="container relative" ref={parallaxRef}>
        <h1 className="mb-[50px] my-[0] sm: text-center sm: text-2xl">Popular Categories</h1>
        <div className="flex flex-wrap justify-between pb-[70px] sm: pb-0 sm: px-[20px]">
                <a href="" className="flex items-center justify-center sm: mb-[2rem] gap-[20px] capitalize w-[9rem] h-[80px] rounded-[10px] bg-[#57c4ff31]">
                  HTML
                </a>
                <a href="" className="flex items-center justify-center sm: mb-[2rem] gap-[20px] capitalize w-[7rem] h-[80px] rounded-[10px] bg-[#da85c731]">
                  CSS
                </a>
                <a href="" className="flex items-center justify-center sm: mb-[2rem] gap-[20px] capitalize w-[5rem] h-[80px] rounded-[10px] bg-[#7fb88133]">
                  C#
                </a>
                <a href="" className="flex items-center justify-center sm: mb-[2rem] gap-[20px] capitalize w-[11rem] h-[80px] rounded-[10px] bg-[#ff795736]">
                  Javascript
                </a>
                <a href="" className="flex items-center justify-center sm: mb-[2rem] gap-[20px] capitalize w-[7rem] h-[80px] rounded-[10px] bg-[#ffb04f45]">
                  C++
                </a>
                <a href="" className="flex items-center justify-center sm: mb-[2rem] gap-[20px] capitalize w-[9rem] h-[80px] rounded-[10px] bg-[#5e4fff31]">
                  {/*<img
                        src={StreetCrossing}
                        className="rounded-[0.5rem]"
                        width={50}
                        height={50}
                        alt=""/>*/}
                  MongoDB
                </a>
        </div> 
      </div>
      <BottomLine/>
    </Section>
  );
};

export default CategoryList;