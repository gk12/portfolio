const Achievement = () => {
  const items = [
    {
      content: "Pupil at Codeforces(max. 1331).",
    },
    {
      content: "Solved 400+ problems at LeetCode.",
    },
    {
      content: "Solved 300+ problems at GeeksForGeeks.",
    },
    {
      content:
        "Placed second in the Code to Innovate Hackathon 2019-2020 (Hackerearth)",
    },
    {
      content: "Runner-up in Smart-O-Thon Hackathon 2020-2021(Hackerearth).",
    },
  ];
  return (
    <div
      className="bg-[#98E3E2] flex justify-between items-center w-full h-auto lg:h-[90vh] pt-4 sm:pt-8 lg:pt-20"
      id="Achievements"
    >
      <div className="container mx-4 sm:mx-6 lg:mx-8 xl:mx-44 py-4 sm:py-6 lg:py-8 max-w-7xl">
        <h1 className="pt-4 sm:pt-6 lg:pt-8 md:text-2xl text-xl font-semibold">
          {" "}
          ACHIEVEMENTS.
        </h1>
        <p className="pt-3 md:text-xl text-lg text-text">
          A Snapshot of What I Bring.
        </p>
        <div className="">
          {items.map((item, index) => (
            <div className="mb-5" key={index}>
              <div className="flex bg-primary items-center px-4 rounded-md max-h-[5rem] max-w-full w-full h-auto min-h-[4rem] bg-[#54c9c7] hover:bg-[#4ab5b3] transition-colors duration-200">
                <p className="text-sm sm:text-base font-medium">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
