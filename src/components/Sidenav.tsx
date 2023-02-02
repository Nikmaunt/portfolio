import React, {useState} from 'react';
import {AiOutlineHome, AiOutlineMail, AiOutlineMenu} from "react-icons/ai";
import {BsPerson, GrProjects, GrReactjs, MdOutlineContactPage} from "react-icons/all";

const Sidenav = () => {
    const [nav, setNav] = useState<boolean>(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
    <div>
            <AiOutlineMenu
                onClick={handleNav}
                className='fixed top-4 right-4 z-[99] md:hidden'/>
            {nav ? (
                    <div className='fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 '>
                        <a onClick={handleNav}
                            href="#main"
                            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                            <AiOutlineHome  size={20}/>
                            <span className='pl-4'>Home</span>
                        </a>
                        <a onClick={handleNav}
                           href="#skills"
                           className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                            <GrReactjs size={20}/>
                            <span className='pl-4'>Skills</span>
                        </a>
                        <a href=""
                           className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                            <MdOutlineContactPage size={20}/>
                            <span className='pl-4'>Resume</span>
                        </a>
                        <a onClick={handleNav}
                            href="#projects"
                            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                            <GrProjects  size={20}/>
                            <span className='pl-4'>Projects</span>
                        </a>
                        <a onClick={handleNav}
                            href="#contact"
                            className='w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 '>
                            <AiOutlineMail  size={20}/>
                            <span className='pl-4'>Contact</span>
                        </a>
                    </div>
                ) : (
                        ''
                )}
        <div className='md:block hidden fixed top-[25%] z-10'>
            <div className='flex flex-col'>
                <a href="#main" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineHome size={20}/>
                </a>
                <a href="#skills" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrReactjs size={20}/>
                </a>
                <a href="#projects" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <GrProjects size={20}/>
                </a>
                <a href="#resume" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <MdOutlineContactPage  size={20}/>
                </a>
                <a href="#contact" className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail size={20}/>
                </a>
            </div>
        </div>
        </div>
    );
};

export default Sidenav;