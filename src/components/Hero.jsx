import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white flex items-center py-16 overflow-hidden"
    >
      {/* Background decorative ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[550px] sm:h-[550px] bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8 w-full">
        {/* Left Content */}
        <div className="text-center lg:text-left lg:col-span-7 order-2 lg:order-1">
          {/* Status Badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-5">
            <span className="inline-flex items-center gap-2 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-700/80 text-xs sm:text-sm font-medium text-slate-300 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Available for Opportunities
            </span>
            <span className="inline-flex items-center gap-1.5 bg-slate-900/80 px-3.5 py-1.5 rounded-full border border-slate-700/80 text-xs sm:text-sm font-medium text-cyan-300 backdrop-blur-sm">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Kerala, India
            </span>
          </div>

          <p className="text-cyan-400 font-semibold tracking-wide text-sm uppercase mb-2">
            Full Stack Developer & MCA Student
          </p>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">Justin Santhosh</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg mt-5 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
            MCA student with strong programming fundamentals and hands-on experience developing full-stack, database-driven applications. Proficient in the <span className="text-cyan-300 font-medium">MERN stack</span>, <span className="text-cyan-300 font-medium">MySQL</span>, <span className="text-cyan-300 font-medium">MongoDB</span>, and <span className="text-cyan-300 font-medium">RESTful APIs</span>.
          </p>

          {/* Quick Resume Contact Chips */}
          <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300">
            <a
              href="mailto:justinsanthosh1113@gmail.com"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition"
            >
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              justinsanthosh1113@gmail.com
            </a>
            <span className="hidden sm:inline text-slate-600">•</span>
            <a
              href="tel:+919497852990"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition"
            >
              <svg className="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +91-9497852990
            </a>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8">
            <a
              href="#projects"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center gap-2"
            >
              Explore Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>

            <a
              href="#contact"
              className="border border-slate-700 hover:border-cyan-400 bg-slate-900/60 hover:text-cyan-400 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/Justin-Santhosh-2003"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-slate-800 bg-slate-950/70 hover:border-slate-600 text-slate-300 px-5 py-3.5 rounded-xl transition duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>

        {/* Right Profile & Floating Badges */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative">
            {/* Glow halo */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/30 to-blue-600/30 blur-2xl transform scale-105" />

            {/* Profile Image with Ring */}
            <div className="relative p-2 rounded-full bg-gradient-to-br from-cyan-400 via-slate-800 to-blue-500 shadow-[0_0_60px_rgba(6,182,212,0.3)]">
              <img
                src={profile}
                alt="Justin Santhosh"
                className="w-52 sm:w-64 md:w-72 lg:w-80 h-52 sm:h-64 md:h-72 lg:h-80 object-cover rounded-full transition-transform duration-500 hover:scale-[1.03]"
              />
            </div>

            {/* Floating Highlight Badge 1 */}
            <div className="absolute -bottom-3 -left-4 sm:left-0 bg-slate-900/95 border border-slate-700/80 rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-md flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold text-lg">
                🎓
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400 font-medium">Pursuing</div>
                <div className="text-sm font-bold text-white">MCA @ RIT Kottayam</div>
              </div>
            </div>

            {/* Floating Highlight Badge 2 */}
            <div className="hidden sm:flex absolute -top-3 -right-4 bg-slate-900/95 border border-slate-700/80 rounded-2xl px-4 py-2.5 shadow-xl backdrop-blur-md items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold text-lg">
                ⚡
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-400 font-medium">Specialization</div>
                <div className="text-sm font-bold text-white">MERN & Full Stack</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;