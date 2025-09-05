const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: "Software Engineer",
      company: "Boffin Blocks",
      location: "Remote",
      date: "July 2023 - Present",
      responsibilities: [
        `Collaborated closely with cross-functional teams to rigorously test,
        optimize, and ensure the seamless performance of applications`,
        `Managed MySQL and NoSQL databases to store and retrieve application
        data efficiently`,
        `Deployed applications to cloud platforms AWS and CPanel ensuring scalability,
        availability, and security of the deployed applications.`,
        `Technology Used Node Js,Express Js, React Js, Tailwind CSS,TypeScript,Mongodb,Mysql and Langchain`,
      ],
    },
    {
      id: 2,
      title: "Full Stack Developer Intern",
      company: "Corizo",
      location: "Remote",
      date: "July 2022 - Dec 2023",
      responsibilities: [
        `Implemented RESTful APIs using Node.js and Express, facilitating
        seamless communication between frontend and backend.
        `,
        `Collaborated with senior developers to integrate searching,sorting and Hash
        Maps algorithms into backend processes`,

        "Technology Used Node Js,Express Js, React Js, Tailwind CSS,Mongodb and TypeScript",
      ],
    },
  ];
  return (
    <div className="bg-[#B4F2F1] min-h-screen text-black pt-4 sm:pt-8 lg:pt-20" id="Experience">
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
                  <span className="text-sm font-medium text-gray-600">{item.date}</span>
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
                    <span className="text-sm font-medium text-gray-600">{item.date}</span>
                  </div>
                  
                  <ul className="list-disc pl-4 space-y-2">
                    {item.responsibilities.map((summery, index) => (
                      <li key={index} className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700">
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
