const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "Zeelab Pharmacy PVT LTD",
      location: "New Delhi, India",
      date: "May 2025 - Present",
      responsibilities: [
        `Developed RESTful APIs and modular backend with NestJS to facilitate scalable development.`,
        `Optimized and designed PostgreSQL database schemas for data integrity and performance.`,
        `Implemented Elasticsearch to create high-performance search and filtering mechanism.`,
        `Developed responsive and dynamic user interfaces with Next.js, TypeScript, and Tailwind CSS.`,
        `Worked with the lead developers in applying algorithms for searching, and data structures.`,
        `Improved the performance and reliability of the application using debugging, testing, and optimization.`,
        `Technologies Used: Next.js, NestJS, React.js, Tailwind CSS, PostgreSQL, Elasticsearch, TypeScript.`,
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Boffin Blocks",
      location: "Chandigarh, India",
      date: "July 2023 - May 2025",
      responsibilities: [
        `Designed scalable backend services using Node.js and  Express.js.`,
        `Tuned MySQL and databases for high-performance data management.`,
        `Developed responsive and dynamic front-end interfaces with React.js,Next.js, TypeScript, and Tailwind CSS.`,
        `Developed an AI-based chatbot using LangChain and ChromaDB for intelligent automation.`,
        `Deployed and hosted secure, scalable applications on AWS and cPanel.`,
        `Partnered with cross-functional teams to deliver end-to-end product features.`,
        `Enhanced application reliability through rigorous testing, debugging, and performance tuning.`,
      ],
    },
  ];
  return (
    <div
      className="bg-[#B4F2F1] min-h-screen text-black pt-4 sm:pt-8 lg:pt-20"
      id="Experience"
    >
      <div className="container mx-4 sm:mx-6 lg:mx-8 xl:mx-44 max-w-7xl py-6 sm:py-8 lg:py-12">
        <h1 className="pt-2 sm:pt-4 lg:pt-6 md:text-2xl text-xl font-semibold">
          Professional Journey.
        </h1>
        <p className="pt-2 sm:pt-3 md:text-xl text-lg text-text">
          Where I've Made an Impact.
        </p>
        <div className="mx-auto max-w-5xl">
          {workExperience.map((item) => (
            <div key={item.id} className="mt-8 sm:mt-10">
              <div className="flex flex-col lg:flex-row lg:gap-8">
                {/* Date section - hidden on mobile, shown on desktop */}
                <div className="hidden lg:flex lg:flex-col lg:items-start lg:w-48 lg:flex-shrink-0">
                  <span className="text-sm font-medium text-gray-600">
                    {item.date}
                  </span>
                </div>

                {/* Content section */}
                <div className="flex-1 min-w-0">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-2">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-2 text-gray-700">
                    {item.company} | {item.location}
                  </p>

                  {/* Date section - shown on mobile, hidden on desktop */}
                  <div className="lg:hidden mb-3">
                    <span className="text-sm font-medium text-gray-600">
                      {item.date}
                    </span>
                  </div>

                  <ul className="list-disc pl-4 space-y-2">
                    {item.responsibilities.map((summery, index) => (
                      <li
                        key={index}
                        className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700"
                      >
                        {summery}
                      </li>
                    ))}
                  </ul>
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
