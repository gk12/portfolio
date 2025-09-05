const Volunteering = () => {
  const items = [
    {
      title: "President - CodeChef AGC Student Chapter",
      content:
        "As the Student Chapter President of CodeChef AGC Chapter, I led initiatives to promote competitive programming and enhance coding skills among students. My role involved organizing workshops, coding contests, and collaborative events, fostering a community of learners and problem solvers. I facilitated sessions on algorithmic thinking and competitive programming techniques, helping members prepare for national and international coding competitions. Through this leadership position, I honed my organizational, team management, and public speaking skills, while also contributing to the growth of a vibrant coding culture on campus.",
    },
    {
      title: "Co-Lead - GeeksforGeeks AGC Student Chapter",
      content:
        "Co-led the GeeksforGeeks AGC Chapter, organizing coding sessions, workshops, and tech talks to support students in building strong foundational skills in programming and computer science. Collaborated with a diverse team to create learning opportunities, guide members through interview preparation, and facilitate peer-to-peer mentorship. Focused on bridging the gap between academic knowledge and real-world technical expertise",
    },
  ];
  return (
    <div
      className="bg-[#98E3E2] flex justify-between items-center w-full h-auto lg:h-[90vh] pt-4 sm:pt-8 lg:pt-20"
      id="Volunteering"
    >
      <div className="container mx-4 sm:mx-6 lg:mx-8 xl:mx-44 py-4 sm:py-6 lg:py-10 max-w-7xl">
        <h1 className="pt-4 sm:pt-6 lg:pt-12 md:text-2xl text-xl font-semibold">
          {" "}
          VOLUNTEERING.
        </h1>
        <p className="pt-3 md:text-xl text-lg text-text">
          A Snapshot of What I Bring.
        </p>
        <div className="pt-12">
          {items.map((item, index) => (
            <div className="mb-10" key={index}>
              <p className="mb-2 font-semibold text-sm sm:text-base lg:text-lg">{item.title}</p>
              <div className="flex bg-primary items-center px-4 rounded-md max-h-[20rem] max-w-full w-full h-auto min-h-[12rem] bg-[#54c9c7] hover:bg-[#4ab5b3] transition-colors duration-200">
                <p className="text-sm sm:text-base">{item.content}</p>
              </div>
            </div>
          ))}
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Volunteering;
