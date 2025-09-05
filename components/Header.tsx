export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-ink/90 border-b border-gray-700">
      <div className="container flex items-center justify-between h-16">
        <a href="/" className="font-semibold text-mist">Shruti Singh</a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#experience" className="hover:text-blue-400">Experience</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>
      </div>
    </header>
  );
}
