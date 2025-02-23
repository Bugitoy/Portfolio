import React from 'react';
import { pixelman, futuristiccity, SomethingHere } from "../../../../assets/About";

const CardComponent = () => {
  return (
      <div className="card group relative flex h-[40rem] w-[calc(30rem/1.5)] lg:w-[calc(40rem/1.5)] xl:w-[calc(40rem/1.5)] mt-[11rem] 
                      justify-center items-end p-0 perspective-[2500px] lg:mx-10 xl:mx-10 rounded-2xl">
        <div className="wrapper transition-all duration-500 absolute w-full -z-10 
                        group-hover:transform group-hover:perspective-[900px] group-hover:-translate-y-1/20 
                        group-hover:rotate-x-[25deg] group-hover:shadow-[2px_35px_32px_-8px_rgba(0,0,0,0.75)] 
                        rounded-3xl overflow-hidden">
          <img
            src={futuristiccity}
            alt="Cover"
            className="cover-image w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute top-0 h-full left-0 w-full bg-gradient-to-t from-transparent 
                          via-[rgba(12,13,19,0.5)] to-[rgba(12,13,19)] opacity-0 transition-opacity duration-500 
                          group-hover:opacity-100 rounded-2xl" />
          <div className="absolute bottom-0 w-full h-50 bg-gradient-to-b from-transparent 
                          via-[rgba(12,13,19,0.5)] to-[rgba(12,13,19)] opacity-100 transition-all duration-500 
                          group-hover:h-30 rounded-3xl" />
        </div>

        {/*<img
          src={SomethingHere}
          alt="Title"
          className="title w-full transition-transform duration-500 group-hover:transform group-hover:translate-y-[-10px] group-hover:translate-z-[100px]"
        />*/}

        <img
          src={pixelman}
          alt="Character"
          className="character w-full opacity-0 transition-all duration-500 absolute -z-10 
                    group-hover:opacity-100 group-hover:translate-y-[-10%] group-hover:translate-z-[100px] rounded-3xl"
        />
      </div>
  );
};

export default CardComponent;

