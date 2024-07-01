import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text transition-all duration-300">
      <div className="flex flex-col items-start max-w-screen-lg p-8 md:p-15">
        <p className="text-lg md:text-2xl mb-5">
          <span>Hey, my name is</span>
        </p>
        <h1 className="text-4xl md:text-7xl font-bold mb-5">Eleazar.</h1>
        <h1 className="text-3xl md:text-6xl font-semibold mb-5 opacity-85">
          Building Tomorrow's Solutions.
        </h1>
        <p className="text-md md:text-xl mb-5 opacity-75">
          I'm a software engineering student at the University of Guelph.
          Currently working as a fullstack developer and business analyst intern
          at a leading logistics firm in the GTA.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
