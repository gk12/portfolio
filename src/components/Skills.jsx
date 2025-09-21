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
          title: "React Js",
          image: reactjsImage,
        },
        {
          title: "Next Js",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
        },
        {
          title: "HTML",
          image: htmlImage,
        },
        {
          title: "CSS",
          image: cssImage,
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
          title: "Node Js",
          image: nodejsImage,
        },
        {
          title: "Nest Js",
          image: "https://nestjs.com/img/logo_text.svg",
        },
        {
          title: "Express Js",
          image: expressjsImage,
        },
        // Add more back-end technologies
      ],
    },
    {
      title: "Database",
      content: [
        {
          title: "MySQL",
          image: mysqlImage,
        },
        {
          title: "MongoDB",
          image: mongoDbImage,
        },
        {
          title: "PostgreSQL",
          image:
            "https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg",
        },
      ],
    },
    {
      title: "AI",
      content: [
        {
          title: "Langchain",
          image: langchain,
        },
        {
          title: "Chromadb",
          image: "https://avatars.githubusercontent.com/u/112831612?s=200&v=4",
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
          title: "Elastic Search",
          image: "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
        },
      ],
    },
  ];
  return (
    <div
      className="bg-[#98E3E2] flex justify-between items-center w-full h-auto lg:h-[98vh] pt-4 sm:pt-8 lg:pt-20"
      id="Skills"
    >
      <div className="container mx-4 sm:mx-6 lg:mx-8 xl:mx-44 py-4 sm:py-6 lg:py-10 max-w-7xl">
        <h1 className="pt-4 sm:pt-6 lg:pt-12 md:text-2xl text-xl font-semibold">
          {" "}
          My Skill Set.
        </h1>
        <p className="pt-3 md:text-xl text-lg text-text">
          A Snapshot of What I Bring.
        </p>
        <div className=" pt-4">
          {items.map((item) => (
            <div className="mb-10" key={item.title}>
              <p className="mb-2">{item.title}</p>
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6">
                {item.content.map((subItem) => (
                  <div
                    key={subItem.title}
                    className="flex bg-primary items-center gap-2 sm:gap-3 lg:gap-4 px-2 sm:px-3 lg:px-4 py-2 sm:py-3 rounded-md w-auto min-w-[120px] sm:min-w-[140px] lg:min-w-[180px] h-12 sm:h-14 lg:h-16 bg-[#54c9c7] hover:bg-[#4ab5b3] transition-colors duration-200"
                  >
                    <img
                      src={subItem.image}
                      className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 flex-shrink-0"
                      alt={subItem.title}
                    />
                    <p className="text-xs sm:text-sm lg:text-base font-medium whitespace-nowrap">
                      {subItem.title}
                    </p>
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
