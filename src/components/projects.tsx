export default function Projects() {
  const projects = [
    {
      title: "Fruit Detection",
      description: "API that classifies pictures of fruits and vegetables.",
      technologies: ["Python", "Tensorflow", "Flask"],
    },
    {
      title: "iOS Application",
      description:
        "Mobile application to post pictures and stories about unique places in the Netherlands.",
      technologies: ["Swift", "SwiftUI", "LoopBack4", "IMB Cloud"],
    },
    {
      title: "SMS Automation",
      description: "Python script to send SMS daily to custom mobile numbers.",
      technologies: ["Python", "Twilio API", "AWS Cloud"],
    },
    {
      title: "Personal Website",
      description: "Portfolio website developed using React and Tailwind.",
      technologies: ["React", "TailwindCSS"],
    },
  ];

  return (
    <section className="text-black py-32" id="projects">
      <div>
        <h2 className="text-3xl font-bold mb-20">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <div className="w-full p-5 text-black border-2 rounded-md border-gray-300">
            <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
              {project.title}
            </h3>
            <p className="md:text-base mb-2 md:mb-3">{project.description}</p>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
              {project.technologies.map((item) => (
                <span
                  key={item}
                  className="inline-block px-2 py-1 bg-gray-300 rounded-md"
                >
                  {item}
                </span>
              ))}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
