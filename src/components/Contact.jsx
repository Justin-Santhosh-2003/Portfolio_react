function Contact() {
  return (
    <section
      id="contact"
      className="py-20 lg:py-24 bg-slate-900 text-white"
    >
      <div className="max-w-3xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="mt-4 text-slate-400">
            Feel free to get in touch for collaborations, projects,
            or just to say hello!
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full bg-slate-800 border border-slate-700 rounded-xl px-5 py-4 text-white placeholder-slate-400 resize-none focus:outline-none focus:border-cyan-400 transition"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold py-4 rounded-xl transition-all duration-300 hover:scale-[1.02]"
          >
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;