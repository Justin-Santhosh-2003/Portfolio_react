import swapsphereImg from "../assets/projects/swapsphere.jpg";
import aiNotesImg from "../assets/projects/ai_notes.jpg";
import realEstateImg from "../assets/projects/real_estate.jpg";
import vehicleRentalImg from "../assets/projects/vehicle_rental.jpg";

const projects = [
  {
    title: "SwapSphere – Smart Barter Platform",
    subtitle: "Intelligent Exchange Matching System",
    category: "Full Stack (MERN)",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT Auth", "Circular Matching Algorithm"],
    image: swapsphereImg,
    github: "https://github.com/Justin-Santhosh-2003",
    demo: "https://justin-santhosh-portfolio.vercel.app",
    bullets: [
      "Developed a full-stack barter platform that enables users to exchange items seamlessly without monetary transactions.",
      "Implemented JWT-based authentication, role-based authorization, item and category management, and end-to-end exchange workflows.",
      "Designed an intelligent matching system supporting both direct 2-user exchanges and 3-user circular exchange chains to uncover viable swaps when direct matches are unavailable.",
    ],
  },
  {
    title: "AI-Powered Study Notes Management System",
    subtitle: "AI Summaries, Flashcards & Quiz Engine",
    category: "AI & Full Stack",
    stack: ["MERN Stack", "AI API Integration", "RESTful APIs", "Quiz Analytics", "Tailwind CSS"],
    image: aiNotesImg,
    github: "https://github.com/Justin-Santhosh-2003",
    demo: "https://justin-santhosh-portfolio.vercel.app",
    bullets: [
      "Developed a full-stack learning platform that utilizes AI to transform unstructured study notes into concise summaries, flashcards, and quizzes.",
      "Integrated dynamic AI API pipelines with the backend to generate structured educational revision material in real-time.",
      "Engineered quiz performance tracking and analytics, monitoring average attempt scores to help students measure and optimize study retention.",
    ],
  },
  {
    title: "Real Estate Management Website",
    subtitle: "Property Browsing & Management Portal",
    category: "Full Stack (MERN)",
    stack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "RESTful APIs", "Responsive UI"],
    image: realEstateImg,
    github: "https://github.com/Justin-Santhosh-2003",
    demo: "https://justin-santhosh-portfolio.vercel.app",
    bullets: [
      "Built a full-stack property management application allowing users to browse, filter, and manage real estate listings.",
      "Engineered complete property listing lifecycle with a scalable MongoDB schema and robust RESTful API endpoints.",
      "Crafted intuitive, responsive user interfaces for high-converting property showcases, virtual tours, and administrative controls.",
    ],
  },
  {
    title: "Vehicle Rental Website",
    subtitle: "Multi-Category Fleet Booking Engine",
    category: "Web Application",
    stack: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3", "Booking Engine"],
    image: vehicleRentalImg,
    github: "https://github.com/Justin-Santhosh-2003",
    demo: "https://justin-santhosh-portfolio.vercel.app",
    bullets: [
      "Developed a multi-category vehicle rental management system supporting cars, motorcycles, and bicycles.",
      "Implemented secure user authentication, advanced search with granular filters, real-time availability checking, and customer dashboards.",
      "Engineered a dedicated administrative interface for fleet inventory and booking dispatch, coupled with a simulated payment transaction flow.",
    ],
  },
];

function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Featured Portfolio
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Academic <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Production-grade academic projects featured on my resume, showcasing full-stack development, database architecture, and AI integration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 rounded-2xl overflow-hidden border border-slate-800 shadow-xl hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col group"
            >
              {/* Image Container with subtle overlay */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-cyan-300 border border-slate-700">
                  {project.category}
                </span>
              </div>

              {/* Project Body */}
              <div className="flex flex-col grow p-7 sm:p-8">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400/90 mt-1 mb-4">
                    {project.subtitle}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Resume Bullets */}
                <ul className="space-y-2.5 text-slate-300 text-sm leading-relaxed grow mb-8">
                  {project.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-4 items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] text-center bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 px-4 rounded-xl transition-all shadow-md shadow-cyan-500/20 hover:scale-[1.02] flex items-center justify-center gap-2 text-sm"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    GitHub Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] text-center border border-slate-700 hover:border-cyan-400 bg-slate-800/80 hover:text-cyan-300 text-slate-200 font-semibold py-3 px-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-2 text-sm"
                  >
                    <span>View Project</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
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