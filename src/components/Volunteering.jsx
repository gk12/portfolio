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
      className="bg-[#98E3E2] flex justify-between items-center w-full h-auto lg:h-[90vh]"
      id="Volunteering"
    >
      <div className="container ml-[10.5rem] py-10">
        <h1 className=" pt-12  md:text-2xl text-xl font-semibold ">
          {" "}
          VOLUNTEERING.
        </h1>
        <p className="pt-3 md:text-xl text-lg text-text">
          A Snapshot of What I Bring.
        </p>
        <div className=" pt-12">
          {items.map((item) => (
            <div className="mb-10" key={item.title}>
              <p className="mb-2 font-semibold">{item.title}</p>
              <div className="flex bg-primary items-center  px-4  rounded-md  max-h-[20rem]  max-w-[50rem] w-[45rem] h-[15rem] bg-[#54c9c7]">
                <p className="md:text-base text-sm">{item.content}</p>
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
