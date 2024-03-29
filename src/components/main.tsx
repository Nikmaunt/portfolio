import React from 'react';
import bgPhoto from '../assets/bg-photo.jpeg'
import {TypeAnimation} from "react-type-animation";
import {FaGithub, FaLinkedin} from "react-icons/all";

const Main = () => {
    return (
        <div id='main'>
            <img className='w-full h-screen object-cover object-right scale-x-[ya1]' src={bgPhoto} alt="bgPhoto"/>
            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Nikita Kokhan</h1>
                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
                        I'm a
                        <TypeAnimation
                            sequence={[
                                'Developer',
                                2500,
                                'Tech Enthusiast',
                                2500
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em',paddingLeft:'5px' }}
                        />
                    </h2>
                    <div className='flex justify-center pt-6 max-w-[250px] w-full lg:justify-start'>
                        <a href="https://www.linkedin.com/in/nikita-kokhan-7b8595221/" > <FaLinkedin className='cursor-pointer'  size={25}/></a>
                        <a href="https://github.com/Nikmaunt"  className='ml-3.5'> <FaGithub className='cursor-pointer'  size={25}/></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;