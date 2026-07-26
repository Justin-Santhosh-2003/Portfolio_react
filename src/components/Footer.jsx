function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        <p className="text-slate-400 text-center md:text-left">
          © {year} Justin Santhosh. All Rights Reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="https://github.com/Justin-Santhosh-2003"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="hover:text-cyan-400 transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:your-email@example.com"
            className="hover:text-cyan-400 transition"
          >
            Email
          </a>

        </div>

      </div>
    </footer>
  );
}

export default Footer;