import React, { useState } from "react";
import { RiGithubLine } from "react-icons/ri";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectsCard = ({ cardData }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleHoverOut = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex flex-col-reverse lg:flex-row lg:even:flex-row-reverse justify-between items-center w-full max-w-full rounded-xl shadow-xl bg-white font-[500] overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-4 my-4 sm:my-6 lg:my-8 mx-4 sm:mx-6 lg:mx-8 h-full w-full lg:w-[50%]">
        <h2 className="font-semibold text-lg sm:text-xl text-center lg:text-left">{cardData.name}</h2>
        <p className="font-poppins text-gray-500 overflow-y-auto text-sm sm:text-base text-center lg:text-left">
          {cardData.description}
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-2">
          {cardData.techStack.map((tech, index) => (
            <p
              key={index}
              className="border shadow-xl font-poppins bg-white text-center rounded-md p-1 sm:p-2 text-xs sm:text-sm"
            >
              {tech}
            </p>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row h-auto gap-3 justify-center lg:justify-start">
          <div className="flex">
            <p className="flex items-center font-poppins text-sm sm:text-base">
              Github
              <span>
                <a
                  href={cardData.DemoLink[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiGithubLine className="cursor-pointer text-base ml-1" />
                </a>
              </span>
            </p>
          </div>
          <div className="flex">
            <p className="font-poppins flex items-center text-sm sm:text-base">
              Live Demo
              <span>
                <a
                  href={cardData.DemoLink[1]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="cursor-pointer text-base ml-1" />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`hover-container h-48 sm:h-56 lg:h-72 w-full lg:w-[60%] rounded-lg shadow-2xl my-4 sm:my-6 lg:my-8 mx-4 sm:mx-6 lg:mx-8 flex-shrink-0 ${
          isHovered ? "hovered" : ""
        }`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHoverOut}
      >
        <div className="bg-white relative rounded-xl h-48 sm:h-56 lg:h-72 overflow-hidden w-full">
          <img
            src={cardData.imageUrl}
            alt="frontendimg"
            className={`duration-[10000ms] ease-in-out m-0 absolute w-full h-max rounded-xl hover-upward transition-transform ${
              isHovered ? `-translate-y-3/4` : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
