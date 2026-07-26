function About() {
  return (
    <section
      id="about"
      className="py-20 lg:py-24 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Get to know a little more about me, my education, and my
            passion for web development.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* About Card */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-cyan-400 transition duration-300">

            <h3 className="text-2xl font-semibold text-cyan-400 mb-5">
              About Me
            </h3>

            <p className="text-slate-300 leading-8">
              Hello! I'm <span className="font-semibold text-white">Justin Santhosh</span>,
              an MCA student passionate about full-stack web development.
              I enjoy designing responsive websites and building
              applications that solve real-world problems.
            </p>

            <p className="text-slate-300 leading-8 mt-5">
              I mainly work with HTML, CSS, JavaScript, React,
              Tailwind CSS, Node.js, Express.js, and MongoDB.
              I'm always eager to learn new technologies and improve
              my development skills.
            </p>

          </div>

          {/* Education Card */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8 hover:border-cyan-400 transition duration-300">

            <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
              Education
            </h3>

            <div className="space-y-8">

              <div>
                <h4 className="text-xl font-semibold">
                  Master of Computer Applications (MCA)
                </h4>

                <p className="text-slate-400 mt-1">
                  Rajiv Gandhi Institute of Technology (RIT Kottayam)
                </p>

                <p className="text-slate-500">
                  Kottayam, Kerala
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold">
                  Interests
                </h4>

                <p className="text-slate-400 mt-1">
                  Full Stack Development • React • MERN Stack • UI/UX Design
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;