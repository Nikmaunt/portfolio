import React from 'react';
import {techImg} from "./Data";


const data = techImg


const Skills = () => {
    return (
        <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 justify-center '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4  text-[#001b5e] '>Skills</p>
                    <p className='py-4 text-gray-800' >These are some technologies I've worked with</p>
                </div>
                <div className='w-full grid text-gray-800 grid-cols-2 sm:grid-cols-4  gap-4 text-center py-8'>
                    {techImg.map((el)=> (
                        <div key={el.id}
                             className='relative hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto '
                                 src={el.image}
                                 alt={el.name}/>
                            <div className="  pt-8 text-center ">
                                <div className="absolute top-0 bottom-0 left-0 right-0 h-full w-full hover transition 5s ease ">
                                    <div className=" absolute top-[75%] left-[25%] right-[25%]">{el.name}</div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Skills;