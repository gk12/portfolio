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
      className="bg-[#98E3E2] flex justify-between items-center w-full h-auto lg:h-[90vh]"
      id="Achievements"
    >
      <div className="container ml-[10.5rem] py-4">
        <h1 className="   md:text-2xl text-xl font-semibold ">
          {" "}
          ACHIEVEMENTS.
        </h1>
        <p className="pt-3 md:text-xl text-lg text-text">
          A Snapshot of What I Bring.
        </p>
        <div className="">
          {items.map((item) => (
            <div className="mb-5" key={item.title}>
              <div className="flex bg-primary items-center  px-4  rounded-md  max-h-[5rem]  max-w-[30rem] w-[30rem] h-[10rem] bg-[#54c9c7]">
                <p className="md:text-base text-sm font-medium">
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
