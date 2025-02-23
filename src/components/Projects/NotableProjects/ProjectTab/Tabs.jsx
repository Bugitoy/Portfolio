import { useState } from "react";
import Button from "../../../Button";
import Heading from "../../../Heading";
import Section from "../../../Section";
import Tagline from "../../../Tagline";
import { PaginationList } from "../../../../constants";
import { check2, grid, loading1 } from "../../../../assets/App";
import { Gradient } from "../../../App/Roadmap/Design/Roadmap";

const Tabs = () => {
    const [filter, setFilter] = useState("All");

    const filteredList = filter === "All" 
        ? PaginationList 
        : PaginationList.filter(item => item.title === filter);

    return (
        <div className="container relative flex flex-col items-center justify-center z-2">
            <div className="flex justify-center w-full h-[4rem] space-x-4 mb-8 sm: text-xs sm: flex-wrap">
                <button 
                    onClick={() => setFilter("All")} 
                    className={`px-4 py-2 rounded-2xl ${filter === "All" ? "bg-purple-600 text-white" : "bg-white text-black border border-gray-300"}`}
                >
                    All
                </button>
                <button 
                    onClick={() => setFilter("AI and Machine Learning")} 
                    className={`px-4 py-2 rounded-2xl ${filter === "AI and Machine Learning" ? "bg-purple-600 text-white" : "bg-white text-black border border-gray-300"}`}
                >
                    Computer Graphics
                </button>
                <button 
                    onClick={() => setFilter("Computer Graphics")} 
                    className={`px-4 py-2 rounded-2xl ${filter === "Computer Graphics" ? "bg-purple-600 text-white" : "bg-white text-black border border-gray-300"}`}
                >
                    AI and Machine Learning 
                </button>
                <button 
                    onClick={() => setFilter("Electric Circuits")} 
                    className={`px-4 py-2 rounded-2xl ${filter === "Electric Circuits" ? "bg-purple-600 text-white" : "bg-white text-black border border-gray-300"}`}
                >
                    Electric Circuits
                </button>
                <button 
                    onClick={() => setFilter("Politics, History and Articles")} 
                    className={`px-4 py-2 rounded-2xl ${filter === "Politics, History and Articles" ? "bg-purple-600 text-white" : "bg-white text-black border border-gray-300"}`}
                >
                    Articles
                </button>
            </div>
            <div className="relative grid gap-6 md:grid-cols-2 mb-[10rem] md:gap-4 md:pb-[7rem] sm: mt-[2rem]">

                {filteredList.map((item) => {
                    const status = item.status === "done" ? "Done" : "In progress";

                    return (
                        <div
                            className={`md:flex even:md:translate-y-[2rem] p-0.25 rounded-[2.5rem] ${
                                item.colorful ? "bg-conic-gradient" : "bg-n-6"
                            }`}
                            key={item.id}
                        >
                            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                                <div className="absolute top-0 left-0 max-w-full">
                                    <img
                                        className="w-full"
                                        src={grid}
                                        width={550}
                                        height={550}
                                        alt="Grid"
                                    />
                                </div>

                                <div className="relative z-1">
                                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                                        <Tagline>{item.date}</Tagline>

                                        <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                                            <img
                                                className="mr-2.5"
                                                src={item.status === "done" ? check2 : loading1}
                                                width={16}
                                                height={16}
                                                alt={status}
                                            />
                                            <div className="tagline">{status}</div>
                                        </div>
                                    </div>

                                    <div className="mb-10 -my-10 -mx-15">
                                        <img
                                            className="w-full"
                                            src={item.imageUrl}
                                            width={628}
                                            height={426}
                                            alt={item.title}
                                        />
                                    </div>
                                    
                                    <h4 className="h4 mb-4">{item.title}</h4>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                </div>
                            </div>
                        </div>
                    );
                })}

                <Gradient />
            </div>
        </div>
    );
};

export default Tabs;