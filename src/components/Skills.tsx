import React from 'react';
import css from '../assets/css.png'
import html from '../assets/html.png'
import react from '../assets/react.png'
import redux from '../assets/redux.png'
import typescript from '../assets/typescript.png'
import github from '../assets/github.png'
// w-full h-screen bg-stone-200 text-gray-300
const Skills = () => {
    return (
        <div id='skills' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16 justify-center '>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4  text-[#001b5e] '>Skills</p>
                    <p className='py-4 text-gray-800' >These are the technologies I've worked with</p>
                </div>

                <div className='w-full grid text-gray-800 grid-cols-2 sm:grid-cols-4  gap-4 text-center py-8'>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto ' src={html} alt="HTML icon" />
                        <p className='my-4 ' >HTML</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={css} alt="css icon" />
                        <p className='my-4'>CSS</p>
                    </div>
                    <div className=' hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={typescript} alt="typescript icon" />
                        <p className='my-4'>TYPESCRIPT</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={react} alt="react icon" />
                        <p className='my-4'>REACT</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={redux} alt="redux icon" />
                        <p className='my-4'>REDUX</p>
                    </div>
                    <div className='hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={github} alt="github icon" />
                        <p className='my-4'>GITHUB</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Skills;