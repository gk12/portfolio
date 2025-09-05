import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const portfolioData = {
    portfolioCards: [
      {
        id: 1, //supershop
        name: "SuperShop",
        description:
          "SuperShop is a comprehensive e-commerce website designed for selling a wide range of electronic devices, including TVs, mobile phones, laptops, and more. The platform provides a seamless shopping experience for customers looking for the latest in technology and electronics.",
        imageUrl:
          "https://res.cloudinary.com/gk35044/image/upload/v1722430938/Screenshot_from_2024-07-31_18-32-02_ddsgnc.png",
        techStack: ["Node Js", "Express Js", "React Js", "Mongodb"],
        DemoLink: [
          "https://github.com/gk12/Supershop-website",
          "https://github.com/gk12/Supershop-website",
          // "https://netflixgpt-ecb74.web.app/",
        ],
      },
      {
        id: 2, //aiaas
        name: "AIAAS",
        description:
          "The AI-Powered Customer Support System is an advanced solution designed to enhance customer service experiences by leveraging the power of artificial intelligence. This system automates customer interactions, providing quick and accurate responses to customer inquiries, resolving issues efficiently, and offering personalized support 24/7.",
        imageUrl:
          "https://res.cloudinary.com/gk35044/image/upload/v1722430240/Screenshot_from_2024-07-31_18-18-17_s0tp7g.png",
        techStack: ["Node Js", "Express Js", "React Js", "Mongodb"],
        DemoLink: [
          "https://aichatbot.boffinblocks.com/",
          "https://aichatbot.boffinblocks.com/",
        ],
      },
      {
        id: 3, //socket chat app
        name: "Chatting Chat",
        description:
          "The Real-Time Chat Application is a dynamic platform designed to facilitate seamless bidirectional communication between users. Leveraging Socket.io, this chat app provides instant messaging capabilities, enabling users to interact in real-time one-on-one conversations.",
        imageUrl:
          "https://res.cloudinary.com/gk35044/image/upload/v1722430427/Screenshot_from_2024-07-31_18-23-13_q0obqq.png",
        techStack: ["React Js", "Node Js", "Mongodb", "Socket.IO"],
        DemoLink: [
          "https://github.com/gk12/RealTime_ChatApp",
          "https://realtime-chatapp-1.onrender.com",
        ],
      },

      {
        id: 4, //copyleaks
        name: "Plagiarism Detector",
        description:
          "The Plagiarism and AI Detection Website is an advanced platform designed to identify and highlight instances of plagiarism and AI-generated content in textual documents. Utilizing the robust capabilities of the Copyleaks API, this website provides accurate and efficient detection services for academic, professional, and personal use",
        imageUrl:
          "https://res.cloudinary.com/gk35044/image/upload/v1722430210/Screenshot_from_2024-07-31_18-15-18_mwmbtd.png",
        techStack: ["Node Js", "Express Js", "Angular", "MySql", "LangChain"],
        DemoLink: [
          "https://frontend.skylineacademic.com/signin",
          "https://frontend.skylineacademic.com/signin",
        ],
      },
    ],
  };
  return (
    <div className="flex flex-col w-full h-auto bg-[#B4F2F1] pt-4 sm:pt-8 lg:pt-20" id="Projects">
      <div className="mx-4 sm:mx-6 lg:mx-8 xl:mx-44 pt-4 sm:pt-6 lg:pt-12 max-w-7xl">
        <h1 className="text-xl sm:text-2xl font-bold">MY PROJECTS</h1>
        <h2 className="text-base sm:text-lg">
          Each project is a unique piece of development
        </h2>
      </div>
      <div className="w-[90%] sm:w-[85%] lg:w-[80%] mx-auto flex flex-col justify-center items-center text-center py-10 gap-10 sm:gap-16 lg:gap-20 rounded bg-[#B4F2F1] mb-20">
        {portfolioData.portfolioCards.map((card) => (
          <ProjectsCard key={card.id} cardData={card} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
