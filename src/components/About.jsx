import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto lg:h-screen bg-light-bgDimmed text-light-text dark:bg-dark-bgDimmed dark:text-dark-text">
      <div className="flex flex-col items-start max-w-screen-lg p-8 md:p-15">
        <h1 className="text-3xl md:text-6xl font-bold mb-5">
          <span>0.</span>About
        </h1>
        <p className="text-md md:text-xl mb-5 primary-color">
          Hi there! I'm Psalm Eleazar Gamilo Videna (long name ik, call me
          Ellie).
        </p>
        <p className="text-md md:text-xl mb-5 opacity-75">
          I'm a software engineering student based in the GTA. I specialize in
          fullstack development, enjoying both crafting beautiful, user-friendly
          interfaces and building robust backend systems.
        </p>
        <p className="text-md md:text-xl mb-5 opacity-75">
          I also have a strong background in design, including video production
          and digital design, which complements my technical skills.
          Additionally, I have a background in business and a deep love for all
          things business-related, constantly seeking to integrate my technical
          expertise with business acumen.
        </p>
        <p className="text-md md:text-xl mb-5 opacity-75">
          When I'm not lost in code, you might find me powerlifting at the gym,
          smashing birdies on the badminton court, or locked in a good book!
        </p>
      </div>
    </div>
  );
};

export default About;
