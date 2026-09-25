function Certifications() {
  const certs = [
    {
      title: "Cloud Computing",
      organization: "IIT Kharagpur & NPTEL",
      medal: "Silver Medal",
      score: "78%",
      type: "Elite Certification",
      description:
        "Comprehensive certification administered by the Indian Institute of Technology (IIT) Kharagpur via NPTEL. Validates deep understanding of cloud virtualization, distributed computing architectures, scalable cloud infrastructure, and resource management.",
      topics: [
        "Cloud Virtualization & Hypervisors",
        "Distributed Computing & Storage",
        "Resource Orchestration & Scaling",
        "Cloud Security & SLA Management",
      ],
    },
  ];

  return (
    <section id="certifications" className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Credentials & Recognitions
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Professional <span className="text-cyan-400">Certifications</span>
          </h2>
          <div className="w-16 h-1 bg-cyan-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
            Standardized and verified certifications validating technical mastery.
          </p>
        </div>

        {/* Certifications Display */}
        <div className="max-w-4xl mx-auto">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-10 shadow-2xl hover:border-cyan-500/60 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Background ambient shine */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-slate-800 via-slate-700 to-slate-600 border border-slate-500/40 flex items-center justify-center text-3xl shadow-inner shrink-0">
                    🥈
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                        {cert.medal} • {cert.score}
                      </span>
                      <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-300 border border-blue-500/20">
                        {cert.type}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      {cert.title}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm sm:text-base mt-0.5">
                      {cert.organization}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {cert.description}
                </p>

                <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">
                  Key Domains Covered:
                </h4>
                <div className="flex flex-wrap gap-2.5">
                  {cert.topics.map((topic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-200 flex items-center gap-2"
                    >
                      <span className="text-cyan-400">✓</span>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certifications;
