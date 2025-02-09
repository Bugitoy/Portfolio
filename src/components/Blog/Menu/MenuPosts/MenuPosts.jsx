import React from 'react';
import { StreetCrossing, TennisMan, twospaceman, Vibing} from "../../../../assets/Blog";
const MenuPosts = () => {

  return (
      <div className="container mt-[35px] mb-[60px] flex flex-col gap-[35px]">

        <a href="/" className="flex items-center gap-[20px]">
            <div className="flex-4 flex flex-col gap-[5px]">
              <span className="py-[3px] px-[8px] rounded-[10px] text-[12px] text-white w-max bg-[#ff7857] mb-[1rem]">Travel</span>
              <h3 className="text-[12px] font-[500] text-purple-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="text-[12px]">
                <span className="">John Doe</span>
                <span className="text-gray-500"> - 10.03.2023</span>
              </div>
            </div>
        </a>

        <a href="/" className="flex">
            <div className=" flex flex-col gap-[2px]">
              <span className="py-[3px] px-[8px] rounded-[10px] text-[12px] text-white w-max bg-[#ffb14f] mb-[1rem]">Culture</span>
              <h3 className="text-[12px] font-[500] text-purple-200">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </h3>
              <div className="text-[12px]">
                <span className="">John Doe</span>
                <span className="text-gray-500"> - 10.03.2023</span>
              </div>
            </div>
        </a>

      </div>
  );
};

export default MenuPosts;