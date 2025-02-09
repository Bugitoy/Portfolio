import React from "react";

const MenuCategories = () => {

    return (
        <div className="container mt-[35px] mb-[60px] flex flex-wrap gap-[20px]">
             <a
                href="/blog?cat=style"
                className={"py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#57c4ff31]"}
            >
                Style
            </a>
            <a href="/blog" className={"py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#da85c731]"}>
                Fashion
            </a>
            <a href="/blog" className={"py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#7fb88133]"}>
                Food
            </a>
            <a href="/blog" className={"py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#ff795736]"}>
                Travel
            </a>
            <a href="/blog" className={"py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#ffb04f45]"}>
                Culture
            </a>
            <a href="/blog" className={"py-[10px] px-[25px] rounded-[10px] text-[14px] bg-[#5e4fff31]"}>
                Coding
            </a>
        </div>
    );
  };
  
  export default MenuCategories;