import React from 'react';
import { StreetCrossing, TennisMan, twospaceman, Vibing } from "../../../../assets/Blog";

const MenuPosts = () => {
  return (
    <div className="w-full flex flex-col items-center mt-[35px] mb-[60px] gap-[35px]">

      <a href="/" className="flex flex-col items-center gap-[10px] w-[8rem]">
        <div className="flex flex-col items-center gap-[5px] text-center">
          <span className="py-[3px] mb-[20px] px-[8px] rounded-[10px] text-[12px] text-white bg-[#ff7857]">
            Travel
          </span>
          <h3 className="text-[12px] font-[500] text-purple-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[12px]">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </a>

      <a href="/" className="flex flex-col items-center gap-[10px] w-[8rem]">
        <div className="flex flex-col items-center gap-[5px] text-center">
          <span className="py-[3px] my-[20px] px-[8px] rounded-[10px] text-[12px] text-white bg-[#ffb14f]">
            Culture
          </span>
          <h3 className="text-[12px] font-[500] text-purple-200">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <div className="text-[12px]">
            <span>John Doe</span>
            <span className="text-gray-500"> - 10.03.2023</span>
          </div>
        </div>
      </a>

    </div>
  );
};

export default MenuPosts;
