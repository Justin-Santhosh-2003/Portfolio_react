import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";

const projects = [
  {
    title: "SwapSphere",
    description:
      "A MERN-based barter platform featuring intelligent item matching and secure exchanges.",
    image: project1,
    github: "https://github.com/Justin-Santhosh-2003",
    demo: "#",
  },
  {
    title: "TextIQ",
    description:
      "A React application offering text analysis, formatting, and productivity tools.",
    image: project2,
    github: "https://github.com/Justin-Santhosh-2003",
    demo: "#",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather application displaying real-time weather information using a weather API.",
    image: project3,
    github: "https://github.com/Justin-Santhosh-2003",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills in frontend,
            backend, and full-stack web development.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-lg hover:-translate-y-2 hover:border-cyan-400 transition-all duration-300 flex flex-col"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Project Content */}
              <div className="flex flex-col grow p-6">

                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-slate-400 leading-7 grow">
                  {project.description}
                </p>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-3">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg transition"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 font-semibold py-3 rounded-lg transition"
                  >
                    Live Demo
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;