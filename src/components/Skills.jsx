const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Git",
  "GitHub",
  "Responsive Design",
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-24 bg-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Here are some of the technologies and tools I use while
            building modern and responsive web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">

          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-slate-800 border border-slate-700 rounded-xl p-6 text-center hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <h3 className="text-lg font-semibold">
                {skill}
              </h3>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;