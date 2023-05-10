import React from 'react';

import {data} from "./Data";


const Projects = () => {
    const project = data;

    return (
        <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16  '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-[#001b5e] '>
                        Projects
                    </p>
                    <p className='py-6'>Check out some of my key projects</p>
                </div>
                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Gird Item */}
                    {project.map((item, index) => (
                        <div
                            key={index}
                            style={{backgroundImage: `url(${item.image})`, maxHeight:'100%', maxWidth:'100%' }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md
              flex justify-center text-center items-center mx-auto content-div "
                        >
                            <div className="opacity-0 group-hover:opacity-100 ">
                                <div className="pt-8 text-center ">
                                    <a href={item.github} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Code
                                        </button>
                                    </a>
                                    <a href={item.live} target="_blank">
                                        <button
                                            className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                                        >
                                            Live
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;