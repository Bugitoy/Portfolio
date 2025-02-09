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
        <h1 className="mb-[50px] my-[0]">Popular Categories</h1>
        <div className="flex flex-wrap justify-between pb-[70px]">
                <a href="" className="flex items-center justify-center gap-[20px] capitalize w-[15%] h-[80px] rounded-[10px] bg-[#57c4ff31]">
                    <img
                        src={StreetCrossing}
                        className="rounded-[0.5rem]"
                        width={50}
                        height={50}
                        alt=""/>
                        HTML
                </a>
                <a href="" className="flex items-center justify-center gap-[20px] capitalize w-[15%] h-[80px] rounded-[10px] bg-[#da85c731]">
                    <img
                        src={StreetCrossing}
                        className="rounded-[0.5rem]"
                        width={50}
                        height={50}
                        alt=""/>
                        CSS
                </a>
                <a href="" className="flex items-center justify-center gap-[20px] capitalize w-[15%] h-[80px] rounded-[10px] bg-[#7fb88133]">
                    <img
                        src={StreetCrossing}
                        className="rounded-[0.5rem]"
                        width={50}
                        height={50}
                        alt=""/>
                        C#
                </a>
                <a href="" className="flex items-center justify-center gap-[20px] capitalize w-[15%] h-[80px] rounded-[10px] bg-[#ff795736]">
                    <img
                        src={StreetCrossing}
                        className="rounded-[0.5rem]"
                        width={50}
                        height={50}
                        alt=""/>
                        Javascript
                </a>
                <a href="" className="flex items-center justify-center gap-[20px] capitalize w-[15%] h-[80px] rounded-[10px] bg-[#ffb04f45]">
                    <img
                        src={StreetCrossing}
                        className="rounded-[0.5rem]"
                        width={50}
                        height={50}
                        alt=""/>
                        C++
                </a>
                <a href="" className="flex items-center justify-center gap-[20px] capitalize w-[15%] h-[80px] rounded-[10px] bg-[#5e4fff31]">
                    <img
                        src={StreetCrossing}
                        className="rounded-[0.5rem]"
                        width={50}
                        height={50}
                        alt=""/>
                        MongoDB
                </a>
        </div> 
      </div>
      <BottomLine/>
    </Section>
  );
};

export default CategoryList;