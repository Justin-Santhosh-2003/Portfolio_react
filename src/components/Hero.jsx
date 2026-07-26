import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen bg-linear-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center pt-20"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <div className="text-center md:text-left order-2 md:order-1">

          <p className="text-cyan-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            Justin <span className="text-cyan-400">Santhosh</span>
          </h1>

          <h2 className="text-xl sm:text-2xl lg:text-3xl text-slate-300 mt-4">
            Full Stack Developer
          </h2>

          <p className="text-slate-400 mt-6 max-w-xl mx-auto md:mx-0 leading-8">
            Passionate MCA student who enjoys building responsive web
            applications using React, Tailwind CSS, JavaScript, and the MERN
            stack.
          </p>

          {/* Availability Badge */}
          <div className="mt-6 inline-flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full border border-slate-700">
            <span className="h-2 w-2 rounded-full bg-green-400"></span>
            <span className="text-sm text-slate-300">
              Available for opportunities
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-10">

            <button className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold px-7 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-cyan-500/30">
              Hire Me
            </button>

            <button className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-7 py-3 rounded-lg transition-all duration-300 hover:scale-105">
              Download CV
            </button>

          </div>

        </div>

        {/* Right Image */}
        <div className="flex justify-center order-1 md:order-2">

          <img
            src={profile}
            alt="Justin Santhosh"
            className="w-56 sm:w-72 md:w-80 lg:w-105 rounded-full border-8 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.35)] hover:scale-105 transition-transform duration-300"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;