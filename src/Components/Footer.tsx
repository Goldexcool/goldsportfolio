"use client"
import React, { useState, useEffect } from 'react';
import ThankYouPage from './Confetti';
const Footer = () => {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 350);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <main>
            <footer className="flex justify-center max-w-full md:p-[3rem] p-[3rem] mt-[4rem] bg-main-footer md:flex ">
                <div className="flex flex-col justify-center items-center gap-[2rem] w-[100%]">
                    <div className=" flex  flex-wrap max-[480px]:flex-col lg:flex-row w-[90%] sm:items-center items-start gap-3 md:justify-between" >
                        <div className="text-white ">
                            <h1 className="text-[30px] font-bold">Goldexcool</h1>
                        </div>
                        <div className=" flex justify-center max-w-full flex-col md:flex-row md:items-center items-start ">
                            <ul className='flex flex-wrap max-[480px]:flex-col justify-center sm:text-start text-center sm:justify-between text-[20px] text-white cursor-pointer gap-10 items-center '>
                                <a href='#home' className='md:text-start text-center'><li>Home</li></a>
                                <a href='#about' className='md:text-start text-center'><li>About</li></a>
                                <a href='#skill' className='md:text-start text-center'><li>Skills</li></a>
                                <a href='#portfolio' className='md:text-start text-center'><li>Portfolio</li></a>
                                <a href='#contact' className='md:text-start text-center'><li>Contact </li></a>
                            </ul>
                        </div>
                        <div className=" flex items-center gap-2 justify-center md:mt-0 mt-3">
                            <i className='bx bxl-github text-[25px] text-white cursor-pointer opacity-90'></i>
                            <i className='bx bxl-linkedin text-[25px] text-white cursor-pointer opacity-90'></i>
                            <i className='bx bxl-facebook text-[25px] text-white cursor-pointer opacity-90'></i>
                            <i className='bx bxl-twitter text-[25px] text-white cursor-pointer opacity-90'></i>
                            <i className='bx bxl-instagram text-[25px] text-white cursor-pointer opacity-90'></i>
                        </div>
                    </div>
                    <div className="mt-5 text-main-color-gray-dark">
                        <h2>
                            @2023 Goldexcool. All right reserved
                        </h2>
                    </div>
                </div>


            </footer>

            {showScrollToTop && (
                <div
                    className="fixed bottom-6 z-50000 right-6  bg-main-footer shadow-2xl hover:text-main-color-darkest p-2 rounded-[10px] cursor-pointer"
                    onClick={scrollToTop}
                >
                    <i className="bx bx-chevron-up text-white text-3xl"></i>
                </div>
            )}

        </main>
    );
}

export default Footer;
