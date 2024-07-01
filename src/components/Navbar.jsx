import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiSun, HiMoon } from "react-icons/hi"; // Import simpler sun and moon icons

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="z-50 fixed top-0 left-0 right-0 flex justify-between items-center max-w-auto h-20 px-4 text-l bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text navbar">
      {/* Name - centered on small screens */}
      <a href="#home" className="p-5 md:ml-0 mx-auto nav-link">
        <span>Eleazar</span>
      </a>

      {/* Right Side - hidden on small screens */}
      <ul className="hidden md:flex font-semibold items-center">
        <li className="p-5 text nav-link">
          <a href="#about">
            <span>0.</span>About
          </a>
        </li>
        <li className="p-5 nav-link">
          <a href="#experience">
            <span>1.</span>Experience
          </a>
        </li>
        <li className="p-5 nav-link">
          <a href="#projects">
            <span>2.</span>Projects
          </a>
        </li>
        <li className="p-5 nav-link">
          <a href="#testimonials">
            <span>3.</span>Testimonials
          </a>
        </li>
        <li className="p-5 nav-link">
          <a href="#contact">
            <span>4.</span>Contact
          </a>
        </li>
        <li className="p-5 flex items-center">
          <button onClick={toggleDarkMode} className="nav-link">
            {darkMode ? (
              <HiSun className="text-2xl" />
            ) : (
              <HiMoon className="text-2xl" />
            )}
          </button>
        </li>
      </ul>

      <div
        onClick={handleNav}
        className="block md:hidden fixed top-4 right-4 z-30"
      >
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* For smaller screens */}
      <div
        className={`navbar-small-screen ${nav ? 'active' : ''} fixed top-20 left-0 w-full shadow-lg z-20 bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text`}
      >
        <ul className="font-semibold text-center">
          <li className="py-5 nav-link">
            <a href="#about" onClick={handleNav}>
              <span>0.</span>About
            </a>
          </li>
          <li className="py-5 nav-link">
            <a href="#experience" onClick={handleNav}>
              <span>1.</span>Experience
            </a>
          </li>
          <li className="py-5 nav-link">
            <a href="#projects" onClick={handleNav}>
              <span>2.</span>Projects
            </a>
          </li>
          <li className="py-5 nav-link">
            <a href="#testimontials" onClick={handleNav}>
              <span>3.</span>Testimontials
            </a>
          </li>
          <li className="py-5 nav-link">
            <a href="#contact" onClick={handleNav}>
              <span>4.</span>Contact
            </a>
          </li>
          <li className="py-5 nav-link">
            <button onClick={toggleDarkMode}>
              {darkMode ? (
                <HiSun className="text-2xl" />
              ) : (
                <HiMoon className="text-2xl" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
