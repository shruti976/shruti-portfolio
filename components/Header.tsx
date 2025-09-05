export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-gray-200">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-semibold">Shruti Singh</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#experience" className="hover:opacity-70">Experience</a>
          <a href="#projects" className="hover:opacity-70">Projects</a>
          <a href="#skills" className="hover:opacity-70">Skills</a>
          <a href="#contact" className="hover:opacity-70">Contact</a>
        </nav>
      </div>
    </header>
  );
}
