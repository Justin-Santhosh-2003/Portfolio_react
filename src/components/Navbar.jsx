import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">

        {/* Logo */}
        <a
          href="#home"
          className="text-3xl font-bold text-white"
          onClick={() => setMenuOpen(false)}
        >
          Justin<span className="text-cyan-400">.</span>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-slate-300">

          <li>
            <a href="#home" className="hover:text-cyan-400 transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-cyan-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </a>
          </li>

        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800">

          <ul className="flex flex-col items-center py-4 text-slate-300">

            <li className="py-3">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                Home
              </a>
            </li>

            <li className="py-3">
              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                About
              </a>
            </li>

            <li className="py-3">
              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                Skills
              </a>
            </li>

            <li className="py-3">
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                Projects
              </a>
            </li>

            <li className="py-3">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-cyan-400"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>
      )}

    </header>
  );
}

export default Navbar;