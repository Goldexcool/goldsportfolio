"use client"
import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  const themeButton = useRef(null);

  const isLocalStorageAvailable =
    typeof window !== "undefined" && window.localStorage;
  const [selectedTheme, setSelectedTheme] = useState(
    isLocalStorageAvailable
      ? localStorage.getItem("selected-theme") || "light"
      : null
  );
  const [selectedIcon, setSelectedIcon] = useState(
    isLocalStorageAvailable
      ? localStorage.getItem("selected-icon") || "bx-sun"
      : null
  );

  const darkTheme = "dark-theme";
  const iconTheme = "bx-sun"; // Without specific icon class

  const getCurrentTheme = () => (selectedTheme === "dark" ? "dark" : "light");
  const getCurrentIcon = () =>
    selectedIcon === "bx bx-moon" ? "bx bx-moon" : "bx bx-sun";

  const handleButtonClick = () => {
    setSelectedTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark"
    );
    setSelectedIcon((currentIcon) =>
      currentIcon === "bx bx-moon" ? "bx bx-sun" : "bx bx-moon"
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Check the user's system preference for dark mode
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setSelectedTheme("dark");
      } else {
        setSelectedTheme("light");
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Apply the selected theme and icon to the body and themeButton
      document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
      );
      if (themeButton.current) {
        (themeButton.current as HTMLDivElement).classList[
          selectedIcon === "bx bx-moon" ? "add" : "remove"
        ](iconTheme);
      }

      // Store the selected theme and icon in local storage
      localStorage.setItem("selected-theme", getCurrentTheme());
      localStorage.setItem("selected-icon", getCurrentIcon());
    }
  }, [selectedTheme, selectedIcon, darkTheme, iconTheme]);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (event: any) => {
    // Check if the close button is clicked
    const isCloseButtonClicked = event.target.classList.contains('close-button');

    // Close the menu only if the close button is clicked
    if (isCloseButtonClicked) {
      setIsOpen(false);
    }
  };
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleSetActiveSection = () => {
      const homeSection = document.getElementById('home');
      const aboutSection = document.getElementById('about');
      const skillSection = document.getElementById('skill');
      const portfolioSection = document.getElementById('portfolio');
      const contactSection = document.getElementById('contact');

      if (homeSection?.offsetTop !== undefined && scrollY >= homeSection.offsetTop && (aboutSection?.offsetTop !== undefined && scrollY < aboutSection.offsetTop)) {
        setActiveSection('home');
      } else if (aboutSection?.offsetTop !== undefined && scrollY >= aboutSection.offsetTop && (skillSection?.offsetTop !== undefined && scrollY < skillSection.offsetTop)) {
        setActiveSection('about');
      } else if (skillSection?.offsetTop !== undefined && scrollY >= skillSection.offsetTop && (portfolioSection?.offsetTop !== undefined && scrollY < portfolioSection.offsetTop)) {
        setActiveSection('skill');
      } else if (portfolioSection?.offsetTop !== undefined && scrollY >= portfolioSection.offsetTop && (contactSection?.offsetTop !== undefined && scrollY < contactSection.offsetTop)) {
        setActiveSection('portfolio');
      } else if (contactSection?.offsetTop !== undefined && scrollY >= contactSection.offsetTop) {
        setActiveSection('contact');
      }
    };

    handleSetActiveSection();
  }, [scrollY]);


  
  
  
  const headerBackgroundColorClass = scrollY >= 50 ? 'bg-main-color' : 'bg-purple';
  const ulTextColorClass = scrollY >= 50 ? 'text-main-color-black' : 'text-main-color-black';
  const containerTextColorClass = scrollY >= 50 ? 'text-main-color-black' : 'text-main-color-black';
  const textGradientClass = scrollY >= 50 ? 'bg-gradient-to-r from-blue-100 to-white-800' : '';

  return (
    <main className=''>
      <div className="flex items-center justify-center max-w-full mt-4 ">
        <div className="flex justify-center lg:w-[900px] mx-auto">
          
          <nav className={`flex items-center justify-between fixed mx-auto px-[2rem] md:px-[6rem] lg:px-[5rem] xl:px-[18rem] w-full top-0 left-0 right-0 transition-all ease-in-out duration-300 p-[1rem] z-50 ${scrollY >= 50 ? 'bg-main-color-white shadow-2xl' : 'bg-main-color-white '
            }`}>
            <div className={`text-[20px] bg-gradient-to-r from-blue-600  to-purple-400 inline-block text-transparent bg-clip-text ${textGradientClass}`}>
              <h1>Goldexcool</h1>
            </div>
            <div className='  lg:flex max-[1024px]:hidden'>
              <ul className={`lg:flex items-center gap-8 text-[16px]`}>
                <a href='#home'>
                  <li className={classNames({ 'text-main-color': activeSection === 'home', 'text-main-color-black': activeSection !== 'home' })}>
                    Home
                  </li>
                </a>
                <a href='#about'>
                  <li className={classNames({ 'text-main-color': activeSection === 'about', 'text-main-color-black': activeSection !== 'about' })}>
                    About
                  </li>
                </a>
                <a href='#skill'>
                  <li className={classNames({ 'text-main-color': activeSection === 'skill', 'text-main-color-black': activeSection !== 'skill' })}>
                    Skills
                  </li>
                </a>
                <a href='#portfolio'>
                  <li className={classNames({ 'text-main-color': activeSection === 'portfolio', 'text-main-color-black': activeSection !== 'portfolio' })}>
                    Portfolio
                  </li>
                </a>
                <a href='#contact'>
                  <li className={classNames({ 'text-main-color': activeSection === 'contact', 'text-main-color-black': activeSection !== 'contact' })}>
                    Contact me
                  </li>
                </a>
              </ul>
            </div>
            <div className=" flex gap-2">
              <i className={`bx bx-moon text-[20px] cursor-pointer ${containerTextColorClass}`} onClick={handleButtonClick} ref={themeButton}></i>
              <div className="lg:hidden inline-flex cursor-pointer">
                <i className={`bx bx-grid-alt text-[20px] ${containerTextColorClass}`} onClick={toggleMenu}></i>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div className={`hamburger-menu lg:hidden fixed left-0 top-0 h-full w-[50%] bg-main-ham  transform transition-transform ease-in-out duration-300 z-[1000] ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="close-button p-4 cursor-pointer absolute top-0 right-0" onClick={toggleMenu} >
          <i className="bx bx-x text-main-color-black text-2xl" ></i>
        </div>
        <div className="menu flex gap-[2rem] items-start justify-start p-6 h-[100vh] flex-wrap">
          <ul className="text-[20px] mt-10 flex flex-col gap-[3rem] text-main-color-black">
            <div className='flex gap-2 items-center' onClick={toggleMenu} >
              <i className='bx bx-home text-[20px]'></i>
              <a href='#' onClick={handleItemClick}><li className=" cursor-pointer hover:scale-105">Home</li></a>
            </div>
            <div className='flex gap-2 items-center text-[20px]' onClick={toggleMenu} >
              <i className='bx bx-user'></i>
              <a href='#about' onClick={handleItemClick}><li className=" cursor-pointer hover:scale-105 ">About</li></a>
            </div>
            <div className='flex gap-2 items-center text-[20px]' onClick={toggleMenu} >
              <i className='bx bx-file'></i>
              <a href='#skill' onClick={handleItemClick}><li className=" cursor-pointer hover:scale-105 ">Skills</li></a>
            </div>
            <div className='flex gap-2 items-center text-[20px]' onClick={toggleMenu} >
              <i className='bx bx-briefcase-alt-2'></i>
              <a href='#portfolio' onClick={handleItemClick}><li className=" cursor-pointer hover:scale-105 ">Portfolio</li></a>
            </div>
            <div className='flex gap-2 items-center text-[20px] ' onClick={toggleMenu} >
              <i className='bx bxl-telegram'></i>
              <a href='#contact' onClick={handleItemClick}><li className=" cursor-pointer hover:scale-105 ">Contact me</li></a>
            </div>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Navbar;
