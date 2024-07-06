import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Importing simpler arrow icons

const experiences = [
  {
    duration: "May 2024 - Present",
    location: "Toronto, Ontario, Canada",
    workType: "Hybrid",
    description:
      "Led the revamp of the company website, optimized database structures, developed custom programs to streamline business operations, and collaborated on financial analysis tasks.",
    technologies:
      "Javascript, React, Node.js, AWS, Typescript, MYSQL, Tailwind CSS, Svelte",
    otherTechnologies: "Scrum, Microsoft Suite, Google Suite",
    company: "Leading Logistics Firm",
    jobTitle: "Fullstack Dev & Business Analyst Intern",
  },
  {
    duration: "Jun 2021 - Aug 2023",
    location: "Worldwide",
    workType: "Hybrid",
    description:
      "Founded and led a platform connecting creative professionals with clients, addressing freelancing challenges in the creative industry.",
    technologies: "Adobe Suite",
    otherTechnologies: "Microsoft Suite, QuickBooks",
    company: "MediaMatchup",
    jobTitle: "Founder & CEO",
  },
  {
    duration: "Jan 2016 - Jan 2023",
    location: "Worldwide",
    workType: "Hybrid",
    description:
      "Founded Videna Visuals as a freelancer and grew it into a company specializing in crafting compelling visual experiences through expert video editing and innovative graphic design.",
    technologies: "Adobe Suite, Cinema 4D, Blender",
    otherTechnologies: "Microsoft Suite, Google Suite, QuickBooks",
    company: "Videna Visuals",
    jobTitle: "Video Editor & Graphic Designer",
  },
  {
    duration: "Jan 2022 - May 2022",
    location: "Hamilton, Ontario, Canada",
    workType: "Remote",
    description: "",
    technologies: "Adobe Suite, Audacity",
    otherTechnologies: "Slack, Google Suite",
    company: "Im a Mortal",
    jobTitle: "Podcast Sound Engineer Intern",
  },
  {
    duration: "Jan 2022 - May 2022",
    location: "Waterloo, Ontario, Canada",
    workType: "Remote",
    description: "",
    technologies: "Adobe Suite, HTML/CSS, Wix",
    otherTechnologies: "Slack, Google Suite",
    company: "Seeds of Diversity Canada",
    jobTitle: "Video Editor & Frontend Dev Intern",
  },
  {
    duration: "Jun 2019 - Aug 2019",
    location: "Markham, Ontario, Canada",
    workType: "On-site",
    description: "",
    technologies: "N/A",
    otherTechnologies: "N/A",
    company: "Hero Certified Burgers",
    jobTitle: "Crew Member",
  },
  // Add more experiences here...
];

const Experience = () => {
  const [activeIndices, setActiveIndices] = useState([]);

  const toggleDetails = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-auto lg:h-screen bg-light-bg text-light-text dark:bg-dark-bg dark:text-dark-text">
      <div className="flex flex-col items-start max-w-screen-lg p-8 md:p-15">
        <h1 className="text-3xl md:text-6xl font-bold mb-5">
          <span>1.</span>Experience
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-1">
              <div
                className="cursor-pointer flex justify-between items-center"
                onClick={() => toggleDetails(index)}
              >
                <div>
                  <h2 className="text-xl md:text-3xl font-semibold opacity-85 mb-1">
                    {exp.company}
                  </h2>
                  <p className="text-lg md:text-xl opacity-75 mb-1">
                    {exp.jobTitle}
                  </p>
                  <p className="text-lg md:text-xl primary-color">
                    {exp.duration}
                  </p>
                </div>
                <div className="text-2xl">
                  {activeIndices.includes(index) ? (
                    <FiChevronUp />
                  ) : (
                    <FiChevronDown />
                  )}
                </div>
              </div>
              <div
                className={`transition-height duration-500 ease-in-out overflow-hidden ${
                  activeIndices.includes(index) ? "max-h-96" : "max-h-0"
                }`}
              >
                <div
                  className={`content ${
                    activeIndices.includes(index) ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500 ease-in-out`}
                >
                  <p className="text-lg md:text-xl my-1 primary-color">
                    {exp.location} ({exp.workType})
                  </p>
                  <p className="text-md md:text-lg mb-1 opacity-75">
                    {exp.description}
                  </p>
                  <p className="text-md md:text-lg mb-1 opacity-75">
                    <span>Tech Stack: </span>
                    {exp.technologies}
                  </p>
                  <p className="text-md md:text-lg opacity-75">
                    <span>Other: </span>
                    {exp.otherTechnologies}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
