function About() {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Rajiv Gandhi Institute of Technology, Kottayam",
      period: "2025 – Present",
      score: "8.55 SGPA",
      status: "In Progress",
      description:
        "Specializing in advanced software engineering, distributed systems, full-stack web architectures, and database design.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "CMS College Kottayam",
      period: "2021 – 2024",
      score: "7.68 CCPA",
      status: "Graduated",
      description:
        "Built solid foundations in data structures, algorithms, object-oriented programming (Java, C, C++), and web development.",
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Baker Vidyapeeth Kottayam",
      period: "2021",
      score: "85.8%",
      status: "Completed",
      description:
        "Focused on computer science, mathematics, physics, and chemistry with strong academic standing.",
    },
    {
      degree: "Secondary School Education (10th)",
      institution: "Baker Vidyapeeth Kottayam",
      period: "2019",
      score: "84.6%",
      status: "Completed",
      description:
        "Distinction in fundamental sciences and analytical reasoning.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Get To Know Me
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            A developer who transforms ideas into scalable, efficient, and user-centric web applications.
          </p>
        </div>

        {/* Bio & Quick Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
          {/* Main Bio Card */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800/90 p-8 sm:p-10 hover:border-cyan-400/50 transition-all duration-300 shadow-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </span>
                <h3 className="text-2xl font-bold text-white">Profile Summary</h3>
              </div>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
                I am an <span className="text-cyan-300 font-semibold">MCA student</span> with strong programming fundamentals and hands-on experience in developing full-stack, database-driven applications.
              </p>

              <p className="text-slate-300 leading-relaxed text-base sm:text-lg mt-4">
                Proficient in <span className="text-white font-medium">JavaScript, Python, Java, C, C++, PHP, HTML, and CSS</span>, with practical experience in the <span className="text-cyan-300 font-medium">MERN stack</span> (MongoDB, Express.js, React.js, Node.js), <span className="text-white font-medium">MySQL, RESTful APIs</span>, and both frontend and backend development.
              </p>

              <p className="text-slate-400 leading-relaxed text-base mt-4">
                I am deeply interested in applying my technical knowledge and problem-solving skills to build practical, scalable, and reliable applications that deliver real value.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Full-Stack Architecture
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Database Optimization
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                RESTful Web Services
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                AI API Integrations
              </span>
            </div>
          </div>

          {/* Quick Info & Highlights */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-slate-900/90 rounded-2xl border border-slate-800/90 p-8 hover:border-cyan-400/50 transition-all duration-300 shadow-xl">
              <h4 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                <span className="text-cyan-400">⚡</span> Quick Information
              </h4>

              <dl className="space-y-4 text-sm sm:text-base">
                <div className="flex justify-between border-b border-slate-800/80 pb-3">
                  <dt className="text-slate-400 font-medium">Location</dt>
                  <dd className="text-slate-200 font-semibold">Kerala, India</dd>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-3">
                  <dt className="text-slate-400 font-medium">Degree</dt>
                  <dd className="text-cyan-400 font-semibold">MCA (Pursuing)</dd>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-3">
                  <dt className="text-slate-400 font-medium">Email</dt>
                  <dd className="text-slate-200 font-semibold truncate max-w-[200px] sm:max-w-none">
                    <a href="mailto:justinsanthosh1113@gmail.com" className="hover:text-cyan-400 transition">
                      justinsanthosh1113@gmail.com
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between border-b border-slate-800/80 pb-3">
                  <dt className="text-slate-400 font-medium">Phone</dt>
                  <dd className="text-slate-200 font-semibold">
                    <a href="tel:+919497852990" className="hover:text-cyan-400 transition">
                      +91 9497852990
                    </a>
                  </dd>
                </div>
                <div className="flex justify-between items-center pt-1">
                  <dt className="text-slate-400 font-medium">Portfolio</dt>
                  <dd className="text-cyan-400 font-semibold text-xs sm:text-sm">
                    justin-santhosh-portfolio.vercel.app
                  </dd>
                </div>
              </dl>
            </div>

            {/* NPTEL Certification Teaser */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-850 rounded-2xl border border-cyan-500/30 p-6 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl font-bold">
                  🥈
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">
                    Certified by IIT Kharagpur
                  </span>
                  <h4 className="text-lg font-bold text-white leading-tight">
                    Cloud Computing (NPTEL)
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    Silver Medal Elite Certification • Score: 78%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div id="education" className="pt-8">
          <div className="text-center mb-12">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Academic Journey
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
              Education & Qualifications
            </h3>
            <p className="text-slate-400 mt-2 text-sm sm:text-base">
              Detailed academic progression and verified performance metrics from my resume.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="bg-slate-900/80 rounded-2xl border border-slate-800 p-7 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {edu.score}
                    </span>
                  </div>

                  <h4 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h4>

                  <p className="text-cyan-400/90 font-medium text-sm mb-3">
                    {edu.institution}
                  </p>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span>Status: <strong className="text-slate-200">{edu.status}</strong></span>
                  <span className="text-slate-500">Kottayam, Kerala</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;