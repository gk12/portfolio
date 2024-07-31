import React from "react";
import htmlImage from "../assets/image/html.png";
import cssImage from "../assets/image/css.png";
import reactjsImage from "../assets/image/reactjs.png";
import nodejsImage from "../assets/image/nodejs.png";
import expressjsImage from "../assets/image/expressJs.png";
import mongoDbImage from "../assets/image/mongoDb.png";
import mysqlImage from "../assets/image/mysql.png";
import gitImage from "../assets/image/git.png";
import gitHubImage from "../assets/image/github.png";
import socketImage from "../assets/image/socket.svg";
import dockerImage from "../assets/image/docker.png";
import tailwindIcon from "../assets/image/tailwindIcon.svg";
import awsImage from "../assets/image/aws.png";
import langchain from "../assets/image/langchain-logo-png_seeklogo-528369.png";
const Skills = () => {
  const items = [
    {
      title: "Front End",
      content: [
        {
          title: "HTML",
          image: htmlImage,
        },
        {
          title: "CSS",
          image: cssImage,
        },
        {
          title: "React.js",
          image: reactjsImage,
        },
        {
          title: "Tailwind Css",
          image: tailwindIcon,
        },
        // Add more front-end technologies
      ],
    },
    {
      title: "Back End",
      content: [
        {
          title: "Node.js",
          image: nodejsImage,
        },
        {
          title: "Express.js",
          image: expressjsImage,
        },
        // Add more back-end technologies
      ],
    },
    {
      title: "Database",
      content: [
        {
          title: "MongoDB",
          image: mongoDbImage,
        },
        {
          title: "MySQL",
          image: mysqlImage,
        },
      ],
    },
    {
      title: "Tools",
      content: [
        {
          title: "Git",
          image: gitImage,
        },
        {
          title: "GitHub",
          image: gitHubImage,
        },
        {
          title: "Socket",
          image: socketImage,
        },
        {
          title: "Docker",
          image: dockerImage,
        },
        {
          title: "AWS",
          image: awsImage,
        },
        {
          title: "Langchain",
          image: langchain,
        },
      ],
    },
  ];
  return (
    <div
      className="bg-[#98E3E2] flex justify-between items-center w-full h-auto lg:h-[90vh]"
      id="Skills"
    >
      <div className="container ml-[10.5rem] py-10">
        <h1 className=" pt-12  md:text-2xl text-xl font-semibold ">
          {" "}
          My Skill Set.
        </h1>
        <p className="pt-3 md:text-xl text-lg text-text">
          A Snapshot of What I Bring.
        </p>
        <div className=" pt-12">
          {items.map((item) => (
            <div className="mb-10" key={item.title}>
              <p className="mb-2">{item.title}</p>
              <div className="flex flex-wrap  items-center gap-6 ">
                {item.content.map((subItem) => (
                  <div
                    key={subItem.title}
                    className="flex bg-primary items-center gap-4 px-4 py-3 rounded-md md:w-48 md:h-16 w-36 h-14 bg-[#54c9c7]"
                  >
                    <img
                      src={subItem.image}
                      className="nd:w-11 w-9"
                      alt={subItem.title}
                    />
                    <p className="md:text-base text-sm">{subItem.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
