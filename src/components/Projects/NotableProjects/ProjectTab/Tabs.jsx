import { useState } from "react";
import { Link } from "react-router-dom";
import Tagline from "../../../Tagline";
import { projects } from "../../../../assets/Projects";
import { check2, grid, loading1 } from "../../../../assets/App";
import { Gradient } from "../../../App/Roadmap/Design/Roadmap";

const Tabs = () => {
    const [filter, setFilter] = useState("All");

    const filteredList = filter === "All" ? projects : projects.filter(item => item.category === filter);

    return (
        <div className="container relative flex flex-col items-center justify-center z-2">
            <div className="flex h-[2rem] lg:h-[4rem] justify-center text-xs lg:text-lg flex-wrap gap-[12px] mb-[3rem]">
                <button 
                    onClick={() => setFilter("All")} 
                    className={`px-4 py-2 rounded-lg ${filter === "All" ? "bg-purple-600 text-white" : "bg-white text-black border border-gray-300"}`}
                >
                    All
                </button>
                <button 
                    onClick={() => setFilter("AI and Machine Learning")} 
                    className={`px-4 py-2 rounded-lg ${filter === "AI and Machine Learning" ? "bg-purple-600 text-white" : "bg-white text-black border border-gray-300"}`}
                >
                    AI and Machine Learning 
                </button>
                <button 
                    onClick={() => setFilter("Accelerated Computing")} 
                    className={`px-4 py-2 rounded-lg ${filter === "Computer Graphics" ? "bg-purple-600 text-white" : "bg-white text-black border border-gray-300"}`}
                >
                    Accelerated Computing 
                </button>
                <button 
                    onClick={() => setFilter("Electric Circuits")} 
                    className={`px-4 py-2 rounded-lg ${filter === "Electric Circuits" ? "bg-purple-600 text-white" : "bg-white text-black border border-gray-300"}`}
                >
                    Electric Circuits
                </button>
                {/*<button 
                    onClick={() => setFilter("Politics, History and Articles")} 
                    className={`px-4 py-2 rounded-lg ${filter === "Politics, History and Articles" ? "bg-purple-600 text-white" : "bg-white text-black border border-gray-300"}`}
                >
                    Politics, History and Articles
                </button>*/}
            </div>
            <div className="relative grid gap-6 md:grid-cols-2 mb-[2rem] md:gap-4 md:pb-[7rem] sm: mt-[2rem]">

                {filteredList.map((item) => {
                    const status = item.status === "done" ? "Done" : "In progress";

                    return (
                        <div
                            className={`md:flex even:md:translate-y-[2rem] p-0.25 rounded-[2.5rem] ${
                                item.colorful ? "bg-conic-gradient" : "bg-n-6"
                            }`}
                            key={item.id}
                        >
                            <Link to={`/projects/Postpage?id=${item.id}`} className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15 block">
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
                                            <Tagline className={"text-[0.6rem] lg:text-base"}>{item.date}</Tagline>

                                            <div className="flex items-center px-1 lg:p-2 py-1 bg-n-1 rounded text-n-8">
                                                <img
                                                    className="mr-2.5"
                                                    src={item.status === "done" ? check2 : loading1}
                                                    width={16}
                                                    height={16}
                                                    alt={status}
                                                />
                                                <div className="tagline text-[0.6rem] lg:text-base">{status}</div>
                                            </div>
                                        </div>

                                        <div className="my-5 -mx-15">
                                            <img
                                                className="w-full mb-0 lg:mb-15"
                                                src={item.imageUrl}
                                                width={628}
                                                height={426}
                                                alt={item.title}
                                            />
                                        </div>
                                                    <h4 className="text-md lg:h4 mb-4">{item.title}</h4>
                                        <p className="body-2 text-n-4">{item.text}</p>
                                    </div>
                            </Link>
                        </div>
                    );
                })}

                <Gradient />
            </div>
        </div>
    );
};

export default Tabs;