import { StreetCrossing, TennisMan, twospaceman, Vibing} from "../../../../assets/Blog";
import Section from "../../../Section";
import { BackgroundCircles, BottomLine } from "../../../About/Hero/Design/HeroDesign";

const Card = () => {

  return (
        <div className="container relative flex sm: flex-col lg:flex-row  xl:flex-row item-center 
                        gap-[30px] sm: mb-[30px] sm: text-center">
            <div className="flex-1 h-[250px] relative sm:flex sm:justify-center md:flex md:justify-center lg:block xl:block">
                <img src={Vibing} className="rounded-[0.5rem] object-cover" width={500} height={500} alt=""/>
            </div>
            <div className="flex-1 flex flex-col gap-[10px] lg:text-left xl:text-left">
                <div className="">
                    <span className="text-gray-500">11.02.2023 - </span>
                    <span className="text-pink-600 font-[600]">Breadboard</span>
                </div>
                <a href="" className="">
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </a>
                <p className="font-light text-[12px] text-gray-400">
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae 
                   velit consectetur, dolorum fugit impedit saepe deleniti aliquam! 
                   Quidem repellat?...
                </p>
                <div className="flex justify-center lg:justify-start xl:justify-start">
                    <a href="" className="border-b-2 border-gray-400 text-[12px] w-max hover:border-gray-600 transition-all">
                        Read More
                    </a>
                </div>
            </div>
        </div>
  );
};

export default Card;