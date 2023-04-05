export default function Experience() {
  const jobs = [
    {
      title: "Internship, DAF Trucks",
      date: "02/2023 – present",
      location: "Eindhoven, Netherlands",
      description: [
        "Investigate and migrate SharePoint workflows to Power Automate.",
      ],
    },
    {
      title: "Software Developer, Révész Racing",
      date: "2022",
      location: "Remote",
      description: [
        "Developed a livetiming system in JavaScript using React.js and WebSockets.",
      ],
    },
    {
      title: "Software Developer Intern, EuroAdvance",
      date: "2021",
      location: "Nyíregyháza, Hungary",
      description: [
        "Designed and developed a partner registration system and a chat module in PHP and JavaScript.",
      ],
    },
  ];

  return (
    <section className="text-black py-16" id="experience">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold mb-20">Experience</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {jobs.map((jobExperience, index) => (
          <div
            key={index}
            className="w-full p-5 text-black border-2 rounded-md border-gray-300"
          >
            <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
              {jobExperience.title}
            </h3>
            <p className="md:text-base mb-2 md:mb-3 text-gray-600">
              {jobExperience.date} | {jobExperience.location}
            </p>
            <ul className="list-inside pt-2">
              {jobExperience.description.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
